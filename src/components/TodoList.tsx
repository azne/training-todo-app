import React from 'react'

import Todo from "./Todo";

const TodoList = (todos: Todo) => {
  return(
    <>
    {todos.todos.map((todo) => (
      // <Todo todos={todos} />
      <Todo todo={todo} key={todo.id} />
    ))}
    </>
  )
};

export default TodoList;
