import React, { Component } from 'react';
import {Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header style={{'position': ''}}>
                <nav>
                    <Link to={'/'} className="home-link">SAIF Partners</Link>
                    <ul className="nav-list">
                        <li className="list-element"><Link to={'/portfolio'} className="list-links">PORTFOLIO</Link></li>
                        <li className="list-element"><Link to={'/team'} className="list-links">TEAM</Link></li>
                        <li className="list-element"><Link to={'/about'} className="list-links">ABOUT</Link></li>
                        <li className="list-element"><Link to={'/news'} className="list-links">NEWS</Link></li>
                        <li className="list-element"><Link to={'/reach-us'} className="list-links">REACH US</Link></li>
                    </ul>    
                </nav> 
            </header>   
        );
    }
}

export default Header;
