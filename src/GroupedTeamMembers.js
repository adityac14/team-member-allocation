import {useState} from "react";

// UseState Hook returns a pair of values, (The current state: and a function that updates it)
// setGroupedData function will be used for changing the state of the groupedEmployees array
// let's use groupTeamMembers() to useState Hook that will return the default value of the groupedEmployees array






const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {
        let teams = [];
        const teamNames = ["TeamA", "TeamB", "TeamC", "TeamD"];
      
        for (let i = 0; i < teamNames.length; i++) {
          let teamMembers = employees.filter(
            (employee) => employee.teamName === teamNames[i]
          );
          let currentTeam = {
            team: teamNames[i],
            members: teamMembers,
            collapsed: selectedTeam === teamNames[i] ? false : true,
          };
          teams.push(currentTeam);
        }

        return teams;
      }

      function handleTeamClick(event) {
        let transformedGroupData = groupedEmployees.map((groupedData) =>
          groupedData.team === event.currentTarget.id
            ? { ...groupedData, collapsed: !groupedData.collapsed }
            : groupedData
        );
      
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
      }

  return (
    <main className="container">
        {groupedEmployees.map((item) => {
            return(
                <div key={item.team} className='card mt-2' style={{cursor: "pointer"}}>
                    <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                        Team Name: {item.team}
                    </h4>
                    <div id={"collapsed" + item.team} className={item.collapsed  === true? "collapse" : ""}>
                        <hr/>
                        {
                            item.members.map(member => {
                                return (
                                    <div className="mt-2">
                                        <h5 className="card-title mt-2">
                                            <span className="text-dark">Full Name: {member.fullName}</span>
                                        </h5>
                                        <p>Designation: {member.designation}</p>

                                    </div>

                                );
                            })
                        }

                    </div>


                </div>
            )
        })}
     
    </main>
  );
};

export default GroupedTeamMembers;
