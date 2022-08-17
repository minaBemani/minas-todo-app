import React from "react";
import TodoEdit from "./TodoEdit";
import TodoInfo from "./TodoInfo";

const Todo = ({
  todo,
  todos,
  setTodos,
  completeTodo,
  removeTodo,
  editHandler,
}) => {
  return (
    <>
      {todo.editmode ? (
        <TodoEdit todo={todo} todos={todos} editHandler={editHandler} />
      ) : (
        <TodoInfo
          todo={todo}
          setTodos={setTodos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          editHandler={editHandler}
        />
      )}
    </>
  );
};

export default Todo;
