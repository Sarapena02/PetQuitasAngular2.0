import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVeterinarioComponent } from './form-veterinario.component';

describe('FormVeterinarioComponent', () => {
  let component: FormVeterinarioComponent;
  let fixture: ComponentFixture<FormVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormVeterinarioComponent]
    });
    fixture = TestBed.createComponent(FormVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
