import React, { useState } from "react";

import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";
import Count from "./components/Count";

import TodosClass from "./models/todo";

// interface TodosData {
//   id: string;
//   title: string;
// }

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<TodosClass[]>([]);

  // const todos = [new TodosClass("todos-1"), new TodosClass("todos-2")];

  const addTodoHandler = (todoTitle: string) => {
    const todoClass = new TodosClass(todoTitle);
    setTodos((prevState) => [...prevState, todoClass]);
  };

  const deleteTodoHandler = (id: string) => {
    const deleteTodos = todos.filter((todo) => todo.id !== id);

    console.log(id, deleteTodos);

    setTodos(deleteTodos);
  };

  const countHandler = () => setCount((prevState) => prevState + 1);

  return (
    <>
      <Count count={count} countHandler={countHandler} />
      <AddTodos onAddTodo={addTodoHandler} />
      <Todos todos={todos} onDelete={deleteTodoHandler} />
    </>
  );
};

export default App;
