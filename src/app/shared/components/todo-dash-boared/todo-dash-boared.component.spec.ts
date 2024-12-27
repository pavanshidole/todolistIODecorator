import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDashBoaredComponent } from './todo-dash-boared.component';

describe('TodoDashBoaredComponent', () => {
  let component: TodoDashBoaredComponent;
  let fixture: ComponentFixture<TodoDashBoaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDashBoaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDashBoaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
