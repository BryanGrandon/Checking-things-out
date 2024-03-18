import React, { createContext, useState } from "react";
import { fetchData } from "../service/fetchData";

const TaskContext = createContext();

const todosData = fetchData(
  "https://jsonplaceholder.typicode.com/todos?userId=1"
);

function TaskContextProvider(props) {
  const data = todosData.read();
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
