import React, { useState } from "react";

const TodoEdit = ({ todo, todos, setTodos, editHandler }) => {
  const [newInput, setNewinput] = useState(todo.text);

  const saveNewTodo = (id) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newInput;
      }
      return todo;
    });
    editHandler(todo.id, false);
    setTodos(newTodos);
  };

  return (
    <>
      <div
        key={todo.id}
        className={
          "alert col-11 col-lg-7 col-md-8 col-sm-10 mx-auto text-break d-flex justify-content-between bg-color"
        }
      >
        <input
          type="text"
          name="newInput"
          defaultValue={todo.text}
          onChange={(e) => setNewinput(e.target.value)}
          className="form-control w-75 me-4"
        />
        <span className="d-flex align-items-center">
          <button
            onClick={() => saveNewTodo(todo.id)}
            className="btn btn-outline-info me-4"
            style={{ width: "70px" }}
          >
            ذخیره
          </button>
          <button
            onClick={() => editHandler(todo.id, false)}
            className="btn btn-outline-info"
            style={{ width: "70px" }}
          >
            لغو
          </button>
        </span>
      </div>
    </>
  );
};

export default TodoEdit;
