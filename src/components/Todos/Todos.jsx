import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";

function Todos() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default Todos;
