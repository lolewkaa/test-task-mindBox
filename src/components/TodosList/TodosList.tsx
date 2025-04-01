import React from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";
import Todo from "../Todo/Todo";

type PropsTodosList = {
  visibleList: string;
};

const TodosList: React.FC<PropsTodosList> = ({ visibleList }) => {
  const useAppSelector = useSelector.withTypes<RootState>();
  const todos = useAppSelector((state) => state.todos.value);
  const completedTodos = todos.filter((todo) => todo.done);
  const uncompletedTodos = todos.filter((todo) => !todo.done);
  return (
    <section className={styles.todosList}>
     {(() => {
        switch (visibleList) {
          case "all":
            return todos.map((el) => <Todo key={el.id} todo={el} />);
          case "completed":
            return completedTodos.map((el) => <Todo key={el.id} todo={el} />);
          case "uncompleted":
            return uncompletedTodos.map((el) => <Todo key={el.id} todo={el} />);
          default:
            return null;
        }
      })()}
    </section>
  );
};
export default TodosList;
