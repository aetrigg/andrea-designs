import { React, Component }from "react"
import '../App.css';
import smiley from '../assets/black-smiley.svg';
import { useMediaQuery } from 'react-responsive';
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
 
class Portfolio extends Component{
    render(){
        return(
            <div className="responsive-container">
                <Mobile>
                    <div className="body-mobile">
                        <div className="container-mobile">
                            <div className="header contact mobile">
                                <div className="smileys-mobile item-a">
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">contact.html</p>
                            </div>
                        </div>
                    </div>
                </Mobile>

                <Desktop>
                    <div className="body">
                        <div className="container">
                            
                        </div>
                    </div>
                </Desktop>
            </div>
        )
    }
}
 
export default Portfolio;