import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const addTask = () => {};
const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos,setTodos]=useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos,inputValue]);
      setInputValue("");
    }
  };
  const handleChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h1>ToDoList</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Tasks</label>
        <input
          type="text"      
          onChange={handleChange}
          placeholder="Enter the task"
          value={inputValue}
        />
        <button onClick={addTask} type="submit">
          Add Task
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}> {todo} </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
