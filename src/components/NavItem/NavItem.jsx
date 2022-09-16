import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <a href={props.href} className="NavItem">
            {props.children}
        </a>
    )
}

export default NavItem