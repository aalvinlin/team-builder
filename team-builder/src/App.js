import React, {useState, useEffect} from 'react';
import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";

function App() {

  let [team, setTeam] = useState([{
    name: "Elizabeth",
    email: "elizabrek@gmail.com",
    role: "manager",
    id: 0
}, {
  name: "Nick",
  email: "nick@yahoo.com",
  role: "director",
  id: 1
}, {
name: "Lily",
email: "lkanich@yahoo.com",
role: "engineer",
id: 2
}, {
name: "Haley",
email: "haley@swenson.com",
role: "support specialist",
id: 3
}, {
name: "Duncan",
email: "duncan@duncan.com",
role: "Customer",
id: 4
}, {
name: "Estelle",
email: "estelle@stars.com",
role: "Customer",
id: 5
}, {
name: "Jessica",
email: "jessica.p.k@gmail.com",
role: "Customer",
id: 6
}, {
name: "Katie",
email: "katiekatie@yahoo.com",
role: "Customer",
id: 7
}]);


    const [isEditing, setIsEditing] = useState(false);
    const [headerText, setHeaderText] = useState("");

    // update subtitle based on whether user is adding or editing a team member
    useEffect(() =>
    {
      if (isEditing)
        { setHeaderText("Edit An Existing Team Member"); }
      else
        { setHeaderText("Add A New Team Member"); }

    }, [isEditing]);


    // function to add member info
    function editFunction(e) {
      
      if (isEditing)
        {
          setIsEditing(false);
          // e.target.textContent="(stop editing)";
        }
      else
      {
        setIsEditing(true);
        // e.target.textContent="(edit)";
      }
        
    }

  return (
    <div className="App">
      <div className="header">
        <h1>Team Builder</h1>
        <h2>{headerText}</h2>
        <Form team={team} setTeam={setTeam} isEditing={isEditing}></Form>
      </div>
      <TeamMembers team={team} editFunction={editFunction}></TeamMembers>
    </div>
  );
}

export default App;
