import TodosClass from "../models/todo";
import TodosList from "./TodosList";

import styles from "./Todos.module.css";

interface TodosType {
  todos: TodosClass[];
  onDelete: (id: string) => void;
}

const Todos: React.FC<TodosType> = ({ todos, onDelete }) => {
  return (
    <section className={styles.todos}>
      <ul>
        {todos.map((todo) => (
          <TodosList
            {...todo}
            key={todo.id}
            onDelete={onDelete.bind(null, todo.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
