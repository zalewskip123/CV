import React from "react";
import "./Education.css";

function Education() {
    return (
        <div className="Education">
            <p className="EducationTitle">Wykształcenie</p>
            <hr />
            <div className="EducationList">
                <div className="DotsEducation">
                    <div className="Dot"></div>
                    <div className="LineBetweenDots"></div>
                </div>
                <div className="EducationDataRows">
                    <p className="NameOfSchool">Uniwersytet WSB Merito w Gdyni</p>
                    <p className="DateOfEducation">2020 - 2024</p>
                    <p className="Qualification">Tytuł - Inżynier</p>
                    <p className="FieldOfStudy">Kierunek - Informatyka</p>
                    <p className="Specialization">Specjalizacja - Programowanie</p>
                    <p className="Grade">Ocena - 5</p>
                </div>
                <div className="DotsEducation">
                    <div className="Dot"></div>
                </div>
                <div className="EducationDataRows">
                    <p className="NameOfSchool">Zespół Szkół Chłodniczych i Elektronicznych w Gdyni</p>
                    <p className="DateOfEducation">2016 - 2020</p>
                    <p className="Qualification">Tytuł - Technik</p>
                    <p className="FieldOfStudy">Kierunek - Informatyka</p>
                </div>
            </div>
        </div>
    );
}

export default Education;