import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/types';

type TestOption = {
  label: string;
  value: boolean;
};

describe('SelectComponent', () => {
  let component: SelectComponent<TestOption>;
  let fixture: ComponentFixture<SelectComponent<TestOption>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent<TestOption>);

    component = fixture.componentInstance;
    component.options = [
      { label: 'Si', value: true },
      { label: 'No', value: false },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
