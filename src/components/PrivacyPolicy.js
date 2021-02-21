import { React, Component } from 'react';
import '../App.css';
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

class PrivacyPolicy extends Component{
    render() {
        return(
            <div className="responsive-container">
                <Mobile>
                    <div className="body-mobile">
                        <div className="container-mobile privacy">
                            <div className="header privacy mobile">
                            <div className="smileys-mobile item-a">
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                            </div>

                            <p className="item-b">privacy-policy.html</p>
                            </div>

                            <div className="margins">
                                <h1 className="mobile">PRIVACY POLICY</h1>
                                <h2 className="mobile privacy">FOR ANDREA DESIGNS</h2>

                                <div className="center margins2">
                                    <div className="privacy-policy-container-mobile">
                                        <p>At Andrea Designs, accessible from <a href="https://designsbyandrea.me/">https://designsbyandrea.me</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Andrea Designs and how we use it.</p>

                                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                                        <h4>LOG FILES</h4>

                                        <p>Andrea Designs follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Privacy Policy Generator</a> and the <a href="https://www.generateprivacypolicy.com">Privacy Policy Generator</a>.</p>

                                        <h4>PRIVACY POLICIES</h4>

                                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Andrea Designs.</p>

                                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Andrea Designs, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                                        <p>Note that Andrea Designs has no access to or control over these cookies that are used by third-party advertisers.</p>

                                        <h4>THIRD PARTY PRIVACY POLICIES</h4>

                                        <p>Andrea Designs's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

                                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                                        <h4>CHILDREN'S INFORMATION</h4>

                                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                                        <p>Andrea Designs does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                                        <h4>ONLINE PRIVACY POLICY ONLY</h4>

                                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Andrea Designs. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                                        <h4>CONSENT</h4>

                                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>

                <Desktop>
                    <div className="body">
                        <div className="container privacy">
                            <div className="header privacy">
                                <div className="smileys item-a">
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                    <img src={smiley} className="smiley" alt="smiley" />
                                </div>

                                <p className="item-b">privacy-policy.html</p>
                            </div>

                            <div className="margins">
                                <h1>PRIVACY POLICY</h1>
                                <h2>FOR ANDREA DESIGNS</h2>

                                <div className="center">
                                    <div className="privacy-policy-container">
                                        <p>At Andrea Designs, accessible from <a href="https://designsbyandrea.me/">https://designsbyandrea.me</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Andrea Designs and how we use it.</p>

                                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                                        <h4>LOG FILES</h4>

                                        <p>Andrea Designs follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Privacy Policy Generator</a> and the <a href="https://www.generateprivacypolicy.com">Privacy Policy Generator</a>.</p>

                                        <h4>PRIVACY POLICIES</h4>

                                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Andrea Designs.</p>

                                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Andrea Designs, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                                        <p>Note that Andrea Designs has no access to or control over these cookies that are used by third-party advertisers.</p>

                                        <h4>THIRD PARTY PRIVACY POLICIES</h4>
                                        
                                        <p>Andrea Designs's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

                                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                                        <h4>CHILDREN'S INFORMATION</h4>

                                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                                        <p>Andrea Designs does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                                        <h4>ONLINE PRIVACY POLICY ONLY</h4>

                                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Andrea Designs. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                                        <h4>CONSENT</h4>

                                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>

                                    </div>
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

export default PrivacyPolicy;