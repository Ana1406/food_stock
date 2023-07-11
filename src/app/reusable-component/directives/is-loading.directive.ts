import {
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Directive({
  selector: '[appIsLoading]',
})
export class IsLoadingDirective implements OnChanges {
  @Input() appIsLoading = false;
  private viewContainerRef = inject(ViewContainerRef);
  private renderer = inject(Renderer2);
  private loadingComponent: ComponentRef<SpinnerComponent>;
  private loadingBackdrop;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appIsLoading'].currentValue) {
      this.createLoadingComponent();
      this.createBackdrop();
    } else {
      this.removeLoadingComponent();
    }
  }

  createLoadingComponent() {
    this.loadingComponent =
      this.viewContainerRef.createComponent(SpinnerComponent);

    this.loadingComponent.location.nativeElement.classList.add(
      'spinner-backdrop-component'
    );

    this.viewContainerRef.element.nativeElement.appendChild(
      this.loadingComponent.location.nativeElement
    );
  }

  createBackdrop() {
    this.viewContainerRef.element.nativeElement.classList.add('relative');
    this.loadingBackdrop = this.renderer.createElement('div');
    this.renderer.addClass(this.loadingBackdrop, 'spinner-backdrop');

    this.viewContainerRef.element.nativeElement.appendChild(
      this.loadingBackdrop
    );
  }

  removeLoadingComponent() {
    this.viewContainerRef.remove(this.viewContainerRef.length - 1);
    this.viewContainerRef.element.nativeElement.removeChild(
      this.loadingBackdrop
    );
  }
}
