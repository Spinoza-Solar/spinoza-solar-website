import React from 'react';
import './NavItems.css';
import {NavItem} from "../index";

const NavItems = () => {
    return (
        <ul className="NavItems">
            <NavItem href="https://youtube.com">About</NavItem>
            <NavItem href="https://google.com">Sponsor</NavItem>
            <NavItem href="https://google.com">Media</NavItem>
            <NavItem href="https://google.com">News</NavItem>
        </ul>
    )
}

export default NavItems