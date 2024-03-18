import React from "react";
import TaskList from "../lists/task-list/task-list";
import TaskForm from "../form/task-form/task-form";

import { TaskContextProvider } from "../../context/TaskContext";

function Todos() {
  return (
    <TaskContextProvider>
      <TaskForm />
      <TaskList />
    </TaskContextProvider>
  );
}

export default Todos;
