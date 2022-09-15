import React from 'react';
import './navbar.css';
import {Logo} from "../index";
import {NavItems} from "../index";
import {BurgerMenuButton} from "../index";

const Navbar = () => {
    return (
        <nav className="NavBar">
            <Logo />
            <NavItems />
            <BurgerMenuButton />
        </nav>
    )
}

export default Navbar;
