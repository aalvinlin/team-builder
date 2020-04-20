import React, {useState, useEffect} from "react";

function Form(props) {

    // get state variables from parent
    let currentTeam = props.team;
    let setTeam = props.setTeam;
    let isEditing = props.isEditing;

    // store current number of team members into state variable
    const[currentTeamCount, setCurrentTeamCount] = useState(props.team.length);

    let count = props.team.length;

    // default values for input fields
    const blankEntry = {
        name: "",
        email: "",
        role: "",
        id: currentTeamCount
    };

    // set default input to be a blank entry
    const [input, setInput] = useState(blankEntry);

    // on form submission, prevent default behavior
    // store new member info into state variable
    function submitForm(event) {
        
        console.log("adding", input);

        event.preventDefault();

        //add member to team
        setTeam([...currentTeam, input]);

        // update current team count
        setCurrentTeamCount(currentTeamCount + 1);

        // reset input fields for next entry
        setInput({...blankEntry, id: currentTeamCount + 1});
    }

    // take user's current input and update state variable "input"
    function storeInput(event) {

        setInput({...input, [event.target.name]: event.target.value}); 
        
    }

    // update button text based on whether user is adding or editing a team member
    const [buttonText, setButtonText] = useState("");
    useEffect(() =>
    {
      if (isEditing)
        { setButtonText("Edit"); }
      else
        { setButtonText("Add"); }

    }, [isEditing]);

    return (

        <form name="teamForm" onSubmit={submitForm}>
            <label htmlFor="inputName">Name:</label>
            <input type="text" name="name" onChange={storeInput} value={input.name}/>

            <label htmlFor="inputEmail">Email:</label>
            <input type="text" name="email"  onChange={storeInput} value={input.email}/>

            <label htmlFor="inputName">Role:</label>
            <input type="text" name="role"  onChange={storeInput} value={input.role}/>

            <input type="submit" value={buttonText} />

        </form>


    )

}

export default Form;