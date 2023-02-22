import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const TeamMemberCard = ({employee, handleEmployeeCardClick,  selectedTeam }) => {
    return (
            // style - cursor..when hovering above this element it changes the cursor display to a hand click me icon
            // key attribute within div element that represents a card that denotes a employee object within a list of employee objects
            // The key attribute helps React identify changes within a list of elements and assign key attribute to a unique identifier, in this case key is assigned to id
            <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam?'card m-2 standout':'card m-2')} 
            style={{cursor: "pointer"}} 
            onClick={handleEmployeeCardClick}>

            {(employee.gender === 'male')?<img src={maleProfile} alt="Unable to find image" className="card-img-top"/> :
                                            <img src={femaleProfile} alt="Unable to find image" className="card-img-top"/>}

                <div className="card-body">
                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                    <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                </div>            
            </div>


    )

}

export default TeamMemberCard;