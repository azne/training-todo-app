import React, { useState, useCallback } from "react";

import * as styles from "../app/styles.css";

type Todo = {
  id: number;
  taskName: string;
  taskText: string;
  isDone: boolean;
};

type TodoProps = {
  todo: Todo;
};

const Todo = ({todo}: TodoProps) => {
  const [isNameEdit, setIsNameEdit] = useState<boolean>(false);
  const [isTextEdit, setIsTextEdit] = useState<boolean>(false);

  const handleTaskNameEdit = useCallback(() => {
    setIsNameEdit(true);
  }, []);

  const handleTaskNameSave = useCallback(() => {
    setIsNameEdit(false);
  }, []);

  const handleTaskTextEdit = useCallback(() => {
    setIsTextEdit(true);
  }, []);

  const handleTaskTextSave = useCallback(() => {
    setIsTextEdit(false);
  }, []);

  return(
    <>
      <div className={styles.todo.wrapper}>
        <label className={styles.todo.label}>
          <input className={styles.todoCheckbox} type="checkbox" />
          <span className={styles.todoCheckIcon}>check</span>
        </label>
        <div className={styles.todo.contents}>
          {!isNameEdit ?
            <button
              onClick={handleTaskNameEdit}
              className={styles.todo.taskName}
            >{todo.taskName}</button>
          : null}
          {isNameEdit ?
            <input
              onBlur={handleTaskNameSave}
              onChange={(e) => {todo.taskName = e.target.value}}
              className={styles.todo.taskNameInput}
              defaultValue={todo.taskName}
              type="text"
              name="name"
              placeholder="タスクを入力..."
              autoComplete="off"
              maxLength={128}
              autoFocus
            />
          : null }

          {!isTextEdit ?
            <button
              onClick={handleTaskTextEdit}
              className={styles.todo.taskText}
            >{todo.taskText}</button>
          : null}
          {isTextEdit ?
            <input
              onBlur={handleTaskTextSave}
              onChange={(e) => {todo.taskText = e.target.value}}
              className={styles.todo.taskTextInput}
              defaultValue={todo.taskText}
              type="text"
              name="name"
              placeholder="説明文を入力..."
              autoComplete="off"
              maxLength={128}
              autoFocus
            />
          : null }
        </div>
      </div>
    </>
  )
};

export default Todo;
