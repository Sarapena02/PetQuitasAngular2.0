import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosMascotaTableComponent } from './tratamientos-mascota-table.component';

describe('TratamientosMascotaTableComponent', () => {
  let component: TratamientosMascotaTableComponent;
  let fixture: ComponentFixture<TratamientosMascotaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientosMascotaTableComponent]
    });
    fixture = TestBed.createComponent(TratamientosMascotaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
