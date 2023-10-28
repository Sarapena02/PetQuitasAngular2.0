import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosUltimoMesComponent } from './tratamientos-ultimo-mes.component';

describe('TratamientosUltimoMesComponent', () => {
  let component: TratamientosUltimoMesComponent;
  let fixture: ComponentFixture<TratamientosUltimoMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientosUltimoMesComponent]
    });
    fixture = TestBed.createComponent(TratamientosUltimoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
