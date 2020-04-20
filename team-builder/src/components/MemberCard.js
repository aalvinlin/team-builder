import React, {useState} from "react";

function MemberCard(props) {

    let member = props.member;
    let editFunction = props.editFunction;

    let cardColors = "green blue pink orange yellow".split(" ");
    let cardColor = cardColors[props.member.id % (cardColors.length)];

    let roleCapitalized = member.role;

    if (member.role.length > 1)
    {
        roleCapitalized = member.role[0].toUpperCase() + member.role.slice(1, member.role.length);
    }

    return (

        <div className={"memberCard " + cardColor} key={member.name}>
            <h3 className="memberName">{member.name}</h3>
            <p className="memberRole">{roleCapitalized}</p>
            <p className="memberEmail">{member.email}</p>
            <p className="edit"><a href="#" onClick={editFunction}>(edit)</a></p>
        </div>


    )

}

export default MemberCard;