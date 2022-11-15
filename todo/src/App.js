import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [todos, setToDO] = useState();

  useEffect(() => {
    axios.get("?_limit=10").then((response) => {
      setToDO(response.data);
    });
  }, []);

  const handleAddFormChange = (event) => {};

  const handleAddTask = (event) => {};

  const handleAddFormSubmit = (event) => {};

  const handleEditFormSubmit = (event) => {};

  return (
    <div className="app-container">
      <div className="header">
        <h1>TODO List</h1>
      </div>
      <form onSubmit={handleAddFormSubmit}>
        <input
          className="taskTitleInput"
          type="text"
          name="fullName"
          required="required"
          placeholder="Task Title"
        />
        <button className="buttonAddTask" onClick={handleAddTask} type="submit">
          Add Task
        </button>
      </form>

      <form>
        <input
          className="searchInput"
          type="text"
          name="fullName"
          required="required"
          placeholder="Search ..."
          onChange={handleAddFormChange}
        />
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table className="taskTable">
          <thead>
            <tr>
              <th> Title </th>
              <th> Status </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {/* <TableRow
                todo={todo}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                /> */}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
