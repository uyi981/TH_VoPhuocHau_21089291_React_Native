// reducers.js
import { FETCH_TODOS_SUCCESS, ADD_TODO_SUCCESS, EDIT_TODO_SUCCESS } from './actionTypes';

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, content: action.payload.content } : todo
        ),
      };
    default:
      return state;
  }
};
