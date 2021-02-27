import { React, Component }from "react"
import '../App.css';
import smiley from '../assets/black-smiley.svg';
import { useMediaQuery } from 'react-responsive';
import Video from '../assets/videos/meredith-foster-timelapse.mp4';
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

class Meredith extends Component {
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

                                <p className="item-b">meredith-timelapse.html</p>
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

                                            <p className="item-b">timelapse.mp4</p>
                                        </div>

                                        <div className="full-size-container-meredith">
                                            <video autoPlay loop muted className="timelapse">
                                                <source src={Video} type="video/mp4" />
                                            </video>
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

export default Meredith;