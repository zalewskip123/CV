import React from "react";
import "./Experience.css";

function Experience() {
    return (
        <div className="Experience">
            <p className="ExperienceTitle">Doświadczenie</p>
            <hr />
            <div className="ExperienceList">
                <div className="DotsExperience">
                    <div className="Dot"></div>
                    <div className="LineBetweenDots"></div>
                </div>
                <div className="ExperienceDataRows">
                    <div className="CompanyName">OKE Poland Sp. z o.o</div>
                    <div className="ExperienceDate">07.2022 - 08.2022</div>
                    <div className="TypeOfPositionAtWork">Stanowisko - Praktykant</div>
                    <div className="Description">Opis - Praca nad projektami opartymi o technologie Gatsby i React</div>
                </div>
                <div className="DotsExperience">
                    <div className="Dot"></div>
                    <div className="LineBetweenDots"></div>
                </div>
                <div className="ExperienceDataRows">
                    <div className="CompanyName">DNV Poland Sp. z o.o.</div>
                    <div className="ExperienceDate">03.2023 - 05.2023</div>
                    <div className="TypeOfPositionAtWork">Stanowisko - Praktykant</div>
                    <div className="Description">Opis - Praca nad konserwacją sprzętu komputerowego</div>
                </div>
                <div className="DotsExperience">
                    <div className="Dot"></div>
                </div>
                <div className="ExperienceDataRows">
                    <div className="CompanyName">Studio 102 sp. z o.o.</div>
                    <div className="ExperienceDate">07.2023 - 08.2023</div>
                    <div className="TypeOfPositionAtWork">Stanowisko - Praktykant</div>
                    <div className="Description">Opis - Praca nad projektami na WordPressie w technologii Gulp</div>
                </div>
            </div>
        </div>
    );
}

export default Experience;