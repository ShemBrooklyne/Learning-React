import React from "react";
import "./App.css";

function Workers() {
  const workers = ["Martin", "Lawrence", "Barbie"];
  //conditional rendering:: using && operator, condition on the right will be return if the first conditions are met.
  //Disclaimer: If array is empty, an empty screen will be rendered
  const firstWorker = workers && workers[0]; 
  //The above will fetch the first item in the array
  //if the array is empty or undefined, an error will be throw since cannot access 0 index of undefined.
  //but by use of && operator as error handling. It'll first safety check first args before executing the last.
  console.log(firstWorker);
  return (
    <div className="Workers">
      {workers.length > 0 && (
        <div>
          <h1>Workers List: </h1>
          {workers.map((worker) => (
            <h4>{worker}</h4>
          ))}
        </div>
      )}
    </div>
  );
}

export default Workers;
