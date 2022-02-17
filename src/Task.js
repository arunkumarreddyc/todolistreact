import React from "react";

export default function Task({
  name,
  done,
  id,
  onCheckHandler,
  deleteHandler,
}) {
  return (
    <div>
      <div className={`todo-item   ${done ? "complete" : ""}`}>
        <div className="checker">
          <span className="">
            {/* Checkbox for checking the action of todo task in the browser */}
            <input
              type="checkbox"
              checked={done}
              onChange={(e) => onCheckHandler(id, e.target.checked)}
            />
          </span>
        </div>
        <span className="mx-2">{name}</span>
        {/* Delete button on the right side of task in browser */}
        <button
          style={{ float: "right" }}
          onClick={() => deleteHandler(id)}
          className="btn btn-danger p-1"
        >
          x
        </button>
      </div>
    </div>
  );
}
