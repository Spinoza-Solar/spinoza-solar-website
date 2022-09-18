import React from 'react';
import "./Logo.css";
import mainLogo from "../../assets/SpinozaSolarLogoTransparantV2.png";

const Logo = () => {
    return (
        <a href="/"><img id="Logo" src={mainLogo} alt=""></img></a>
    )
}

export default Logo;