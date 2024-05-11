import React from "react";
import "./Education.css";

function Education() {
    return (
        <div className="Education">
            <p className="EducationTitle">Education</p>
            <hr />
            <div className="EducationList">
                <div className="DotsEducation">
                    <div className="Dot"></div>
                    <div className="LineBetweenDots"></div>
                </div>
                <div className="EducationDataRows">
                    <p className="NameOfSchool">WSB Merito Univerity in Gdynia</p>
                    <p className="DateOfEducation">2020 - 2024</p>
                    <p className="Qualification">Bachelor's degree - Engineer</p>
                    <p className="FieldOfStudy">Field of study - IT</p>
                    <p className="Specialization">Specialization - Programming</p>
                    <p className="Grade">Grade - 5</p>
                </div>
                <div className="DotsEducation">
                    <div className="Dot"></div>
                </div>
                <div className="EducationDataRows">
                    <p className="NameOfSchool">Zespół Szkół Chłodniczych i Elektronicznych w Gdyni</p>
                    <p className="DateOfEducation">2016 - 2020</p>
                    <p className="Qualification">Professional title - Technician</p>
                    <p className="FieldOfStudy">Field of technician school - IT</p>
                </div>
            </div>
        </div>
    );
}

export default Education;