import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasActivasComponent } from './mascotas-activas.component';

describe('MascotasActivasComponent', () => {
  let component: MascotasActivasComponent;
  let fixture: ComponentFixture<MascotasActivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasActivasComponent]
    });
    fixture = TestBed.createComponent(MascotasActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
