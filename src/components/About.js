import React, { Component } from 'react';
import Header from './header';
import './about.css'
import {Link } from "react-router-dom";
import Footer from './footer';

class About extends Component {
    constructor(props){
        super(props);
        
            this.state={
                emailAdress:'',
                subscribe:'SUBSCRIBE NOW'
            
        }
    }
    emailHandler=(event)=>{
        this.setState({
            emailAdress:event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="top">
                    <Header/>
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
                            <img className="img-1" src={require("./AKASHiMAGE.jpeg")}/>
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
                            <Link to={'/portfolio'}>
                                <button className="portfolio-btn">></button>
                            </Link>
                        </div>
                    </div>
                    <hr/>
                    <ul className="third3-list">
                        <li><a className="third3-list-element" href="#">Consumers</a></li>
                        <li><a className="third3-list-element" href="#">Education</a></li>
                        <li><a className="third3-list-element"href="#">Finance</a></li>
                        <li><a className="third3-list-element"href="#">Healthcare</a></li>
                        <li><a className="third3-list-element"href="#">Industrials</a></li>
                        <li><a className="third3-list-element" href="#">Internet</a></li>
                        <li><a className="third3-list-element" href="#">It Services</a></li>
                        <li><a className="third3-list-element" href="#">Logistics</a></li>
                        <li><a className="third3-list-element" href="#">Mobile</a></li>
                        <li><a className="third3-list-element" href="#">SaaS</a></li>
                    </ul>
                    <div className="third4">
                        <div className="third4-left">
                           <img className="img-2" src={require("./15781412_1343981575644379_1943953298602895020_n.jpg")}/>
                        </div>
                        <div className="third4-right">
                            <p className="saif-para">"SAIF as an organization thinks like <br/>us. The team is very grounded and<br/>humble; they have a large vision<br/> about where they want their<br/> companies to go"</p>
                            <p className="ashish-para">ASHISH HEMRAJANI</p>
                            <span className="ashish-bio">Founder and CEO.BookMyShow</span><br/>                            
                            <div className="bio-btns">
                                <button className="ashish-para-btn"></button>
                                <button className="vss-para-btn"></button>
                            </div>
                        </div>         
                    </div>
                    <Footer />   
                </div>
            </div>
        );
    }
}

export default About;