import React, { Component } from 'react';
import './team.css';

class Team extends Component {
    constructor(props){
        super(props);
        this.state={
            third2Elements:[
                {imageName:"./Sharukhan.jpg",personName:'Shah Rukh Khan',personInfo:'Managing Director'},
                {imageName:'./105778430-1551897565882microsoftfounderbillgatesspeaking.jpg',personName:'Bill Gates',personInfo:'Managing Director'},
                {imageName:"./download.jpeg",personName:'Satya Nadella',personInfo:'Principal'},
                {imageName:"./M-FEJMZ0_400x400.jpg",personName:'Sundar Pichai',personInfo:'Chief Financial Officer'},
                {imageName:"./Mark_Zuckerberg_F8_2018_Keynote_(cropped_2).jpg",personName:'Mark Zuckerberg',personInfo:'General Counsel'},
                {imageName:"./Elon_Musk_Royal_Society.jpg",personName:'Elon Musk',personInfo:'Finance Controller'},
                {imageName:"./download (1).jpeg",personName:'Brad Pitt',personInfo:'Managing Director'},
                {imageName:"./Chris_Hemsworth_by_Gage_Skidmore_2_(cropped).jpg",personName:'Chris Hemsworth',personInfo:'General Counsel'},
            
            ],
            emailAdress:''
        }
    }    
    emailHandler=(event)=>{
            this.setState({
                emailAdress:event.target.value
            })
        }
    
    render() {
        return (
            <div className="team-container">
                 <div className="team-top">
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
                    <h1 className='team-span'> Team</h1>
                </div>
                <div className="second" >
                    <p className="second-text">...</p>
                    <p className="second-text">We believe in entrepreneurial spirit and
                    <br/>bring a full range of experience</p>
                </div>
                <div className="third">
                    <hr/>
                    <ul className="team-third1-list">
                        <li><a className="team-third1-list-element" href="#">All </a></li>
                        <li><a className="team-third1-list-element" href="#">Investment Team</a></li>
                        <li><a className="team-third1-list-element"href="#">Investment Advisors</a></li>
                    </ul>
                    <div className="third2">
                        {this.state.third2Elements.map((content,index)=>
                          <div className="team-third2-element">
                              <img  className="team-element-image" src={require(`${content.imageName}`)}/>
                              <div>
                                <p className="team-element-person">{content.personName}</p>
                                <span className="cross-icon"></span>
                                <p className="team-person-info">{content.personInfo}</p>
                                
                              </div>
                          </div>
                        )}
                    </div>
                    <hr/>
                    <div className="team-third3">
                        <p className="team-third3-content">Please note that the term ‘SAIF Partners’ or ‘SAIF’ is used and referred to in the website generally for ease of reference and does not refer to any one entity or organisation. The teams, investing companies and addresses mentioned here may belong to or form part of different and independent organisations and entities having separate legal existence. Members of the investment advisory team noted above are engaged with Light Ray Advisors LLP</p>
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

export default Team;