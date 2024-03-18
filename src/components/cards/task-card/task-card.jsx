import React from "react";
import "./task-card-styles.css";

function TaskCard({ title, completed }) {
  return (
    <section className="taskCard">
      <p>{title}</p>
      <section className="taskCard__section">
        <p>{completed ? "Completed" : "Pending"}</p>
        <button>X</button>
      </section>
    </section>
  );
}

export default TaskCard;
