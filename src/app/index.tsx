import { memo } from "react";

import AddTodoBtn from "@components/AddTodoBtn";
import Menu from "@components/Menu";
import TodoList from "@components/TodoList";
import { ThemeProvider } from "@theme/provider";

import * as styles from "./styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header.wrapper}>
          <h1 className={styles.header.title}>training-fe ToDoApp</h1>
          <Menu />
        </header>
        <main className={styles.main}>
          <TodoList />
        </main>
        <footer className={styles.footer}>
          <AddTodoBtn />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default memo(App);
