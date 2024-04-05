import React, { useContext, useState } from "react";
import { MainButton } from "../../buttons/main-button/main-button";
import { TaskContext } from "../../../context/task-context";
import "./task-form-styles.css";

TaskContext;

function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask(taskTitle ? taskTitle : "Not assigned a text");
    e.target[0].value = "";
    setTaskTitle("");
  };

  return (
    <form onSubmit={handlerSubmit} className="task-from">
      <input
        className="task-form__input"
        type="text"
        placeholder="Write your homework"
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
      />
      <MainButton text="Save" />
    </form>
  );
}

export default TaskForm;
