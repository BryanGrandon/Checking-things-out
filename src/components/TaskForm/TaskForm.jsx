import React, { useContext, useState } from "react";
import { Button } from "../Button/Button";
import { TaskContext } from "../../context/TaskContext";

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
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Write your homework"
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
      />
      <Button text="Save" />
    </form>
  );
}

export default TaskForm;
