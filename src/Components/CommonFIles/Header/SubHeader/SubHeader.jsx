import React from 'react';
import './SubHeader.scss';
import { NavLink } from 'react-router-dom';

export default function SubHeader(){
  
    return (
        <div className="SubHeader">
            <div className="SubHeaderItems">
                <NavLink exact activeClassName="_active" className="SubHeaderItemTitle_all" to="/all-categories/">All Categories</NavLink>
                <NavLink exact activeClassName="_active" className="SubHeaderItemTitle" to="/all-categories/mobile">Mobiles</NavLink>
                <NavLink exact activeClassName="_active" className="SubHeaderItemTitle" to="/all-categories/electonics">Electonics</NavLink>
                <NavLink exact activeClassName="_active" className="SubHeaderItemTitle" to="/all-categories/furniture">Furniture</NavLink>
                <NavLink exact activeClassName="_active" className="SubHeaderItemTitle" to="/all-categories/grocery">Grocery</NavLink>
                <NavLink exact activeClassName="_active" className="SubHeaderItemTitle" to="/services">Services</NavLink>
                <NavLink exact activeClassName="_active" className="SubHeaderItemTitle" to="/contact-us">Contact Us</NavLink>                    
            </div>            
        </div>
    );
}
