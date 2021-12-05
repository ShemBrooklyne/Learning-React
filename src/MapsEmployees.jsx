import React from "react";

const MapsEmployees = (props) => {
  const { id, name } = props;
  return (
    <div>
      <h4> {`Id: ${id} Name: ${name}`} </h4>
    </div>
  );
};

export default MapsEmployees;
