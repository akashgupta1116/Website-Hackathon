import React, { Component } from 'react';
import './about.css';
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailAdress: '',
            subscribe: 'SUBSCRIBE NOW'

        }
    }
    emailHandler = (event) => {
        this.setState({
            emailAdress: event.target.value
        })
    }
    render() {
        return (
            <div>
                <hr/>
                <div className="third5">
                    <div className="third5-1">
                        <p className="discover">Discover</p>
                        <ul className="discover-list">
                            <li><Link to={'/portfolio'} className="discover-list-element">PORTFOLIO</Link></li>
                            <li><Link to={'/team'} className="discover-list-element">TEAM</Link></li>
                            <li><Link to={'/about'} className="discover-list-element">ABOUT</Link></li>
                            <li><Link to={'/news'} className="discover-list-element">NEWS</Link></li>
                            <li><Link to={'/reach-us'} className="discover-list-element">REACH US</Link></li>
                        </ul>
                    </div>
                    <div className="third5-2">
                        <p className="discover">Connect</p>
                        <ul className="discover-list">
                            <li ><a className="discover-list-element">+91-124 4965500</a></li>
                            <li><a className="discover-list-element">info@saifpartners.com</a></li>
                        </ul>
                    </div>
                    <div className="third5-3">
                        <p className="discover">Subscribe To Our Newsletter </p>
                        <div className="form">
                            <input className="email-address-input" onChange={this.emailHandler} required type="text" value={this.state.emailAdress} />
                            <label className="label-name" > <span className="content-name">Type your email address here please</span></label>
                        </div>
                        <input className="subscribe-btn" type="submit" value={this.state.subscribe} />

                    </div>
                </div>
                <hr />
                <p className="all-rights">@2017 SAIF Partners.All Rights Reserved</p>
            </div>
        );
    }
}

export default Footer;
