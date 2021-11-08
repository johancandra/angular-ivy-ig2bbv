import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StateModule } from './state/state.module';
import { completeToDos, incompleteToDos } from './state/todo';

describe('AppComponent ', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [StateModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(component).toBeTruthy();
  });

  it('should add Todo', () => {
    component._toDo = 'Learn something';
    component.addToDo();
    expect(component.toDos[2].task).toContain('Learn something');
  });

  it('should set todoList to completed', () => {
    component._toDo = 'Learn something';
    component.addToDo();
    component.onCompleteToDo(2);
    expect(component.toDos[2].complete).toBeTruthy();
  });

  it('should set todoCompleted to todoList', () => {
    component._toDo = 'Learn something';
    component.addToDo();
    component.onIncompleteToDo(2);
    expect(component.toDos[2].complete).toBeFalsy();
  });
});
