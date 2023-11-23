import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlistaComponent } from './inputlista.component';

describe('InputlistaComponent', () => {
  let component: InputlistaComponent;
  let fixture: ComponentFixture<InputlistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputlistaComponent]
    });
    fixture = TestBed.createComponent(InputlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
