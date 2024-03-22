import React from "react";
import "./Main.css";

function Main({ children }) {
    return (
        <main className="Main">
            <div className="maindiv">{ children }</div>
        </main>
    );
}

export default Main;
