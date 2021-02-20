import '../App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import smiley from '../assets/black-smiley.svg';
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

function Shop(){
    return(
        <div className="responsive-container">
            <Mobile>
                <div className="container-mobile">
                    <div className="body-mobile">

                    </div>
                </div>
            </Mobile>

            <Desktop>
                <div className="body">
                    <div className="container shop">
                        <div className="header shop">
                        <div className="smileys item-a">
                            <img src={smiley} className="smiley" alt="smiley" />
                            <img src={smiley} className="smiley" alt="smiley" />
                            <img src={smiley} className="smiley" alt="smiley" />
                        </div>

                        <p className="item-b">shop.html</p>
                        </div>

                        <div className="margins">
                            <h1>COMING SOON</h1>
                            <h2 className="shop-margin">MY SHOP IS UNDER CONSTRUCTION, BUT HAVE NO FEAR</h2>

                            <div className="center">
                                <div className="etsy-shop">
                                    <div className="etsy-shop-header">
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>

                                        <p className="">etsy-shop.html</p>
                                    </div>

                                    <div className="etsy-shop-container">
                                        <p>My shop is currently under construction and will be coming soon! Until then, please shop for my handmade products by visiting <a href="https://designsbyandrea.etsy.com/" className="etsy-link">etsy.designsbyandrea.com</a>!</p>
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

export default Shop;