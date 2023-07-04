import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigComponent } from './config.component';
import { ReusableComponentModule } from 'src/app/reusable-component/reusable-component.module';
import { AdminRoutingModule } from '../admin-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigComponent],
      imports: [
        ReusableComponentModule,
        AdminRoutingModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
