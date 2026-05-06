import React from "react";

function TaskItem({ task, removeTask, toggleTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeTask(task.id)}
      >
        Remover
      </button>
    </li>
  );
}

export default TaskItem;