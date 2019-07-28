import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import img from './header_bg.jpg'



const Header = () => {
    return (
        <header className="header">
            <Nav fade={true} />
            
            <img src={img} alt="animal" className="header__img" />
            <div className="header__box--center">
                <div className="header__text">
                    <h1 className="header__title">Discover Your Next Friend</h1>
                    <p>Have a look and consider adopting</p>
                </div>
                <div className="header__btn-box">
                    <Link to="/browse"><button className="header__btn">Browse Pets</button></Link>
                    <Link to="/search"><button className="header__btn">Search for Next Pal</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;