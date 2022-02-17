import React from "react";
import Task from "./Task";
export default function Tasks({ tasks, onCheckHandler, deleteHandler }) {
  return (
    <div className="todo-list">
      {tasks.length > 0 ? (
        // Map function for deleting a task,showing the task,and checking the task when done or not done
        tasks.map((item) => {
          return (
            <Task
              key={item.id}
              name={item.name}
              done={item.done}
              onCheckHandler={onCheckHandler}
              deleteHandler={deleteHandler}
              id={item.id}
            />
          );
        })
      ) : (
        // This is to show that no tasks are present when the particular navbar tab is empty
        <div>No items to display</div>
      )}
    </div>
  );
}
