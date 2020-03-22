import React, { Component } from 'react';
import './portfolio.css';


class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state={
            third2Elements:[
                {imageName:"./acko-logo.jpg"},
                {imageName:'./unnamed.jpg'},
                {imageName:'./aye_finance.jpg'},
                {imageName:'./Chaayos-Logo.png'},
                {imageName:'./Coverfox-Logo.png'},
                {imageName:'./capital-float-1200x600.jpg'},
                {imageName:'./ClearTax-logo.jpg'}
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
            <div className="portfolio-container">
                 <div className="portfolio-top">
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
                    <h1 className='portfolio-span'> Portfolio</h1>
                </div>
                <div className="second" >
                    <p className="second-text">...</p>
                    <p className="second-text">We partner with game changing companies<br/>to help realize their vision</p>
                </div>
                <div className="third">
                    <div className="companies-div">
                        <button className="private-companies">Private Companies</button>
                        <button className="public-compamies">Public Companies</button>
                    </div>
                    <hr/>
                    <ul className="portfolio-third1-list">
                        <li><a className="portfolio-third1-list-element" href="#">All Sectors</a></li>
                        <li><a className="portfolio-third1-list-element" href="#">Consumer</a></li>
                        <li><a className="portfolio-third1-list-element"href="#">Education</a></li>
                        <li><a className="portfolio-third1-list-element"href="#">Enterprice Tech</a></li>
                        <li><a className="portfolio-third1-list-element"href="#">Finance</a></li>
                        <li><a className="portfolio-third1-list-element" href="#">Healthcare</a></li>
                        <li><a className="portfolio-third1-list-element" href="#">Industrials</a></li>
                        <li><a className="portfolio-third1-list-element" href="#">IT Services</a></li>
                        <li><a className="portfolio-third1-list-element" href="#">Logistics</a></li>
                    </ul>
                    <div className="third2">
                        {this.state.third2Elements.map((content,index)=>
                          <div className="third2-element">
                              <img  className="element-image" src={require(`${content.imageName}`)}/>
                          </div>
                        )}    
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

export default Portfolio;