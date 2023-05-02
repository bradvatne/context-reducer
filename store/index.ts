import { Reducer, useReducer } from "react";

export const initialState: TodoState = {
  todos: [],
};

export const todosReducer: Reducer<TodoState, TodoAction> = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return { todos: state.todos.concat(action.payload) };
    }
    case "UPDATE_TODO": {
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return { todos: newTodos };
    }
    case "DELETE_TODO": {
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { todos: newTodos };
    }
    default:
      return state;
  }
};
