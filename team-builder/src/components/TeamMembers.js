import React, {useState} from "react";
import MemberCard from "./MemberCard";

function TeamMembers(props) {

    let team = props.team;

    return (

        <div className="memberCardContainer">
            { team.map( member =>
                <MemberCard member={member} key={member.id} editFunction={props.editFunction}/>
                )
            }
        </div>
    );

}

export default TeamMembers;