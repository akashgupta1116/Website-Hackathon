import React, { Component } from 'react';
import './about.css'

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
                    <header>
                        <nav>
                            <a className="home-link" href='#'>HOME</a>
                            <ul className="nav-list">
                                <li className="list-element"><a className="list-links" href="#">PORTFOLIO</a></li>
                                <li className="list-element"><a className="list-links" href="#">TEAM</a></li>
                                <li className="list-element"><a className="list-links" href="#">ABOUT</a></li>
                                <li className="list-element"><a className="list-links" href="#">NEWS</a></li>
                                <li className="list-element"><a className="list-links" href="#">REACH US</a></li>
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
                            <button className="portfolio-btn">></button>
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
                    <hr/>
                    <div className="third5">
                        <div className="third5-1">
                            <p className="discover">Discover</p>
                            <ul className="discover-list">
                                <li ><a className="discover-list-element"href='#'>Portfolio</a></li>
                                <li><a className="discover-list-element" href='#'>Team</a></li>
                                <li><a className="discover-list-element" href='#'>About</a></li>
                                <li><a className="discover-list-element" href='#'>News</a></li>
                                <li><a className="discover-list-element" href='#'>Reach Us</a></li>
                            </ul>    
                        </div>
                        <div className="third5-2">
                            <p className="discover">Connect</p>
                            <ul className="discover-list">
                                <li ><a className="discover-list-element"href='#'>+91-124 4965500</a></li>
                                <li><a className="discover-list-element" href='#'>info@saifpartners.com</a></li>
                            </ul>    
                        </div>
                        <div className="third5-3">
                            <p className="discover">Subscribe To Our Newsletter </p>
                            <div className="form">
                                <input className="email-address-input" onChange={this.emailHandler} required type="text" value={this.state.emailAdress} />
                                <label for='name' className="label-name" > <span className="content-name">Type your email address here please</span></label>
                            </div>
                            <input className="subscribe-btn"  type="submit" value={this.state.subscribe}/>
                        
                        </div>    
                    </div>  
                    <hr/>  
                    <p className="all-rights">@2017 SAIF Partners.All Rights Reserved</p>       
                </div>
            </div>
        );
    }
}

export default About;