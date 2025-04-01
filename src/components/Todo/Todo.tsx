import React from "react";
import styles from "./style.module.css";
import { RepoItem } from "../../types/types";
import Checkbox from "../../ui/CheckBox/CheckBox";
import { useDispatch } from "react-redux";
import { changeTodoStatus } from "../../slices/todosSlice";

type PropsTodo = {
  todo: RepoItem;
};

const Todo: React.FC<PropsTodo> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(changeTodoStatus({ ...todo, done: !todo.done }));
  };
  return (
    <div className={styles.todo}>
      <Checkbox
        checked={todo.done}
        handleCheckboxChange={handleCheckboxChange}
      />
      <p className={styles.todo__text}>{todo.todo}</p>
    </div>
  );
};
export default Todo;
