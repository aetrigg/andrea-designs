import '../App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import smiley from '../assets/black-smiley.svg';
import me from '../assets/cartoon-me.png';
import img0 from '../assets/andrea-designs.png';
import img1 from '../assets/mima.png';
import img2 from '../assets/academy-conference.png';
import backButton from '../assets/left-arrow.svg';
import forwardButton from '../assets/right-arrow.svg';
import GAListener from 'react-ga';
import Feed from 'react-instagram-authless-feed';
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
 
class Home extends React.Component{

  constructor(){
    super();

    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);

    const project0title = "ANDREA DESIGNS";
    const project1title = "MIMA";
    const project2title = "ACADEMY CONFERENCE";

    const project0description = "My biggest obsession, Andrea Designs is my personal brand and is what you’re looking at right now! I put a lot of time and effort behind my personal brand and I want to share all the little, unique details that makes this brand ME!";
    const project1description = "In the spring of 2020, I had the pleasure of working in a group of 4 to create the Mental Imagery Mobile Application for the IU School of Medicine. My role in this project was to develop the front-end using Angular.";
    const project2description = "A simple homework assignment that pulls data from both a JSON file and from a PHP database. The concept behind the assignment was to create a conference website, and I created mine based after my sorority, Alpha Sigma Alpha, and their annual conference, The Academy.";

    const project0link1 = "https://www.behance.net/gallery/111174197/andrea-designs-personal-branding";
    const project0link1Name = "View Project Details";

    const project0link2 = "https://github.com/aetrigg/andrea-designs";
    const project0link2Name = "View Github";

    const project1link1 = "https://mima.designsbyandrea.me";
    const project1link1Name = "View Demo";

    const project1link2 = "https://github.com/aetrigg/MIMA";
    const project1link2Name = "View Github";

    const project2link1 = "https://academyconference.designsbyandrea.me";
    const project2link1Name = "View Website";

    const project2link2 = "https://github.com/aetrigg/academyConference";
    const project2link2Name = "View Github";

