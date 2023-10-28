import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoAllComponent} from './tratamiento-all.component';

describe('TratamientoAllComponent', () => {
    let component: TratamientoAllComponent;
    let fixture: ComponentFixture<TratamientoAllComponent>;

    beforeEach(async () => {
            TestBed.configureTestingModule({
            declarations: [TratamientoAllComponent]
    });
        fixture = TestBed.createComponent(TratamientoAllComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});