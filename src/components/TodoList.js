import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (id, mode) => {
    let editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.editmode = mode;
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Todo
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editHandler={editHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
