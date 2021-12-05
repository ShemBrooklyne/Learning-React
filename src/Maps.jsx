import React from "react";
import "./App.css";
import MapsEmployees from "./MapsEmployees";

const employees = [
  {
    id: 1,
    name: "George",
  },
  {
    id: 2,
    name: "Stephanie",
  },
  {
    id: 3,
    name: "Stephen",
  },
];

function Maps() {
  return (
    <div className="Maps">
      <header className="App-header">
        {employees.map((employee) => (
          <div key={employee.id}>
            <MapsEmployees id={employee.id} name={employee.name} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default Maps;
