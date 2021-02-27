import { React, Component }from "react"
import '../App.css';
import smiley from '../assets/black-smiley.svg';
import { useMediaQuery } from 'react-responsive';
import Picture from '../assets/rapunzel-painting.png';
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

class Rapunzel extends Component {
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

                                <p className="item-b">full-size-image-r.html</p>
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

                                            <p className="item-b">rapunzel-painting.jpeg</p>
                                        </div>

                                        <div className="full-size-container-rapunzel">
                                            <img src={Picture} alt="rapunzel-full-size-image" />
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

export default Rapunzel;