import React from "react";
import Maps from "./Maps";
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
function Spread() {
    /* const arr1 = [0, 1, 2, 3];
    const arr2 = [4, 5, 6, 7];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3); */
    const firstEmployee  = employees[0];
  return (
    <div key = {firstEmployee.id} className="Spread">
      <header className="App-header">
          <MapsEmployees {...firstEmployee} />
      </header>
    </div>
  );
}

export default Spread;