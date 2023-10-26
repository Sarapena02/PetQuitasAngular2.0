import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditClienteComponent } from './form-edit-cliente.component';

describe('FormEditClienteComponent', () => {
  let component: FormEditClienteComponent;
  let fixture: ComponentFixture<FormEditClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditClienteComponent]
    });
    fixture = TestBed.createComponent(FormEditClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
