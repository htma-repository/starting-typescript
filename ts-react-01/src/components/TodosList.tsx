import styles from "./TodosList.module.css";

interface TodoListType {
  title: string;
  onDelete: () => void;
}

const TodosList: React.FC<TodoListType> = ({ title, onDelete }) => {
  return (
    <li className={styles.item}>
      <p>{title}</p>
      <button onClick={onDelete}>delete</button>
    </li>
  );
};

export default TodosList;
