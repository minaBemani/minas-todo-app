import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("همه کارها");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    } else
      setTodos([
        { text: input, isCompleted: false, id: uuidv4(), editmode: false },
        ...todos,
      ]);
    setInput("");
  };

  const filterHandler = () => {
    switch (status) {
      case "انجام شده ها":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "انجام نشده ها":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-3 fw-bold">
        : لیست کارهای من
      </h1>
      <div className="mt-5 mb-5 my-responsive">
        <div className="input-width">
          <form onSubmit={handleSubmit} className="input-group">
            <button className="btn btn-info">اضافه کن</button>
            <input
              type="text"
              name="input"
              value={input}
              placeholder="... یک وظیفه جدید وارد نمایید"
              onChange={handleChange}
              className="form-control text-end"
            />
          </form>
        </div>
        <div className="select-width">
          <form>
            <select
              name="todos"
              onChange={statusHandler}
              className="form-select"
            >
              <option value="همه کارها">همه کارها</option>
              <option value="انجام شده ها">انجام شده ها</option>
              <option value="انجام نشده ها">انجام نشده ها</option>
            </select>
          </form>
        </div>
      </div>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default TodoForm;
