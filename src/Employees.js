import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

// Destructuring props, instead of passing props as a parameter in the Employees component
// We are destructuring the object into its individual property values
// Through destructing we don't have to write things such as props.employees
// We are unpacking values properties from objects into distinct variables 
const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

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
                  // key attribute within div element that represents a card that denotes a employee object within a list of employee objects
                  // The key attribute helps React identify changes within a list of elements and assign key attribute to a unique identifier, in this case key is assigned to id
                  <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam?'card m-2 standout':'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>

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
