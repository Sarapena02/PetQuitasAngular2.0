import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadTratamientosTipoComponent } from './cantidad-tratamientos-tipo.component';

describe('CantidadTratamientosTipoComponent', () => {
  let component: CantidadTratamientosTipoComponent;
  let fixture: ComponentFixture<CantidadTratamientosTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantidadTratamientosTipoComponent]
    });
    fixture = TestBed.createComponent(CantidadTratamientosTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
