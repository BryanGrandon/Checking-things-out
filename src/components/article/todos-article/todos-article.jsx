import React from "react";
import TaskList from "../../lists/task-list/task-list";
import TaskForm from "../../form/task-form/task-form";

import { TaskContextProvider } from "../../../context/task-context";

export default function TodosArticle() {
  return (
    <article>
      <h2>To-Dos</h2>
      <TaskContextProvider>
        <TaskForm />
        <TaskList />
      </TaskContextProvider>
    </article>
  );
}
