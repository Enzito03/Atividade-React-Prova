import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, removeTask, toggleTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;