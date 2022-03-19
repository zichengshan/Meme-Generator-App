import React from "react";
import logo from "../images/Logo.png"

export default function Header(){
    return(
        <header className="header">
            <img className="header--logo" src={logo} alt = "logo"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--text">React Project</h4>
        </header>
    )
}
