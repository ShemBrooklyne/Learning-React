import React from "react";

const Employee = (props) => {
    //Object destructuring
    const { firstName, lastName, age } = props;
    console.log(props)
    return (
        <div>
            <h4>{`Employee Name: ${firstName} ${lastName} Where age is: ${age}`}</h4>
        </div>
    )
}

export default Employee;