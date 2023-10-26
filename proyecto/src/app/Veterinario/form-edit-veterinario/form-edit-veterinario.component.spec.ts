import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditVeterinarioComponent } from './form-edit-veterinario.component';

describe('FormEditVeterinarioComponent', () => {
  let component: FormEditVeterinarioComponent;
  let fixture: ComponentFixture<FormEditVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditVeterinarioComponent]
    });
    fixture = TestBed.createComponent(FormEditVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
