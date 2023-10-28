import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClienteTablaComponent } from "./tabla-cliente.component";

describe("ClienteTablaComponent", () => {
    let component: ClienteTablaComponent;
    let fixture: ComponentFixture<ClienteTablaComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ClienteTablaComponent]
        });
        fixture = TestBed.createComponent(ClienteTablaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});