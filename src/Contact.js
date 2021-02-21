import React from 'react';
import './App.css';
import smiley from './assets/black-smiley.svg';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import Footer from './components/Footer.js';
import { withAlert } from 'react-alert';

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

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            alert: ''
        }
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    submitEmail(e){
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:4444/sendmail",
            data: this.state
        }).then((response)=>{
            if(response.data.status === 'success'){
                const alert = this.props.alert;
                //alert("Message sent!");
                alert.show('Message sent')
                this.resetForm();
            }
            else if(response.data.status === 'fail'){
                const alert = this.props.alert;
                alert.show('Message failed to send. Please try again.')
                //alert("Message failed to send.");
            }
        })
    }

    resetForm(){
        this.setState({ name: '', email: '', subject: '', message: '' })
    }

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
        
                <div className="margins">
                <h1 className="mobile">LET'S GET TO WORK</h1>
                <h2 className="mobile">CALL ME, BEEP ME, IF YOU WANNA REACH ME, FILL OUT THE FORM BELOW</h2>
        
                <div className="center">
                <div className="contact-form-mobile">
                  <div className="contact-form-header-mobile">
                    <div className="smileys-mobile item-a">
                      <img src={smiley} className="smiley" alt="smiley" />
                      <img src={smiley} className="smiley" alt="smiley" />
                      <img src={smiley} className="smiley" alt="smiley" />
                    </div>
        
                    <p className="item-b">contact-form.php</p>
                  </div>
        
                  <form id="contact-form-mobile" onSubmit={this.submitEmail.bind(this)} method="POST">
        
                    <input placeholder="Name" id="name" type="text" className="inputForm-mobile item-f" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
        
                    <input placeholder="Email" id="email" type="text" className="inputForm-mobile item-g" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />

                    <input placeholder="Subject" id="subject" type="text" className="inputForm-mobile item-h" required value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
        
                    <textarea placeholder="Message" id="message" className="textareaForm-mobile item-i" required value={this.state.message} onChange={this.onMessageChange.bind(this)} />
        
                    <button type="submit" className="submitBtn-mobile item-j">Submit</button>
        
                  </form>
                </div>
                </div>
                </div>
              </div>
            </div>
          </Mobile>

          <Desktop>
            <div className="body">
              <div className="container">
                <div className="header contact">
                  <div className="smileys item-a">
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                    <img src={smiley} className="smiley" alt="smiley" />
                  </div>
        
                  <p className="item-b">contact.html</p>
                </div>
        
                <div className="margins">
                <h1>LET'S GET TO WORK</h1>
                <h2>CALL ME, BEEP ME, IF YOU WANNA REACH ME, FILL OUT THE FORM BELOW</h2>
        
                <div className="center">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <div className="smileys item-a">
                        <img src={smiley} className="smiley" alt="smiley" />
                        <img src={smiley} className="smiley" alt="smiley" />
                        <img src={smiley} className="smiley" alt="smiley" />
                      </div>
          
                      <p className="item-b">contact-form.php</p>
                    </div>
          
                    <form id="contact-form" onSubmit={this.submitEmail.bind(this)} method="POST">

                        <input placeholder="Name" id="name" type="text" className="inputForm item-f margin-bottom" required value={this.state.name} onChange={this.onNameChange.bind(this)} />

                        <input placeholder="Email" id="email" type="text" className="inputForm item-g margin-bottom" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />

                      <input placeholder="Subject" id="subject" type="text" className="inputForm margin-bottom item-h" required value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
          
                      <textarea placeholder="Enter your message here" id="message" className="textareaForm margin-bottom item-i" required value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          
                      <button type="submit" className="submitBtn item-j">Submit</button>
          
                    </form>
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

 
export default withAlert()(Contact);