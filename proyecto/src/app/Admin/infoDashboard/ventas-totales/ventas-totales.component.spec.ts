import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasTotalesComponent } from './ventas-totales.component';

describe('VentasTotalesComponent', () => {
  let component: VentasTotalesComponent;
  let fixture: ComponentFixture<VentasTotalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasTotalesComponent]
    });
    fixture = TestBed.createComponent(VentasTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
