import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaviewComponent } from './listaview.component';

describe('ListaviewComponent', () => {
  let component: ListaviewComponent;
  let fixture: ComponentFixture<ListaviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaviewComponent]
    });
    fixture = TestBed.createComponent(ListaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
