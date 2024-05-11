import React from "react";
import "./Experience.css";

function Experience() {
    return (
        <div className="Experience">
            <p className="ExperienceTitle">Experience</p>
            <hr />
            <div className="ExperienceList">
                <div className="DotsExperience">
                    <div className="Dot"></div>
                    <div className="LineBetweenDots"></div>
                </div>
                <div className="ExperienceDataRows">
                    <div className="CompanyName">OKE Poland Sp. z o.o</div>
                    <div className="ExperienceDate">07.2022 - 08.2022</div>
                    <div className="TypeOfPositionAtWork">Position - Internship</div>
                    <div className="Description">Responsibilities - Working on projects based on Gatsby and React technologies</div>
                </div>
                <div className="DotsExperience">
                    <div className="Dot"></div>
                    <div className="LineBetweenDots"></div>
                </div>
                <div className="ExperienceDataRows">
                    <div className="CompanyName">DNV Poland Sp. z o.o.</div>
                    <div className="ExperienceDate">03.2023 - 05.2023</div>
                    <div className="TypeOfPositionAtWork">Position - Internship</div>
                    <div className="Description">Responsibilities - Working on maintaining computer equipment</div>
                </div>
                <div className="DotsExperience">
                    <div className="Dot"></div>
                </div>
                <div className="ExperienceDataRows">
                    <div className="CompanyName">Studio 102 sp. z o.o.</div>
                    <div className="ExperienceDate">07.2023 - 08.2023</div>
                    <div className="TypeOfPositionAtWork">Position - Internship</div>
                    <div className="Description">Responsibilities - Working on WordPress projects using Gulp technology</div>
                </div>
            </div>
        </div>
    );
}

export default Experience;