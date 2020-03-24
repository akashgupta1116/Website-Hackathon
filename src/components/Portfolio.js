import React, { Component } from 'react';
import Header from './header';
import './portfolio.css';
import Footer from './footer';


const publicSectors = [
    {imageName:'./aye_finance.jpg'},
    {imageName:'./Coverfox-Logo.png'},
    {imageName:'./ClearTax-logo.jpg'},
    {imageName:'./unnamed.jpg'},
    {imageName:"./acko-logo.jpg"},
    {imageName:'./Chaayos-Logo.png'},
    {imageName:'./capital-float-1200x600.jpg'},
];
const privateSector = [
    {imageName:"./acko-logo.jpg"},
    {imageName:'./unnamed.jpg'},
    {imageName:'./aye_finance.jpg'},
    {imageName:'./Chaayos-Logo.png'},
    {imageName:'./Coverfox-Logo.png'},
    {imageName:'./capital-float-1200x600.jpg'},
    {imageName:'./ClearTax-logo.jpg'}
];
class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state={
            third2Elements:privateSector,
            selectedCompany:'private',
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
                 <Header/> 
                    <h1 className='portfolio-span'> Portfolio</h1>
                </div>
                <div className="second" >
                    <p className="second-text">...</p>
                    <p className="second-text">We partner with game changing companies<br/>to help realize their vision</p>
                </div>
                <div className="third">
                    <div className="companies-div">
                        <button className={this.state.selectedCompany==='private'?'selectedCompany':'nonSelectedCompany'} onClick={()=>this.setState({third2Elements: privateSector, selectedCompany:'private'})}>Private Companies</button>
                        <button className={this.state.selectedCompany==='public'?'selectedCompany':'nonSelectedCompany'} style={{'marginLeft':'2%'}} onClick={()=>this.setState({third2Elements: publicSectors, selectedCompany:'public'})}>Public Companies</button>
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
                    <Footer />    
                </div>    
            </div>
        );
    }
}

export default Portfolio;