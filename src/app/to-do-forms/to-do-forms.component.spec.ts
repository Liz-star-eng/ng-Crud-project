import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFormsComponent } from './to-do-forms.component';

describe('ToDoFormsComponent', () => {
  let component: ToDoFormsComponent;
  let fixture: ComponentFixture<ToDoFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoFormsComponent]
    });
    fixture = TestBed.createComponent(ToDoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
