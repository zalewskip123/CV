import React from "react";
import "./PersonalData.css";

function PersonalData() {
    return (
        <div className="PersonalData">
            <p className="PersonalDataTitle">Dane osobowe</p>
            <hr />
            <div className="PersonalDataList">
                <div className="PersonalDataListLeftSide">
                    <div className="PersonalDataName"><p>Numer telefonu</p></div>
                    <div className="PersonalDataValue"><p>514684032</p></div>
                    <div className="PersonalDataName"><p>Adres Email</p></div>
                    <div className="PersonalDataValue"><p>zalewskipiotr050@gmail.com</p></div>
                    <div className="PersonalDataName"><p>Miejsce zamieszkania</p></div>
                    <div className="PersonalDataValue"><p>ul. Ceynowy 2, 84-207 Bojano</p></div>
                </div>
                <div className="PersonalDataListRightSide">
                    <div className="PersonalDataLinks">
                        <p className="Title">Linki:</p>
                        <p className="Links"><a href="https://www.linkedin.com/in/piotr-zalewski-0a32922bb/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                        <p className="Links"><a href="https://github.com/zalewskip123" target="_blank" rel="noreferrer">GitHub</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalData;
