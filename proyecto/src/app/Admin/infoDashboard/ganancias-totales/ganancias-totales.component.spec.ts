import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciasTotalesComponent } from './ganancias-totales.component';

describe('GananciasTotalesComponent', () => {
  let component: GananciasTotalesComponent;
  let fixture: ComponentFixture<GananciasTotalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GananciasTotalesComponent]
    });
    fixture = TestBed.createComponent(GananciasTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
