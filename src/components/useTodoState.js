import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText) => {
      let list = [...todos];
      list=[...list, {id: todos.length + 1, title:todoText, isActive:false}]
      console.log(list);
      setTodos(list);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};
