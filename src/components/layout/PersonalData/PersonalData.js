import React from "react";
import "./PersonalData.css";

function PersonalData() {
    return (
        <div className="PersonalData">
            <p className="PersonalDataTitle">Dane osobowe</p>
            <hr />
            <div className="PersonalDataList">
                <div className="PersonalDataName"><p>Numer telefonu</p></div>
                <div className="PersonalDataValue"><p>514684032</p></div>
                <div className="PersonalDataName"><p>Adres Email</p></div>
                <div className="PersonalDataValue"><p>zalewskipiotr050@gmail.com</p></div>
                <div className="PersonalDataName"><p>Miejsce zamieszkania</p></div>
                <div className="PersonalDataValue"><p>ul. Ceynowy 2, 84-207 Bojano</p></div>
            </div>
        </div>
    );
}

export default PersonalData;
