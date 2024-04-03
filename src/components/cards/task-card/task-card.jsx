import React from "react";
import "./task-card-styles.css";
import { IoClose } from "react-icons/io5";

function TaskCard({ title, completed }) {
  let isCompleted = completed ? "completed" : "pending";

  return (
    <section className="taskCard">
      <p>{title}</p>
      <section className="taskCard__section">
        <p className={`task-` + isCompleted}>{isCompleted}</p>
        <button className="btn-taskCard">
          <IoClose />
        </button>
      </section>
    </section>
  );
}

export default TaskCard;
