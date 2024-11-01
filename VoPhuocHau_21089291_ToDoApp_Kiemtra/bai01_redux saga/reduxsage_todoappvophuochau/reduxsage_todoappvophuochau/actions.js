// actions.js
import { FETCH_TODOS, ADD_TODO, EDIT_TODO } from './actionTypes';

export const fetchTodos = () => ({ type: FETCH_TODOS });
export const addTodo = (newTodo) => ({ type: ADD_TODO, payload: newTodo });
export const editTodo = (id, updatedContent) => ({
  type: EDIT_TODO,
  payload: { id, content: updatedContent },
});
