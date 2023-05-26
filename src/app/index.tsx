import { memo, useState, useRef, useEffect } from "react";

import AddTodoBtn from "@components/AddTodoBtn";
import Menu from "@components/Menu";
import TodoList from "@components/TodoList";
import { ThemeProvider } from "@theme/provider";

import * as styles from "./styles.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const taskNameRef = useRef<HTMLInputElement>(null)
  const taskTextRef = useRef<HTMLInputElement>(null)

  type Todo = {
    id: number;
    taskName: string;
    taskText: string;
    isDone: boolean;
  };

  useEffect(() => {
    const newTodos = [
      {
        id: 1,
        taskName: "タスクの表示1",
        taskText: "説明文です",
        isDone: false,
      },
      {
        id: 2,
        taskName: "タスクの表示2",
        taskText: "説明文です",
        isDone: false,
      },
    ];

    setTodos(newTodos);
  }, []);

  const handleAddTodo = () => {
    const taskName = taskNameRef.current?.value || "";
    const taskText = taskTextRef.current?.value || "";
    const newTodo: Todo = {
      id: todos.length + 1,
      taskName,
      taskText,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header.wrapper}>
          <h1 className={styles.header.title}>training-fe ToDoApp</h1>
          <Menu />
        </header>
        <main className={styles.main}>
          <TodoList todos={todos} />
        </main>
        <footer className={styles.footer}>
          <AddTodoBtn />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default memo(App);
