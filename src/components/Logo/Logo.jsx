import React from 'react';
import "./Logo.css";
import mainLogo from "../../assets/SpinozaSolarLogoTransparantV2.png";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/"><img id="Logo" src={mainLogo} alt=""></img></Link>
    )
}

export default Logo;