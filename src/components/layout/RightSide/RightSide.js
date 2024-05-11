import React from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import "./RightSide.css";

function RightSide() {
    return (
        <div className="RightSide">
            <div className="NameAndLastName">
                <p>PIOTR ZALEWSKI</p>
            </div>
            <div className="AppliedjobPosition">
                <p>NAZWA STANOWISKA PRACY</p>
            </div>
            <div className="DescriptionAboutYourself">
                <p>I am an IT engineer with specialization in programming and I am looking for development opportunities in the IT industry. I can program in various languages ​​and have knowledge of computer hardware. What sets me apart is my willingness and motivation to work for the position I am applying for in your company.</p>
            </div>
            <div className="EducationAndExperience">
                <Education />
                <Experience />
            </div>
            <div className="PersonalDataProtectionStatement">
                <p>I consent to the processing of my personal data by {"[nazwa firmy]"} in order to recruit for the position I am applying for.</p>
            </div>
        </div>
    );
}

export default RightSide;
