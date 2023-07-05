import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionComponent } from './permission.component';
import { ReusableComponentModule } from 'src/app/reusable-component/reusable-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PermissionComponent', () => {
  let component: PermissionComponent;
  let fixture: ComponentFixture<PermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionComponent],
      imports: [ReusableComponentModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
