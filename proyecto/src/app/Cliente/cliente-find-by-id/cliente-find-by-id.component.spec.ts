import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFindByIdComponent } from './cliente-find-by-id.component';

describe('ClienteFindByIdComponent', () => {
  let component: ClienteFindByIdComponent;
  let fixture: ComponentFixture<ClienteFindByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteFindByIdComponent]
    });
    fixture = TestBed.createComponent(ClienteFindByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
