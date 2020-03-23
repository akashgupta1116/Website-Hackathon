import React, { Component } from 'react';
import Header from './header';
import './reachUs.css'
import Footer from './footer';


class ReachUs extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            organization:'',
            mind:'',
            url:'',
            send:'SEND',
            emailAdress:''
        }
    }
    nameHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    emailHandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    organizationHandler=(event)=>{
        this.setState({
            organization:event.target.value
        })
    }
    mindHandler=(event)=>{
        this.setState({
            mind:event.target.value
        })
    }
    urlHandler=(event)=>{
        this.setState({
            url:event.target.value
        })
    }
    emailHandler=(event)=>{
        this.setState({
            emailAdress:event.target.value
        })
    }
    render() {
        return (
            <div className="reach-container">
                <div className="reach-top">
                <Header/>  
                    <h1 className='reachUs-span'> Reach Us</h1>
                </div>
                <div className="reachUs-second" >
                    <p className="reachUs-second-text">...</p>
                    <p className="reachUs-second-text">Have a question or proposal in mind?<br/> Get in touch with us.</p>
                </div> 
                <div className="reachus-third">
                    <hr/>
                    <div className="reachus-third1">
                        <div className="reachus-third1-left">
                            <p className="send-message-text">Send us a message</p>
                            <select className="consumer-list">
                                <option value="Consumer">Consumer</option>
                                <option value="Education">Education</option>
                                <option value="Finance">Finance</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Industrials">Industrials</option>
                                <option value="Internet">Internet</option>
                                <option value="IT Services">IT Services</option>
                                <option value="Logistics">Logistics</option>
                                <option value="Mobile">Mobile</option>
                            </select>
                            <div className="name-form">
                                <input className="name-input" onChange={this.nameHandler} required type="text" value={this.state.name} />
                                <label for='name' className="label-name-reach" > <span className="reach-content-name">Name</span></label>
                            </div>    
                            <div className="name-form">
                                <input className="name-input" onChange={this.emailHandler} required type="text" value={this.state.email} />
                                <label for='name' className="label-name-reach" > <span className="reach-content-name">Email</span></label>
                            </div>    
                            <div className="name-form">
                                <input className="name-input" onChange={this.organizationHandler} required type="text" value={this.state.organization} />
                                <label for='name' className="label-name-reach" > <span className="reach-content-name">Organization</span></label>    
                            </div>
                            <div className="name-form">
                                <input className="name-input" onChange={this.mindHandler} required type="text" value={this.state.mind} />
                                <label for='name' className="label-name-reach" > <span className="reach-content-name">What's on your mind?</span></label>    
                            </div>
                            <div className="name-form">
                                <input className="name-input" onChange={this.urlHandler} required type="text" value={this.state.url} />
                                <label for='name' className="label-name-reach" > <span className="reach-content-name">URL(Video,presentation,etc.)</span></label>    
                            </div>
                            <div className="file-info">
                                <p className="file-attachment">File attachment</p>
                                <p className="file-instructions">(docs,pdf,ppt,jpg,png,docx,pptx,xls,xlxs,zip,rar formats are supported.Max size 10Mb)</p>
                            </div>
                            <input className="file-upload" type='file' />
                            <input className="send-btn"  type="submit" value={this.state.send}/>
                        </div>
                        <div className="reachus-third1-right">
                            <p className='find-us'>Find Us</p>
                            <div className='address'>
                                <p className='address-span'>Address</p>
                                <p className='address-data'>Unit 1502, 15th Floor, One Horizon Tower, Sector 43, DLF Phase V, Golf Course Road, Gurgaon 122002, Haryana, India</p>
                            </div>
                            <div className="reachus-contacts">
                                <div className="reachus-email">
                                    <p className="email-span"> Email</p>
                                    <a className="email-data" href="#">info@saifpartners.com</a>
                                </div>
                                <div className="phone">
                                    <p className="phone-span">Phone</p>
                                    <a className="phone-data" href='#'>+91-124 4965500</a>
                                </div>        
                            </div>
                            <iframe className="map-1"
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-eI_E5z8DDkRAtEWYgpJaM8&key=AIzaSyAq8CxICyJcYARvFnMPogxIjTy8DmgLMO0" allowfullscreen></iframe>
                            <div className='address'>
                                <p className='address-span'>Address</p>
                                <p className='address-data'>SAIF Partners, Indiqube, Leela Galleria, Sixth Floor, No. 23/4, 6th Cross, 60ft Road, Kodihalli, Old Airport Road, Ward No. 88 (Old No. 74), Bengaluru 560008</p>
                            </div>
                            <div className="phone2">
                                <p className="phone-span">Phone</p>
                                <a className="phone-data" href='#'>080-46184600</a>
                            </div>
                            <iframe className="map-1"
                            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-eI_E5z8DDkRAtEWYgpJaM8&key=AIzaSyAq8CxICyJcYARvFnMPogxIjTy8DmgLMO0" allowfullscreen></iframe>   
                        </div>       
                    </div>
                    <Footer />  
                </div>    
            </div>

        );
    }
}

export default ReachUs;