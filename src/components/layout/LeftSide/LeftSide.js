import React from "react";
import Skills from "../Skills/Skills";
import PersonalData from "../PersonalData/PersonalData";
import "./LeftSide.css";

function LeftSide() {
    return (
        <div className="LeftSide">
            <PersonalData />
            <Skills />
        </div>
    );
}

export default LeftSide;
