import { React, Component, useEffect }from "react"
import '../App.css';
import smiley from '../assets/black-smiley.svg';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';
import Projects from './Projects';
import {projectData} from '../assets/data/data.js';

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
    constructor(props){
        super(props);

        this.state = {
            myArrays: projectData,
            tagOptions: [ "Web Design", "Brand Identity", "Graphic Design", "Mobile App", "Front-End", "Back-End", "Social Media", "All"]
        }
    }
    
    render(
        
    ){
        return(
            <div className="responsive-container">
                <Mobile>
                    <div className="body-mobile">
                        <div className="container-mobile portfolio">
                            <div className="header portfolio mobile">
                                <div className="smileys-mobile item-a">
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">portfolio.html</p>
                            </div>
                            
                            <div className="margins">
                                <h1 className="mobile">COMING SOON</h1>
                                <h2 className="mobile">PLEASE VISIT MY PORTFOLIO ON DESKTOP TO VIEW MY PROJECTS, THANK YOU!</h2>
                            </div>
                        </div>
                    </div>
                </Mobile>

                <Desktop>
                    <div className="body">
                        <div className="container portfolio">
                            <div className="header portfolio">
                                <div className="smileys item-a">
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">portfolio.html</p>
                            </div>

                            <div className="margins">
                                <h1><span className="pink-letter">C</span><span className="purple-letter">O</span><span className="yellow-letter">O</span><span className="pink-letter">L</span> THINGS</h1>
                                <h2>A SELECT FEW OF MY ABSOLUTE<br/>FAVORITE PROJECTS</h2>

                                <div className="portfolio-container">

                                    <Projects myArrays={this.state.myArrays} />

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
 
export default Portfolio;