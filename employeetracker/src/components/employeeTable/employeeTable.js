import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

function employeeTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Character Image</th>
          <th>
            Name{" "}
            <button onClick={props.sortByName}>
              <i class="fas fa-sort"></i>
            </button>
            <input
              className="search-input"
              type="text"
              placeholder="Search by name"
              onChange={(e) => props.searchByName(e.target.value)}
            />
          </th>
          <th>Occupation</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((item) => (
          <tr key={item.id}>
            <td>
              <img className="images" alt={item.name} src={item.image} />
            </td>
            <td>{item.name}</td>
            <td>{item.occupation}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default employeeTable;
