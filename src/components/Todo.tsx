
import * as styles from "../app/styles.css";

const Todo = () => {
  return(
    <>
      <div className={styles.todo.wrapper}>
        <label className={styles.todo.label}>
          <input className={styles.todoCheckbox} type="checkbox" />
          <span className={styles.todoCheckIcon}>check</span>
        </label>
        <div className={styles.todo.contents}>
          <div className={styles.todo.taskName}>タスクの表示タスクの表示</div>
          <input className={styles.todo.taskNameInput} type="text" name="name" placeholder="タスクを入力..." autoComplete="off" maxLength={128}></input>
          <div className={styles.todo.taskText}>説明文が入る</div>
          <input className={styles.todo.taskTextInput} type="text" name="name" placeholder="説明文を入力..." autoComplete="off" maxLength={128}></input>
        </div>
      </div>
      <div className={styles.todo.wrapper}>
        <label className={styles.todo.label}>
          <input className={styles.todoCheckbox} type="checkbox" />
          <span className={styles.todoCheckIcon}>check</span>
        </label>
        <div className={styles.todo.contents}>
          <div className={styles.todo.taskName}>タスクの表示タスク</div>
          <div className={styles.todo.taskText}>説明文が入る</div>
        </div>
      </div>
    </>
  )
};

export default Todo;
