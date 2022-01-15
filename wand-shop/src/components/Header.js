import React from 'react';
import Home from './Home';
import MainContent from './MainContent';
import {Link} from "react-router-dom";



export default function Header() {
 
    return (
        <nav>
            <div className="logo">Ollivander's Wand Shop </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Our Wands</Link></li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}
