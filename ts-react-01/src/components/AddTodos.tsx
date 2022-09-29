import React, { useRef } from "react";

import styles from "./AddTodos.module.css";

interface AddTodosType {
  onAddTodo: (todoTitle: string) => void;
}

const AddTodos: React.FC<AddTodosType> = ({ onAddTodo }) => {
  const inputTodosRef = useRef<HTMLInputElement>(null);

  const todosSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoInput = inputTodosRef.current!.value;

    if (todoInput.trim().length === 0) {
      return;
    }

    onAddTodo(todoInput);

    inputTodosRef.current!.value = "";
  };

  return (
    <form onSubmit={todosSubmitHandler} className={styles.form}>
      <label htmlFor="title">Input Todos</label>
      <input type="text" ref={inputTodosRef} />
      <button>Submit</button>
    </form>
  );
};

export default AddTodos;
