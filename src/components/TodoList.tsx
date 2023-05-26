import React from 'react'

import Todo from "./Todo";

type TodoProps = {
  todos: Todo[];
}

const TodoList = ({todos}: TodoProps) => {
  return(
    <>
    {todos.map((todo) => (
      <Todo todo={todo} key={todo.id} />
    ))}
    </>
  )
};

export default TodoList;
