import React, { Component } from 'react';
import Header from './header';
import './team.css';
import Footer from './footer';

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
                 <Header/>  
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
                    <Footer />     
                </div>
            </div>
        );
    }
}

export default Team;
