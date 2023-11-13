import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosHistorialComponent } from './tratamientos-historial.component';

describe('TratamientosHistorialComponent', () => {
  let component: TratamientosHistorialComponent;
  let fixture: ComponentFixture<TratamientosHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientosHistorialComponent]
    });
    fixture = TestBed.createComponent(TratamientosHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
