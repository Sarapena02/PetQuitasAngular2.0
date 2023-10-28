import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditMascotaComponent } from './form-edit-mascota.component';

describe('FormEditMascotaComponent', () => {
  let component: FormEditMascotaComponent;
  let fixture: ComponentFixture<FormEditMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEditMascotaComponent]
    });
    fixture = TestBed.createComponent(FormEditMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
