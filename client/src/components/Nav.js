import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({fade = false} = {}) => {
    const navColor = fade ? 'nav nav--fade' : 'nav';
    const [expand, setExpand] = useState(false);
    const [downIcon, setDownIcon] = useState(true);
    const [upIcon, setUpIcon] = useState(false);
    let showMoreOptions;

    const onClick = () => {
        setExpand(!expand); 
        setDownIcon(!downIcon);
        setUpIcon(!upIcon);
    }

    showMoreOptions = expand ? '' : 'nav__link--collapse';
    
    return (
    <nav className={navColor}>
        <NavLink to="/" exact activeClassName="nav__link--active" className="nav__link">Friend A Pet</NavLink>
        {downIcon && <span className="nav__link nav__icon--hide" onClick={onClick}>&#9660;</span>}
        {upIcon && <span className="nav__link nav__icon--hide" onClick={onClick}>&#9650;</span>}
        <div className={`nav__link--slide ${showMoreOptions}`}>
            <NavLink to="/browse" activeClassName="nav__link--active" className="nav__link ">Browse</NavLink>
            <NavLink to="/search" activeClassName="nav__link--active" className="nav__link ">Search</NavLink>
            <div className="nav__link--inline">
                <NavLink to="/login" activeClassName="nav__link--active" className="nav__link ">Login</NavLink>
                <span className="nav__link--white nav__link ">/</span>
                <NavLink to="/signup" activeClassName="nav__link--active" className="nav__link ">Join</NavLink>
            </div>
        </div>
        
    </nav>
)}

export default Nav;