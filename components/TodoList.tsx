"use client";
import AddTodo from "@/components/AddTodo";
import { TodosContext } from "@/components/TodoContext";
import TodoItem from "@/components/TodoItem";
import { useContext } from "react";

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  return (
    <main>
      <AddTodo />
      {state?.todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </main>
  );
}
