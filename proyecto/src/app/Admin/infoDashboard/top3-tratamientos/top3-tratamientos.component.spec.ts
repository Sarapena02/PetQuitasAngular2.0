import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3TratamientosComponent } from './top3-tratamientos.component';

describe('Top3TratamientosComponent', () => {
  let component: Top3TratamientosComponent;
  let fixture: ComponentFixture<Top3TratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Top3TratamientosComponent]
    });
    fixture = TestBed.createComponent(Top3TratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
