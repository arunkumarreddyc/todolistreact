import React, { useState } from "react";

export default function Inputbar({ onSubmit }) {
  const [task, setTask] = useState("");
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Inputbar to take the string and show it as a task when pressed enter key */}
        <input
          type="text"
          className="form-control add-task"
          placeholder="New Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key == "Enter" && task.length > 0) {
              onSubmit(task);
              setTask("");
            }
          }}
        />
      </form>
    </div>
  );
}
