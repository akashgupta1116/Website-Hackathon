import React, { Component } from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="top">
                    <header>
                        <nav>
                            <a className="home-link" href='#'>HOME</a>
                            <ul className="nav-list">
                                <li><a href="#">PORTFOLIO</a></li>
                                <li><a href="#">TEAM</a></li>
                                <li><a href="#">ABOUT</a></li>
                                <li><a href="#">NEWS</a></li>
                                <li><a href="#">REACH US</a></li>
                            </ul>    
                        </nav> 
                    </header>   
                    <h1 className='about-span'> About</h1>
                </div>
                <div className="second" >
                    <p className="second-text">...</p>
                    <p className="second-text">Supporting visionary entrepreneurs<br/> across diverse sectors</p>
                </div>    
                <div className="third">
                    <hr/>
                    <div className="third1">
                        <div className="third1-left">
                            <img src={require("./AKASHiMAGE.jpeg")}/>
                        </div>
                        <div className="third1-right">
                            <div className="third1-right-text">
                                <p className="india-focussed">INDIA FOCUSED</p>
                                <p className="growth-capital-text">From Seed<br/> to Growth<br/> Capital</p>
                            </div>
                        </div>
                    </div>
                    <div className="third2">
                        <p className="sectors">Sectors we invest in:</p>
                        <div className="portfolio">
                            <span className="portfolio-text">Portfolio</span>
                            <button className="portfolio-btn">></button>
                        </div>
                    </div>
                    <hr/>
                    <ul>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>
                        <li><a href="#">Consumers</a></li>

                    </ul>    

                </div>
            </div>
        );
    }
}

export default About;