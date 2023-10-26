import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariosActivosComponent } from './veterinarios-activos.component';

describe('VeterinariosActivosComponent', () => {
  let component: VeterinariosActivosComponent;
  let fixture: ComponentFixture<VeterinariosActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariosActivosComponent]
    });
    fixture = TestBed.createComponent(VeterinariosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
