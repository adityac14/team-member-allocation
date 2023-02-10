import { useState } from "react";
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = () => {

  const [selectedTeam, setTeam] = useState("TeamB")

  // employees = employee data. the state of the employee data is maintained in the employees variable
  // setEmployees is a function reference and is used where ever we need to change the state of the employees array
  // useState hook returns a pair of values the current state and a function that updates it
    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }])

      function handleTeamSelectionChange(event){
        console.log(event.target.value)
        setTeam(event.target.value);
        
      }
    return (
        <main className="container">

          <div className="row justify-content-center mt-3 mb-3">

            <div className="col-6">
              <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>

              </select>
            </div>

          </div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
              <div className="card-collection">
              {
                employees.map((employee) => (
                  // style - cursor..when hovering above this element it changes the cursor display to a hand click me icon
                  <div id="{employee.id}" className="card m-2" style={{cursor: "pointer"}}>

                    {(employee.gender === 'male')?<img src={maleProfile} alt="Unable to find image" className="card-img-top"/> :
                                                  <img src={femaleProfile} alt="Unable to find image" className="card-img-top"/>}

                    <div className="card-body">
                      <h5 className="card-title">Full Name: {employee.fullName}</h5>
                      <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                    </div>            
                  </div>
              ))
           }
              </div>
            </div>
          </div>
        </main>
    )
}

export default Employees