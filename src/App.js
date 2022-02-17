import "./App.css";
import React, { useState } from "react";
import Inputbar from "./Inputbar";
import Navbar from "./Navbar";
import Tasks from "./Tasks";

function App() {
  const [filter, setFilter] = useState("all");
  const [newId, setNewId] = useState(4);
  const [tasks, setTasks] = useState([
    // Data of tasks showing in the form of object.
    {
      id: 1,
      name: "Create theme",
      done: false,
    },
    {
      id: 2,
      name: "Work on wordpress",
      done: true,
    },
    {
      id: 3,
      name: "Error solve in HTML template",
      done: false,
    },
  ]);

  const formSubmit = (value) => {
    const newTask = {
      id: newId,
      name: value,
      // Setting default value of the checkbox
      done: false,
    };
    setTasks([...tasks, newTask]);
    setNewId(newId + 1);
  };
  const onCheckHandler = (id, checked) => {
    setTasks(
      tasks.map((item) => {
        return item.id === id ? { ...item, done: checked } : item;
      })
    );
  };

  const onFilterChange = (newValue) => {
    setFilter(newValue);
  };

  const filterTasks = () => {
    // "all", "active", "completed"
    if (filter === "active") {
      return tasks.filter((item) => item.done === false);
    } else if (filter === "completed") {
      return tasks.filter((item) => item.done === true);
    }
    return tasks;
  };

  const deleteHandler = (id) => {
    const filterValues = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(filterValues);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body"></div>
              {/* Importing components */}
              <Inputbar onSubmit={formSubmit} />
              <Navbar onFilterChange={onFilterChange} />
              <Tasks
                tasks={filterTasks()}
                onCheckHandler={onCheckHandler}
                deleteHandler={deleteHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
