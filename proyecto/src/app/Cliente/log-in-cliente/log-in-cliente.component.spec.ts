import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInClienteComponent } from './log-in-cliente.component';

describe('LogInClienteComponent', () => {
  let component: LogInClienteComponent;
  let fixture: ComponentFixture<LogInClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInClienteComponent]
    });
    fixture = TestBed.createComponent(LogInClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
