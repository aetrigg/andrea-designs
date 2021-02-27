import { React, Component }from "react"
import '../App.css';
import smiley from '../assets/black-smiley.svg';
import { useMediaQuery } from 'react-responsive';
import Picture1 from '../assets/countdown.jpg';
import Picture2 from '../assets/5-days.jpg';
import Picture3 from '../assets/4-days.jpg';
import Picture4 from '../assets/3-days.jpg';
import Picture5 from '../assets/2-days.jpg';
import Picture6 from '../assets/1-day.jpg';
import Picture7 from '../assets/live.jpg';
import Footer from './Footer';

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

class EtsyCountdown extends Component {
    render(){
        return(
            <div className="responsive-container">
                <Mobile>
                    <div className="body-mobile">

                    </div>
                </Mobile>

                <Desktop>
                    <div className="body">
                        <div className="container full-image">
                            <div className="header full-image">
                                <div className="smileys item-a">
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">full-size-image-e.html</p>
                            </div>

                            <div className="margins">
                                <div className="center-full-size">
                                    <div className="full-size-image-container">
                                        <div className="full-size-image-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">countdown.jpeg</p>
                                        </div>

                                        <div className="full-size-container-countdown">
                                            <img src={Picture1} alt="countdown-full-size-image" />
                                        </div>
                                    </div>

                                    <div className="full-size-image-container">
                                        <div className="full-size-image-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">5-days.jpeg</p>
                                        </div>

                                        <div className="full-size-container-countdown">
                                            <img src={Picture2} alt="5-days-size-image" />
                                        </div>
                                    </div>

                                    <div className="full-size-image-container">
                                        <div className="full-size-image-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">4-days.jpeg</p>
                                        </div>

                                        <div className="full-size-container-countdown">
                                            <img src={Picture3} alt="4-days-size-image" />
                                        </div>
                                    </div>

                                    <div className="full-size-image-container">
                                        <div className="full-size-image-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">3-days.jpeg</p>
                                        </div>

                                        <div className="full-size-container-countdown">
                                            <img src={Picture4} alt="3-days-size-image" />
                                        </div>
                                    </div>

                                    <div className="full-size-image-container">
                                        <div className="full-size-image-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">2-days.jpeg</p>
                                        </div>

                                        <div className="full-size-container-countdown">
                                            <img src={Picture5} alt="2-days-size-image" />
                                        </div>
                                    </div>

                                    <div className="full-size-image-container">
                                        <div className="full-size-image-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">1-day.jpeg</p>
                                        </div>

                                        <div className="full-size-container-countdown">
                                            <img src={Picture6} alt="1-day-size-image" />
                                        </div>
                                    </div>

                                    <div className="full-size-image-container">
                                        <div className="full-size-image-header">
                                            <div className="smileys item-a">
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                                <img src={smiley} className="smiley" alt="smiley" />
                                            </div>

                                            <p className="item-b">live.jpeg</p>
                                        </div>

                                        <div className="full-size-container-countdown">
                                            <img src={Picture7} alt="live-size-image" />
                                        </div>
                                    </div>

                                    <a className="full-size-image-button" href="/portfolio">Return to Portfolio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Footer />
            </div>
        )
    }
}

export default EtsyCountdown;