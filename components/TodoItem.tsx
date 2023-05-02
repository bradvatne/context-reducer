"use client";
import React, { useContext } from "react";
import { TodosContext } from "./TodoContext";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { dispatch } = useContext(TodosContext);
  return (
    <div className={todo.complete ? "line-through" : ""}>
      {todo.content}
      <button
        className="ml-2 px-4 py-2 bg-red-300 text-white"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo })}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;