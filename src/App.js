import React from "react";
import Headers from "./components/Header";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import useTodoState from "./components/useTodoState";
import "./App.css";

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState(["ReactJs", "VueJS"]);
  console.log(todos);
  return (
    <div className="App">
      <Headers />
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
