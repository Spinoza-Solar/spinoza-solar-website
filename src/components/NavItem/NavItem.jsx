import React from 'react';
import './NavItem.css';

const NavItem = (props) => {
    return (
        <a href={props.href} className="NavItem">
            <div className="NavItem">{props.text}</div>
        </a>
    )
}

export default NavItem