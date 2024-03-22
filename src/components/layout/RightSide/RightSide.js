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
                <p>Jestem inżynierem informatyki ze specjalizacją programowanie i szukam możliwości rozwoju w branży IT. Potrafię programować w różnych językach oraz znam się na sprzęcie komputerowym. Wyróżnia mnie chęć i motywacja do podjęcia pracy na aplikowane przeze mnie stanowisko w Państwa firmie.</p>
            </div>
            <div className="EducationAndExperience">
                <Education />
                <Experience />
            </div>
            <div className="PersonalDataProtectionStatement">
                <p>Wyrażam zgodę na przetwarzanie moich danych osobowych przez {"[nazwa firmy]"} w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.</p>
            </div>
        </div>
    );
}

export default RightSide;
