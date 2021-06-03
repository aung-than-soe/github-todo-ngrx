import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';

export interface AppState {
  todo: fromTodo.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: fromTodo.todoReducer
};
