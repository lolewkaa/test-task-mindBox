import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Main.module.css";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import { clearTodos, setTodosRepo } from "../slices/todosSlice";
import { v4 as uuidv4 } from "uuid";
import TodosList from "../components/TodosList/TodosList";

const Main: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [visibleList, setIsVisibleList] = useState("all");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo !== "") {
      dispatch(
        setTodosRepo({
          id: uuidv4(),
          todo: todo,
          done: false,
        })
      );
    }
    setTodo('')
  };

  const clearUncompletedTodos = () => {
    dispatch(clearTodos());
    console.log(todo);
  };

  return (
    <section className={styles.main}>
      <div className={styles.main__input_box}>
        <Input
          inputStyle={styles.main__input}
          handleChange={handleInputChange}
          value={todo}
        />
        <Button
          buttonStyle={styles.main__btn_plus}
          clickButton={addTodo}
          text="+"
        />
      </div>
      <TodosList visibleList={visibleList} />
      <div className={styles.main__btn_box}>
        <Button clickButton={() => setIsVisibleList("all")} buttonStyle={styles.main__btn} text="Все" />
        <Button
          buttonStyle={styles.main__btn}
          text="Выполненные"
          clickButton={() => setIsVisibleList("completed")}
        />
        <Button
          buttonStyle={styles.main__btn}
          text="Невыполненные"
          clickButton={() => setIsVisibleList("uncompleted")}
        />
        <Button
          buttonStyle={styles.main__btn}
          text="Очистить выполненные"
          clickButton={clearUncompletedTodos}
        />
      </div>
    </section>
  );
};
export default Main;
