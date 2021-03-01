import '../App.css';
import React, { Component } from 'react';
import smiley from '../assets/black-smiley.svg';
import { useMediaQuery } from 'react-responsive';

//desktop media query component
const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  
//mobile media query component
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
}

class Links extends Component{

    render(){
        return(
            <div className="responsive-container">
                <Mobile>
                    <div className="body-mobile links">
                        <div className="links container-mobile">
                            <div className="links header mobile">
                                <div className="smileys item-a">
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">links.html</p>
                            </div>

                            <div className="margins">
                                <h1 className="mobile">HI THERE, <span className="pink-letter">F</span><span className="purple-letter">R</span><span className="yellow-letter">I</span><span className="pink-letter">E</span><span className="purple-letter">N</span><span className="yellow-letter">D</span>!</h1>
                                <h2 className="mobile">WHERE DO YOU WANT TO GO?<br/>NAVIGATE USING THE LINKS BELOW</h2>

                                <div className="links-page-button-container-mobile">
                                <a className="links-page-button-mobile yellow" href="https://designsbyandrea.etsy.com">SHOP MY ETSY</a>
                                <a className="links-page-button-mobile pink" href="https://designsbyandrea.me">VIEW MY WEBSITE</a>
                                <a className="links-page-button-mobile purple" href="https://blog.designsbyandrea.me">VIEW MY BLOG</a>
                                <a className="links-page-button-mobile yellow" href="https://designsbyandrea.me/portfolio">VIEW MY PORTFOLIO</a>
                                <a className="links-page-button-mobile pink" href="mailto:hello@designsbyandrea.me">SEND ME AN EMAIL</a>
                                <a className="links-page-button-mobile purple" href="https://instagram.com/designsby.andrea">INSTAGRAM</a>
                                <a className="links-page-button-mobile yellow" href="https://facebook.com/designsbyandrea">FACEBOOK</a>
                                <a className="links-page-button-mobile pink" href="https://be.net/designsbyandrea">BEHANCE</a>
                                <a className="links-page-button-mobile purple" href="https://github.com/aetrigg">GITHUB</a>
                                <a className="links-page-button-mobile yellow" href="https://linkedin.com/in/designsbyandrea">LINKEDIN</a>
                                <a className="links-page-button-mobile pink" href="https://pinterest.com/designsbyandrea">PINTEREST</a>
                                <a className="links-page-button-mobile purple" href="https://tiktok.com/designsbyandrea">TIKTOK</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>

                <Desktop>
                <div className="body links">
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
                        <h1>HI THERE, <span className="pink-letter">F</span><span className="purple-letter">R</span><span className="yellow-letter">I</span><span className="pink-letter">E</span><span className="purple-letter">N</span><span className="yellow-letter">D</span>!</h1>
                        <h2>WHERE DO YOU WANT TO GO?<br/>NAVIGATE USING THE LINKS BELOW</h2>
                        <div className="links-page-button-container">
                            <a className="links-page-button yellow" href="https://designsbyandrea.etsy.com">SHOP MY ETSY</a>
                            <a className="links-page-button pink" href="https://designsbyandrea.me">VIEW MY WEBSITE</a>
                            <a className="links-page-button purple" href="https://blog.designsbyandrea.me">VIEW MY BLOG</a>
                            <a className="links-page-button yellow" href="https://designsbyandrea.me/portfolio">VIEW MY PORTFOLIO</a>
                            <a className="links-page-button pink" href="mailto:hello@designsbyandrea.me">SEND ME AN EMAIL</a>
                            <a className="links-page-button purple" href="https://instagram.com/designsby.andrea">INSTAGRAM</a>
                            <a className="links-page-button yellow" href="https://facebook.com/designsbyandrea">FACEBOOK</a>
                            <a className="links-page-button pink" href="https://be.net/designsbyandrea">BEHANCE</a>
                            <a className="links-page-button purple" href="https://github.com/aetrigg">GITHUB</a>
                            <a className="links-page-button yellow" href="https://linkedin.com/in/designsbyandrea">LINKEDIN</a>
                            <a className="links-page-button pink" href="https://pinterest.com/designsbyandrea">PINTEREST</a>
                            <a className="links-page-button purple" href="https://tiktok.com/designsbyandrea">TIKTOK</a>
                        </div>
                    </div>
                </div>
                </div>
                </Desktop>
            </div>
        )
    }
}

export default Links;