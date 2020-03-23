import React, { Component } from 'react';
import Header from './header';
import './news.css';
import Footer from './footer';


class News extends Component {
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
                        </div>
                        <div className="news-third1-right">
                            <p className="insights">Insights</p>
                        </div>

                    </div>
                    <Footer />  
                </div>    
            </div>
        );
    }
}

export default News;