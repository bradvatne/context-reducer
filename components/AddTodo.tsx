"use client";
import React, { FormEvent, useContext, useState } from "react";
import { TodosContext } from "./TodoContext";

const AddTodo = () => {
  const { state, dispatch } = useContext(TodosContext);
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    dispatch({
      type: "ADD_TODO",
      payload: { id: text.length, content: text, complete: false },
    });
    console.log(state);
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="rounded border-2 border-gray-100 m-2 p-2"
      ></input>
      <button
        className="ml-2 px-4 py-2 bg-green-300 text-white"
        onClick={(e) => handleSubmit(e)}
      >
        Add Item
      </button>
    </div>
  );
};

export default AddTodo;
