import '../App.css';
import React, { Component } from 'react';
import smiley from '../assets/black-smiley.svg';
import GAListener from 'react-ga';

//add desktop component

//add mobile component

class Links extends Component{
    render(){
        return(
            <div className="body">
                <div className="links container">
                    <div className="links header">
                        <div className="smileys item-a">
                            <img src={smiley} className="smiley" alt="smiley" />
                            <img src={smiley} className="smiley" alt="smiley" />
                            <img src={smiley} className="smiley" alt="smiley" />
                        </div>
    
                        <p className="item-b">links.html</p>
                    </div>

                    <div className="margins">
                        <div className="links-page-button-container">
                            <GAListener.OutboundLink eventLabel="links-page-etsy-button" to="https://designsbymeandrea.etsy.com" target="_blank"><a className="links-page-button yellow" href="https://designsbymeandrea.etsy.com">SHOP MY ETSY</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-website-button" to="https://designsbyandrea.me" target="_blank"><a className="links-page-button pink" href="https://designsbyandrea.me">VIEW MY WEBSITE</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-instagram-button" to="https://instagram.com/designsby.andrea" target="_blank"><a className="links-page-button purple" href="https://instagram.com/designsby.andrea">INSTAGRAM</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-facebook-button" to="https://facebook.com/designsbyandrea"><a className="links-page-button yellow" href="https://facebook.com/designsbyandrea">FACEBOOK</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-behance-button" to="https://behance.net/designsbyandrea" target="_blank"><a className="links-page-button pink" href="https://behance.net/designsbyandrea">BEHANCE</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-github-button" to="https://github.com/aetrigg"><a className="links-page-button purple" href="https://github.com/aetrigg">GITHUB</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-linkedin-button" to="https://linkedin.com/in/designsbyandrea" target="_blank"><a className="links-page-button yellow" href="https://linkedin.com/in/designsbyandrea">LINKEDIN</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-pinterest-button" to="https://pinterest.com/designsbyandrea" target="_blank"><a className="links-page-button pink" href="https://pinterest.com/designsbyandrea">PINTEREST</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-tiktok-button" to="https://tiktok.com/designsbyandrea" target="_blank"><a className="links-page-button purple" href="https://tiktok.com/designsbyandrea">TIKTOK</a></GAListener.OutboundLink>
                            <GAListener.OutboundLink eventLabel="links-page-mail-button" to="mailto:hello@designsbyandrea.me" target="_blank"><a className="links-page-button yellow" href="mailto:hello@designsbyandrea.me">SEND ME AN EMAIL</a></GAListener.OutboundLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Links;