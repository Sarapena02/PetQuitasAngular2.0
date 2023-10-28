import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoDetalleComponent } from './tratamiento-detalle.component';

describe('TratamientoDetalleComponent', () => {
    let component: TratamientoDetalleComponent;
    let fixture: ComponentFixture<TratamientoDetalleComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [TratamientoDetalleComponent]
        });
        fixture = TestBed.createComponent(TratamientoDetalleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});