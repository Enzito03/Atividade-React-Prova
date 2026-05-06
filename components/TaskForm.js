import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Digite uma tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}

export default TaskForm;