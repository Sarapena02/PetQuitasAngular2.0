import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditTratamientoComponent } from './form-edit-tratamiento.component';

describe('FormEditTratamientoComponent', () => {
  let component: FormEditTratamientoComponent;
  let fixture: ComponentFixture<FormEditTratamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditTratamientoComponent]
    });
    fixture = TestBed.createComponent(FormEditTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
