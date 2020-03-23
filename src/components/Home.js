import React, {Component} from 'react';
import backgroundVideo from './backgroundVideo.mp4';
import Header from './header';
import './home.css';



class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=N3AkSS5hXMA'
        }
    }

    render () {
        return (
            <div style={{'height': '100vw', 'width': '100vw'}}>
                <div ><Header /></div>
                <video style={{'position':'fixed', 'width':'100%', 'height': '100vh','opacity':'0.5'}} className='videoTag' autoPlay loop muted>
                    <source src={backgroundVideo} type='video/mp4' />
                </video>
                <div style={{'position': 'fixed', 'width':'40%', 'height': '100%', 'zIndex': '9','paddingLeft':'5%','backgroundColor':'#f5f5f5'}}>
                    <div className="left-1">
                        <p className="paytm">Paytm</p>
                        <p className="paytm-info">Changing the way india transacts online</p>
                    </div>
                    <div className="left-2">
                        <div className="left-2-left">
                            <p className="m220">220M</p>
                            <p className="m220-info"> Wallet users</p>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="left-2-right">
                            <p className="m5">5M</p>
                            <p className="m5-info">Transaction/day</p>
                        </div>   
                    </div>
                    <div className="left-3">
                        <p className="company-info"> "Saif Partners is absolutely the best partner to start a buiseness in india."</p>
                        <span className="vijay">Vijay Shekhar Sharma</span>
                        <span className="vijay-info">-Founder and CEO</span>
                    </div>
                    <button className="learn-more-btn">
                        Learn More
                    </button>
                </div>
            </div>
        )
    }
};

export default Home;