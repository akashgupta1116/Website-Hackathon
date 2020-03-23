import React, { Component } from 'react';
import Header from './header';
import './news.css';
import Footer from './footer';


class News extends Component {
    constructor(props){
        super(props)
        this.state={
            element:[
                {date:"12,Aug,2019",news:'Twitter leads Usd 100Mn round in Sharecat',heading:'Betting early and helping startups grow',rightDate:"08,Aug,2019"},
                {date:'11,July,2019',news:'Meesho raises Usd 125Mn from Naspers,Facebook',heading:'Extremely bullish on Saas Startup',rightDate:"09,July,2019"},
                {date:'10,March,2019',news:'UrbanClap raises USD 75Mn',heading:'SAIF Partners catches them young',rightDate:"08,March,2019"},
                {date:'08,March,2019',news:'Rivigo gets US Patent for driver relay Tech',heading:'The N.I.K.E framework for India',rightDate:"04,March,2019"},
                {date:'04,Jan,2019', news:'Ravi,Mukul and Deepak in Indias top 25 VCs',heading:'The making of Sharecat',rightDate:"01,Jan,2019"},

            ]
        }
    }
    render() {
        return (
            <div className="news-container">
                <div className="news-top">
                    <Header/>
                    <h1 className='news-span'> News</h1>
                </div>
                <div className="second" >
                    <p className="second-text">...</p>
                    <p className="second-text">Get the latest updates and insights <br/>about our company</p>
                </div>
                <div className="third">
                    <hr/>
                    <div className="news-third1">
                        <div className="news-third1-left">
                            <p className="press">Press</p>
                            <div className="element-div">
                                {this.state.element.map((content,index)=>
                                    <div className='element'>
                                        <p className="date">{content.date}</p>
                                        <p className="news">News</p>
                                        <p className="main-news">{content.news}</p>
                                    </div>)}
                            </div>
                        </div>
                        <div className="news-third1-right">
                            <p className="insights">Insights</p>
                            {this.state.element.map((content,index)=><div className="right-element">
                                <p className="main-heading">{content.heading}</p>
                                <p className="right-date">{content.rightDate}</p>
                                <p className="insights-text">insights</p>
                                <hr/>
                             </div>)}
                        </div>

                    </div>
                    <Footer />  
                </div>    
            </div>
        );
    }
}

export default News;
