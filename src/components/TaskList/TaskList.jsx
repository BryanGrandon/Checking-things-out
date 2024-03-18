import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "../TaskCard/TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <div>No tasks yet</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} completed={task.completed} />
      ))}
    </div>
  );
}

export default TaskList;
