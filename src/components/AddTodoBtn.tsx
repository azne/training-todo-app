
import * as styles from "../app/styles.css";

const AddTodoBtn = () => {
  return(
    <button className={styles.addTodoBtn}><span className={styles.addTodoBtnIcon}></span>新規</button>
  )
};

export default AddTodoBtn;