    this.state = {
      index: 0,
      imgList: [img0, img1, img2],
      titleList: [project0title, project1title, project2title],
      descList: [project0description, project1description, project2description],
      button1List: [project0link1, project1link1, project2link1],
      button2List: [project0link2, project1link2, project2link2],
      button1NameList: [project0link1Name, project1link1Name, project2link1Name],
      button2NameList: [project0link2Name, project1link2Name, project2link2Name]
    }
  }

  onClickForward(){
    if(this.state.index + 1 === this.state.titleList.length){
      this.setState({
        index: 0
      })
    }else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  onClickBack(){
    if(this.state.index -1 === -1){
      this.setState({
        index: this.state.titleList.length -1
      })
    }else{
      this.setState({
        index: this.state.index - 1
      })
    }
  }
  
  render(){
    return (
      <div className="responsive-container">
        <Mobile>
          <div className="body-mobile">
            <div className="container-mobile home">
              <div className="header mobile home">
                <div className="smileys item-a">
                  <img src={smiley} className="smiley" alt="smiley" />
                  <img src={smiley} className="smiley" alt="smiley" />
                  <img src={smiley} className="smiley" alt="smiley" />
                </div>

                <p className="item-b">homepage.html</p>
              </div>

              <div className="margins">
                <h1 className="mobile">WELL <span className="pink-letter">H</span><span className="purple-letter">E</span><span className="yellow-letter">L</span><span className="pink-letter">L</span><span className="purple-letter">O</span> THERE!</h1>
                <h2 className="mobile">I'M SO HAPPY YOU STUMBLED UPON<br/>MY LITTLE CORNER OF THE INTERNET</h2>

                <div className="center column">
                  <div className="introduction-mobile">
                    <div className="introduction-mobile-container">
                      <div className="introduction mobile header">
                        <div className="smileys item-a">
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                        </div>

                        <p className="item-b">introduction.js</p>
                      </div>

                      <div className="photo-text-mobile">
                        <img src={me} alt="cartoon-me" className="cartoon-me-mobile" />

                        <div className="intro-text-mobile">
                          <p>My name is Andrea Trigg, and I am a designer / developer in all things web and graphics based in small town, Indiana. This is my personal website for my personal brand and small business, Andrea Designs. Please take a look around and enjoy!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="recent-projects-mobile">
                        <div className="recent-projects-container-mobile">
                          <div className="recent-projects mobile header">
                            <div className="smileys item-a">
                              <img src={smiley} className="smiley" alt="smiley" />
                              <img src={smiley} className="smiley" alt="smiley" />
                              <img src={smiley} className="smiley" alt="smiley" />
                            </div>

                            <p className="item-b">recent-projects.js</p>
                          </div>

                          <div className="data-container-mobile">
                            <div className="data-img-mobile">
                              <img src={this.state.imgList[this.state.index]} />
                            </div>

                            <div className="data-flex-mobile">
                              <div className="back-button-mobile">
                                <div className="back-button-img-mobile" onClick={this.onClickBack}>
                                  <img src={backButton} />
                                </div>
                              </div>

                              <div className="data-info-mobile">
                                <h4>{this.state.titleList[this.state.index]}</h4>
                                <p>{this.state.descList[this.state.index]}</p>

                                <div className="data-buttons-mobile">
                                  <GAListener.OutboundLink eventLabel="home-project-link-1" to={this.state.button1List[this.state.index]} target="_blank" className="data-button-mobile" style={{marginBottom:2 + "vh"}}>{this.state.button1NameList[this.state.index]}</GAListener.OutboundLink>
  
                                  <GAListener.OutboundLink eventLabel="home-project-link-2" to={this.state.button2List[this.state.index]} target="_blank" className="data-button-mobile">{this.state.button2NameList[this.state.index]}</GAListener.OutboundLink>
                                </div>
                              </div>

                              <div className="forward-button-mobile">
                                <div className="forward-button-img-mobile" onClick={this.onClickForward}>
                                  <img src={forwardButton} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*<div className="instagram-feed-mobile">
                        <div className="instagram-feed-container-mobile">
                          <div className="instagram-feed mobile header">
                            <div className="smileys item-a">
                              <img src={smiley} className="smiley" alt="smiley" />
                              <img src={smiley} className="smiley" alt="smiley" />
                              <img src={smiley} className="smiley" alt="smiley" />
                            </div>

                            <p className="item-b">instagram-feed.jpeg</p>
                          </div>

                          <div className="feed-container-mobile">
                            <Feed userName="andreacreatesthings" className="feed-container-images-mobile" limit="10" />

                            <div className="button-mobile">
                              <a href="https://instagram.com/designsby.andrea" target="_blank">View My Instagram</a>
                            </div>
                          </div>
                        </div>
                      </div>*/}
                </div>
              </div>
            </div>
          </div>
        </Mobile>
  
        <Desktop>
          <div className="body">
            <div className="container home">
              <div className="header home">
                <div className="smileys item-a">
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                </div>
  
                <p className="item-b">homepage.html</p>
              </div>
  
              <div className="margins">
                <h1>WELL <span className="pink-letter">H</span><span className="purple-letter">E</span><span className="yellow-letter">L</span><span className="pink-letter">L</span><span className="purple-letter">O</span> THERE!</h1>
                <h2>I'M SO HAPPY YOU STUMBLED UPON<br/>MY LITTLE CORNER OF THE INTERNET</h2>
  
                <div className="center column">
                  <div className="introduction">
                    <div className="introduction-container">
                      <div className="introduction header">
                        <div className="smileys item-a">
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                        </div>
  
                        <p className="item-b">introduction.js</p>
                      </div>
  
                      <div className="photo-text">
                        <img src={me} alt="cartoon-me" className="cartoon-me" />
  
                        <div className="intro-text">
                          <p>My name is Andrea Trigg, and I am a designer / developer in all things web and graphics based in small town, Indiana. This is my personal website for my personal brand and small business, Andrea Designs. Please take a look around and enjoy!</p>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="recent-projects">
                    <div className="recent-projects-container">
                      <div className="recent-projects header">
                        <div className="smileys item-a">
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                        </div>
  
                        <p className="item-b">recent-projects.js</p>
                      </div>

                      <div className="data-container">
                        <div className="data-img">
                          <img src={this.state.imgList[this.state.index]} />
                        </div>

                        <div className="data-flex">
                          <div className="back-button">
                            <div className="back-button-img" onClick={this.onClickBack}>
                              <img src={backButton} />
                            </div>
                          </div>
  
                          <div className="data-info">
                            <h4>{this.state.titleList[this.state.index]}</h4>
                            <p>{this.state.descList[this.state.index]}</p>
  
                            <div className="data-buttons">
                              <GAListener.OutboundLink eventLabel="home-project-link-1" to={this.state.button1List[this.state.index]} target="_blank" className="data-button">{this.state.button1NameList[this.state.index]}</GAListener.OutboundLink>
  
                              <GAListener.OutboundLink eventLabel="home-project-link-2" to={this.state.button2List[this.state.index]} target="_blank" className="data-button">{this.state.button2NameList[this.state.index]}</GAListener.OutboundLink>
                            </div>
                          </div>
  
                          <div className="forward-button">
                            <div className="forward-button-img" onClick={this.onClickForward}>
                              <img src={forwardButton} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="instagram-feed">
                    <div className="instagram-feed-container">
                      <div className="instagram-feed header">
                        <div className="smileys item-a">
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                          <img src={smiley} className="smiley" alt="smiley" />
                        </div>

                        <p className="item-b">instagram-feed.jpeg</p>
                      </div>

                      <div className="feed-container">
                        <Feed userName="andreacreatesthings" className="feed-container-images" limit="9" />

                        <div className="button">
                          <a href="https://instagram.com/designsby.andrea" target="_blank">View My Instagram</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Desktop>
        <Footer/>
      </div>
    )
  }
}
 
export default Home;