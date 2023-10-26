import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInVeterinarioComponent } from './log-in-veterinario.component';

describe('LogInVeterinarioComponent', () => {
  let component: LogInVeterinarioComponent;
  let fixture: ComponentFixture<LogInVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInVeterinarioComponent]
    });
    fixture = TestBed.createComponent(LogInVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
