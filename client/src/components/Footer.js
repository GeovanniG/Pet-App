import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <div className="footer-col">
            <Link to="/">Friend A Pet</Link>
        </div>
        <div className="footer-col">
            <Link to="/">Sign In</Link>
            <Link to="/">Sign Up</Link>
        </div>
    </footer>
)

export default Footer;