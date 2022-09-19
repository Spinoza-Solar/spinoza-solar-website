import React from 'react';
import './NavItems.css';
import {NavItem} from "../index";

const NavItems = () => {
    return (
        <ul className="NavItems">
            <NavItem href="/About">About</NavItem>
            <NavItem href="/Sponsors">Sponsoren</NavItem>
            <NavItem href="/Media">Media</NavItem>
            <NavItem href="/News">News</NavItem>
        </ul>
    )
}

export default NavItems