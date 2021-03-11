import '../App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import smiley from '../assets/black-smiley.svg';
import signature from '../assets/signature.png';
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
 
function About(props) {
  return (
    <div className="responsive-container">
      <Mobile>
        <div className="body-mobile">
          <div className="container-mobile about">
            <div className="header mobile about">
              <div className="smileys item-a">
                <img src={smiley} className="smiley" alt="smiley" />
                <img src={smiley} className="smiley" alt="smiley" />
                <img src={smiley} className="smiley" alt="smiley" />
              </div>

              <p className="item-b">about.html</p>
            </div>

            <div className="margins" >
              <h1>NICE TO <span className="pink-letter">M</span><span className="purple-letter">E</span><span className="yellow-letter">E</span><span className="pink-letter">T</span> YOU!</h1>
              <h2>NOW THAT YOU'RE HERE, ALLOW ME<br/>TO INTRODUCE MYSELF</h2>
            </div>

            <div className="something-mobile">
              <div className="mobile-about-container">
                <div className="me-container-mobile">
                  <div className="header me mobile">
                    <div className="smileys item-a">
                      <img src={smiley} className="smiley" alt="smiley" />
                      <img src={smiley} className="smiley" alt="smiley" />
                      <img src={smiley} className="smiley" alt="smiley" />
                    </div>
  
                    <p className="item-b">me.jpeg</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="paragraph-1-container-mobile">
              <p>My name is Andrea (sounds like And-ree-uh) and I am a creative soul living in the middle of nowhere in Indiana. I am obsessed with details and making others happy; whether it’s a client looking for a killer brand and website for their business or mailing out stickers and handmade goods through my small business, my absolute goal in life is to make as many people smile as I possibly can with the things I create with my own two hands.</p>

              <p>I got my start in creating early on; first with pencil and paper, then quickly graduating to digital mediums in early 2009. In my free time, I would create graphics and art using the free program GIMP.</p>
            </div>

            <div className="something-mobile">
              <div className="sunset-container-mobile">
                <div className="header sunset mobile">
                  <div className="smileys item-a">
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                  </div>
  
                  <p className="item-b">sunset-waltz.psd</p>
                </div>
              </div>
            </div >

            <div className="paragraph-2-container-mobile">
              <p>I also explored web design and development by making websites in Geocities (man, remember when that existed?) I stepped away from these around 2011 and focused instead on video editing, first in Sony Vegas Pro and moving up to Adobe Premiere Pro and Final Cut Pro. In fact, I loved making videos so much that I spent my first year at Butler University pursuing a degree in it. However, it was a required course in basic HTML and CSS that I found my true passion for web design and development.</p>

              <p>In the spring of 2020, I graduated from Indiana University-Purdue University Indianapolis with a Bachelor’s of Science degree in Media Arts and Science and a concentration in web design and development. Whew, that’s a mouthful! During my time at IUPUI, I gained not only web, but graphic desgin experience as well. While I dabbled in Illustrator in high school, I swore that I would never use it going forward in my career. Now, it is a staple tool that I use daily for my projects.</p>

              <p>When you can’t find me in my office, you can generally find me laying on the couch watching television shows with my kitty, Daphne (a.k.a. Nee-Nee), or I’m playing video games with my boyfriend, Zachary, or most likely, I’m sleeping in bed with my puppy, Izzie (a.k.a. Izzo).</p>

              <p>I am currently seeking opportunities to increase my skills in brand identity design and packaging design, as well as a full-time remote position with a creative agency designing websites. If you have these opportunities for me, I would love it if you <a href="/contact" className="profile-link">contact me</a>!</p>
            </div>

            <div className="something-mobile">
              <div className="profile-container-mobile">
                <div className="header profile mobile">
                  <div className="smileys item-a">
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                  </div>
  
                  <p className="item-b">profile.txt</p>
                </div>
  
                <div className="profile-information-mobile">
                  <p className="profile-tidbit-mobile">NAME . . . . . ANDREA TRIGG</p>
                  <p className="profile-tidbit-mobile">ALIASES . . .AETRIGG/PANDEE</p>
                  <p className="profile-tidbit-mobile">BIRTHDAY . .  NOVEMBER 10TH</p>
                  <p className="profile-tidbit-mobile">PERSONALITY TYPE . . INFP-T</p>
                  <p className="profile-tidbit-mobile">ENNEAGRAM TYPE . . . . .4w3</p>
                  <p className="profile-tidbit-mobile">ASTROLOGY SIGN . . .SCORPIO</p>
                  <p className="profile-tidbit-mobile">HOGWARTS HOUSE . .RAVENCLAW</p>
                  <p className="profile-tidbit-mobile">PATRONUS CHARM . .RED PANDA</p>
                  <p className="profile-tidbit-mobile">FAVE. SEASON . . . . AUTUMN</p>
                  <p className="profile-tidbit-mobile">FAVE. T.V. SHOW . . . . . .<br/>. . . . . . . BOB'S BURGERS</p>
                  <p className="profile-tidbit-mobile">FAVE. SONG . . . <a href="https://www.youtube.com/watch?v=9Gb0a8Ie2hM" className="profile-link">CLICK HERE</a></p>
                  <p className="profile-tidbit-mobile">FAVE. VINE . . . <a href="https://www.youtube.com/watch?v=fFLiP9VS6Is" className="profile-link" target="_blank">CLICK HERE</a></p>
                  <p className="profile-tidbit-mobile" target="_blank">FAVE. WORD . . . . . .YEET</p>
                </div>
              </div>
            </div>

            <div className="signature-container-mobile">
              <img src={signature} alt="signature" />
            </div>
          </div>
        </div>
        <Footer/>
      </Mobile>

      <Desktop>
        <div className="body">
          <div className="container about">
            <div className="header about">
              <div className="smileys item-a">
                <img src={smiley} className="smiley" alt="smiley" />
                <img src={smiley} className="smiley" alt="smiley" />
                <img src={smiley} className="smiley" alt="smiley" />
              </div>

              <p className="item-b">about.html</p>
            </div>

            <div className="margins">
              <h1>NICE TO <span className="pink-letter">M</span><span className="purple-letter">E</span><span className="yellow-letter">E</span><span className="pink-letter">T</span> YOU!</h1>
              <h2>NOW THAT YOU'RE HERE, ALLOW ME<br/>TO INTRODUCE MYSELF</h2>
            </div>

            {/* grid section starts below */}
            <div className="grid-about">

              {/* me photo container - float left */}
              <div className="me-container">
                <div className="header me">
                  <div className="smileys item-a">
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                  </div>

                  <p className="item-b">me.jpeg</p>
                </div>
              </div>

              {/* sunset waltz photo container - float right */}
              <div className="sunset-container">
                <div className="header sunset">
                  <div className="smileys item-a">
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                  </div>

                  <p className="item-b">2011-sunset-waltz.psd</p>
                </div>
              </div>
              
              {/* profile information container - float left */}
              <div className="profile-container">
                <div className="header profile">
                  <div className="smileys item-a">
                      <img src={smiley} className="smiley" alt="smiley" />
                      <img src={smiley} className="smiley" alt="smiley" />
                      <img src={smiley} className="smiley" alt="smiley" />
                  </div>

                  <p className="item-b">profile.txt</p>
                </div>

                <div className="profile-information">
                  <p className="profile-tidbit">NAME . . . . . . . . . ANDREA TRIGG</p>
                  <p className="profile-tidbit">ALIASES . . . . . . .AETRIGG/PANDEE</p>
                  <p className="profile-tidbit">BIRTHDAY . . . . . . .NOVEMBER 10TH</p>
                  <p className="profile-tidbit">PERSONALITY TYPE . . . . . . INFP-T</p>
                  <p className="profile-tidbit">ENNEAGRAM TYPE . . . . . . . . .4w3</p>
                  <p className="profile-tidbit">ASTROLOGY SIGN . . . . . . .SCORPIO</p>
                  <p className="profile-tidbit">HOGWARTS HOUSE . . . . . .RAVENCLAW</p>
                  <p className="profile-tidbit">PATRONUS CHARM . . . . . .RED PANDA</p>
                  <p className="profile-tidbit">FAVE. SEASON . . . . . . . . AUTUMN</p>
                  <p className="profile-tidbit">FAVE. T.V. SHOW . . . BOB'S BURGERS</p>
                  <p className="profile-tidbit">FAVE. SONG . . . . . . . <a href="https://www.youtube.com/watch?v=9Gb0a8Ie2hM" className="profile-link" target="_blank">CLICK HERE</a></p>
                  <p className="profile-tidbit">FAVE. VINE . . . . . . . <a href="https://www.youtube.com/watch?v=fFLiP9VS6Is" className="profile-link" target="_blank">CLICK HERE</a></p>
                  <p className="profile-tidbit">FAVE. WORD . . . . . . . . . . YEET</p>
                </div>
                </div>

              <div className="paragraph-container">
                <p>My name is Andrea (sounds like And-ree-uh) and I am a creative soul living in the middle of nowhere in Indiana. I am obsessed with details and making others happy; whether it’s a client looking for a killer brand and website for their business or mailing out stickers and handmade goods through my small business, my absolute goal in life is to make as many people smile as I possibly can with the things I create with my own two hands.</p>

                <p>I got my start in creating early on; first with pencil and paper, then quickly graduating to digital mediums in early 2009. In my free time, I would create graphics and art using the free program GIMP. I also explored web design and development by making websites in Geocities (man, remember when that existed?) I stepped away from these around 2011 and focused instead on video editing, first in Sony Vegas Pro and moving up to Adobe Premiere Pro and Final Cut Pro. In fact, I loved making videos so much that I spent my first year at Butler University pursuing a degree in it. However, it was a required course in basic HTML and CSS that I found my true passion for web design and development.</p>

                <p>In the spring of 2020, I graduated from Indiana University-Purdue University Indianapolis with a Bachelor’s of Science degree in Media Arts and Science and a concentration in web design and development. Whew, that’s a mouthful! During my time at IUPUI, I gained not only web, but graphic desgin experience as well. While I dabbled in Illustrator in high school, I swore that I would never use it going forward in my career. Now, it is a staple tool that I use daily for my projects.</p>

                <p>When you can’t find me in my office, you can generally find me laying on the couch watching television shows with my kitty, Daphne (a.k.a. Nee-Nee), or I’m playing video games with my boyfriend, Zachary, or most likely, I’m sleeping in bed with my puppy, Izzie (a.k.a. Izzo).</p>

                <p>I am currently seeking opportunities to increase my skills in brand identity design and packaging design, as well as a full-time remote position with a creative agency designing websites. If you have these opportunities for me, I would love it if you <a href="/contact" className="profile-link">contact me</a>!</p>
              </div>

              <div className="signature-container">
                <img src={signature} alt="signature" />
              </div>

            </div>


            {/*<div className="me-container">
              <div className="header me">
                <div className="smileys item-a">
                  <img src={smiley} className="smiley" alt="smiley" />
                  <img src={smiley} className="smiley" alt="smiley" />
                  <img src={smiley} className="smiley" alt="smiley" />
                </div>

                <p className="item-b">me.jpeg</p>
              </div>
            </div>

            <div className="paragraph-1-container">
              <p>My name is Andrea (sounds like And-ree-uh) and I am a creative soul living in the middle of nowhere in Indiana. I am obsessed with details and making others happy; whether it’s a client looking for a killer brand and website for their business or mailing out stickers and handmade goods through my small business, my absolute goal in life is to make as many people smile as I possibly can with the things I create with my own two hands.</p>

              <p>I got my start in creating early on; first with pencil and paper, then quickly graduating to digital mediums in early 2009. In my free time, I would create graphics and art using the free program GIMP. I also explored web design and development by making websites in Geocities (man, remember when that existed?) I stepped away from these around 2011 and focused instead on video editing, first in Sony Vegas Pro and moving up to Adobe Premiere Pro and Final Cut Pro.</p>
            </div>

            <div className="sunset-container">
              <div className="header sunset">
                <div className="smileys item-a">
                  <img src={smiley} className="smiley" alt="smiley" />
                  <img src={smiley} className="smiley" alt="smiley" />
                  <img src={smiley} className="smiley" alt="smiley" />
                </div>

                <p className="item-b">2011-sunset-waltz.psd</p>
              </div>
            </div>*/}
          </div>
        </div>
        <Footer />
      </Desktop>
    </div>
  )
}
 
export default About;