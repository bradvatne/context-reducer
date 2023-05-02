"use client";
import { initialState, todosReducer } from "@/store";
import {
  createContext,
  useReducer,
  PropsWithChildren,
  ReactNode,
} from "react";

type TodoContextProps = {
  state: TodoState;
  dispatch: Function;
};

export const TodosContext = createContext<PropsWithChildren<TodoContextProps>>(
  {} as TodoContextProps
);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  //initialize a useReducer from todosReducer and initialState without a type error
  const [state, dispatch] = useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
