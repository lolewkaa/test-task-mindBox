import React from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";


const DoneBoard: React.FC = () => {
  const useAppSelector = useSelector.withTypes<RootState>();
  const todos = useAppSelector((state) => state.todos.value);
  const uncompletedTodos = todos.filter((todo) => !todo.done);

  return (
    <div className={styles.doneBoard}>
      <p>{uncompletedTodos.length}/{todos.length}</p>
    </div>
  );
};
export default DoneBoard;