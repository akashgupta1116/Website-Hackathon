import React, { Component } from 'react';
import './news.css';


class News extends Component {
    render() {
        return (
            <div className="news-container">
                <div className="news-top">
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
                    <h1 className='news-span'> News</h1>
                </div>
                <div className="second" >
                    <p className="second-text">...</p>
                    <p className="second-text">Get the latest updates and insights <br/>about our company</p>
                </div>
                <div className="third">
                    <hr/>
                </div>    
                
            </div>
        );
    }
}

export default News;