import '../App.css';
import React, { Component } from 'react';
import smiley from '../assets/black-smiley.svg';

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
                            <a className="links-page-button yellow" href="https://designsbyandrea.etsy.com">SHOP MY ETSY</a>
                            <a className="links-page-button pink" href="https://designsbyandrea.me">VIEW MY WEBSITE</a>
                            <a className="links-page-button purple" href="https://instagram.com/designsby.andrea">INSTAGRAM</a>
                            <a className="links-page-button yellow" href="https://facebook.com/designsbyandrea">FACEBOOK</a>
                            <a className="links-page-button pink" href="https://be.net/designsbyandrea">BEHANCE</a>
                            <a className="links-page-button purple" href="https://github.com/aetrigg">GITHUB</a>
                            <a className="links-page-button yellow" href="https://linkedin.com/in/designsbyandrea">LINKEDIN</a>
                            <a className="links-page-button pink" href="https://pinterest.com/designsbyandrea">PINTEREST</a>
                            <a className="links-page-button purple" href="https://tiktok.com/designsbyandrea">TIKTOK</a>
                            <a className="links-page-button yellow" href="mailto:hello@designsbyandrea.me">SEND ME AN EMAIL</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Links;