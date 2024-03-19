import React, { createContext, useState } from "react";
import getTodos from "../service/api/get-todos";

const TaskContext = createContext();

function TaskContextProvider(props) {
  const data = getTodos.read();
  const [tasks, setTasks] = useState(data);

  function createTask(taskTitle) {
    const newTask = {
      title: taskTitle,
      id: Number(tasks.length) + 1,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider };
