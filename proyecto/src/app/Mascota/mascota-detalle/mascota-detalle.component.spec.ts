import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaDetalleComponent } from './mascota-detalle.component';

describe('MascotaDetalleComponent', () => {
  let component: MascotaDetalleComponent;
  let fixture: ComponentFixture<MascotaDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaDetalleComponent]
    });
    fixture = TestBed.createComponent(MascotaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
