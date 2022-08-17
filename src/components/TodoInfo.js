import React from "react";

const TodoInfo = ({ todo, completeTodo, removeTodo, editHandler }) => {
  return (
    <>
      <div
        key={todo.id}
        className={
          todo.isCompleted
            ? "alert col-11 col-lg-7 col-md-8 col-sm-10 mx-auto text-break d-flex justify-content-between bg-color text-decoration-line-through opacity-25"
            : "alert col-11 col-lg-7 col-md-8 col-sm-10 mx-auto text-break d-flex justify-content-between bg-color"
        }
      >
        <span className="w-75">{todo.text}</span>
        <span className="d-flex align-items-center">
          <i
            className="bi bi-check-lg px-2 icon-style"
            onClick={() => completeTodo(todo.id)}
          ></i>
          <i
            className="bi bi-pencil-square px-2 icon-style"
            onClick={() => editHandler(todo.id, true)}
          ></i>
          <i
            className="bi bi-trash3 px-2 icon-style"
            onClick={() => removeTodo(todo.id)}
          ></i>
        </span>
      </div>
    </>
  );
};

export default TodoInfo;
