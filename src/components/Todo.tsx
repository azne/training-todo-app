import React, { useState, useCallback } from "react";

import * as styles from "../app/styles.css";

type Todo = {
  id: number;
  taskName: string;
  taskText: string;
  isDone: boolean;
};


const Todo = (todo: Todo) => {
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
          {!isNameEdit ? <button onClick={handleTaskNameEdit} className={styles.todo.taskName}>{todo.todo.taskName}</button> : null}
          {isNameEdit ? <input onBlur={handleTaskNameSave} className={styles.todo.taskNameInput} type="text" name="name" placeholder="タスクを入力..." autoComplete="off" maxLength={128} autoFocus></input> : null }

          {!isTextEdit ? <button onClick={handleTaskTextEdit} className={styles.todo.taskText}>説明文が入る</button> : null}
          {isTextEdit ? <input onBlur={handleTaskTextSave} className={styles.todo.taskTextInput} type="text" name="name" placeholder="説明文を入力..." autoComplete="off" maxLength={128} autoFocus></input> : null }
        </div>
      </div>
    </>
  )
};

export default Todo;
