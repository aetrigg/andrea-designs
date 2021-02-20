import React from "react";
import '../App.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

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
 
function Footer(props) {
  return (
    <div className="footer-container">
      <Desktop>
        <div className="footer-desktop-container">
            <div className="footer-desktop-links">
                <div className="footer-desktop-important">
                    <Link className="footer-link" exact to="/privacy-policy">PRIVACY POLICY</Link>
                    <Link className="footer-link" exact to="/tos">TERMS OF SERVICE</Link>
                    <Link className="footer-link" exact to="/resume">RESUME</Link>
                    <Link className="footer-link" exact to="/rwby">RWBY PAPER</Link>
                </div>

                <div className="footer-desktop-sm">
                        <a href="https://github.com/aetrigg/"><i className="fab fa-github fa-2x"></i></a>
                        <a href="https://behance.net/designsbyandrea/"><i className="fab fa-behance fa-2x"></i></a>
                        <a href="https://linkedin.com/in/designsbyandrea/"><i className="fab fa-linkedin-in fa-2x"></i></a>
                        <a href="https://pinterest.com/designsbyandrea/"><i className="fab fa-pinterest fa-2x"></i></a>
                        <a href="https://facebook.com/designsbyandrea/"><i className="fab fa-facebook-f fa-2x"></i></a>
                        <a href="https://instagram.com/designsby.andrea/"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="https://tiktok.com/designsbyandrea"><i className="fab fa-tiktok fa-2x"></i></a>
                </div>
            </div>
            

            <p className="copyright">Copyright 2021 Andrea Designs - All Rights Reserved</p>
        </div>
      </Desktop>

      <Mobile>
        <div className="footer-mobile-container">
            <div className="footer-mobile-links">
                <div className="footer-mobile-important">
                    <Link className="footer-link-mobile" exact to='/privacy-policy'>PRIVACY POLICY</Link>
                    <Link className="footer-link-mobile" exact to='/tos'>TERMS OF SERVICE</Link>
                    <Link className="footer-link-mobile" exact to='/resume'>RESUME</Link>
                    <Link className="footer-link-mobile" exact to='/rwby'>RWBY PAPER</Link>
                </div>

                <div className="footer-mobile-sm">
                    <a href="https://github.com/aetrigg/"><i className="fab fa-github fa-2x-mobile"></i></a>
                    <a href="https://behance.net/designsbyandrea/"><i className="fab fa-behance fa-2x-mobile"></i></a>
                    <a href="https://linkedin.com/in/designsbyandrea/"><i className="fab fa-linkedin-in fa-2x-mobile"></i></a>
                    <a href="https://pinterest.com/designsbyandrea/"><i className="fab fa-pinterest fa-2x-mobile"></i></a>
                    <a href="https://facebook.com/designsbyandrea/"><i className="fab fa-facebook-f fa-2x-mobile"></i></a>
                    <a href="https://instagram.com/designsby.andrea/"><i className="fab fa-instagram fa-2x-mobile"></i></a>
                    <a href="https://tiktok.com/designsbyandrea"><i className="fab fa-tiktok fa-2x-mobile"></i></a>
                </div>
            </div>

            <p className="copyright-mobile">Copyright 2021 Andrea Designs - All Rights Reserved</p>
        </div>
      </Mobile>
    </div>
  )
}
 
export default Footer;