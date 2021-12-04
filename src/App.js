// import logo from './logo.svg';
import './App.css';
// import Counter from './Counter';
import Employee from './Employee';

const employeeInfo = [
  {
    employeeId: 1,
    firstName: "John",
    lastName: "Patrick",
    age: 21
  },
  {
    employeeId: 2,
    firstName: "Sam",
    lastName: "Winchester",
    age: 24
  },
  {
    employeeId: 3,
    firstName: "Dean",
    lastName: "Malaroid",
    age: 26
  },
  {
    employeeId: 4,
    firstName: "Crowly",
    lastName: "Dumbely",
    age: 32
  },
  {
    employeeId: 5,
    firstName: "Rowena",
    lastName: "Readhead",
    age: 37
  }
]

//sample nested payload
const studentInfo = {
  id: 1,
  name: "Maryline Monroe",
  classWing: "3EST",
  dormAddress: {
    set: "B",
    dormName: "saphire",
    prefects: {
      headCapt: "Jollene",
      asstCapt: "Makena"
    }
  }
};

//destructuring | pulling info from object  
const {id, name, classWing} = studentInfo;
//destructurning nested objects
const {set, dormName} = studentInfo.dormAddress;
const {headCapt, asstCapt} = studentInfo.dormAddress.prefects; //bad practice

//props, Destructuring and spreading
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>

        {employeeInfo.map(employee => {
          const { firstName, lastName, age } = employee;
          return (
            //long hand when not using spread
            <Employee key={employee.employeeId} firstName={firstName} lastName={lastName} age={age}/>
            //when using spread ...
            // <Employee {...employee}/>  <= spread operator iterates through each object
            //can be used when practicing writing clean code
          )
        })}     
        {/* <Employee name="John"/>
        <Employee name="Sam"/>
        <Employee name="Dean"/>
        <Employee name="Castiel"/>
        <Employee name="Jack"/> */}
        
      </header>
    </div>
  );
}

export default App;
