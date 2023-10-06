import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploEstrucComponent } from './ejemplo-estruc.component';

describe('EjemploEstrucComponent', () => {
  let component: EjemploEstrucComponent;
  let fixture: ComponentFixture<EjemploEstrucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemploEstrucComponent]
    });
    fixture = TestBed.createComponent(EjemploEstrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
