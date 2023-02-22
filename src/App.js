import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import { useState, useEffect } from "react";

function App() {
  // || - OR operator in JS checks if the first condition is true, if so it doesn't evne look at the next condition
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

  // employees = employee data. the state of the employee data is maintained in the employees variable
  // setEmployees is a function reference and is used where ever we need to change the state of the employees array
  // useState hook returns a pair of values the current state and a function that updates it

  // The state of our application will now be persisted to our browser's local storage
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) ||[
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);


  //
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));

  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  }

  return (
    <div>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees
          .filter((employee) => employee.teamName === selectedTeam)
          .length}
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
      />
      <Footer />
    </div>
  );
}

export default App;
