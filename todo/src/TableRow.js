import React from "react";

const TableRow = ({ todo, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.status}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, todo)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(todo.title)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
