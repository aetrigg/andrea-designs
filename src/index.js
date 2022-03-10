import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { positions, Provider as AlertProvider } from 'react-alert';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Links from './components/Links';
import GAListener from './components/GAListener';
import Firebase from './firebase/firebase';
import FirebaseContext from './firebase/context.js';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Shop from './components/Shop.js';
import Contact from './Contact.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import TOS from './components/TOS';
import RWBY from './components/RWBY';
import Meredith from './components/Meredith';
import MeredithTimeLapse from './components/MeredithTimeLapse';
import Rapunzel from './components/Rapunzel';
import POTS from './components/POTS';
import POD from './components/POD';
import EtsyCountdown from './components/EtsyCountdown';
import ComponentToPrint from './components/TestingPortfolio';

const options = {
  timeout: 3000,
  containerStyle: {
    zIndex:100,
    position:'fixed',
    positions:positions.MIDDLE,
    backgroundColor:'rgba(0,0,0,0.5)',
    height:100 + 'vh'
  }
}

const AlertTemplate = ({ options, message, close }) => (
  <div style={{
    border: 'solid 5px black',
    width:20 + 'vw',
    height: 20 + 'vh',
    backgroundColor: '#fcfbfb',
    boxShadow: '9px 9px 0px #000000',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'Anonymous Pro',
    fontWeight: 600,
    fontSize: 3 + 'vh'
  }}>
      {options.type === 'info'}
      {options.type === 'success'}
      {options.type === 'error'}
      {message}
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <GAListener trackingId="UA-188628664-1">
          <ScrollToTop>
              <App />
          </ScrollToTop>
          <Route exact path="/links" component={Links} />
    
          <AlertProvider template={AlertTemplate} {...options}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/tos" component={TOS} />
            <Route exact path="/rwby" component={RWBY} />
            <Route exact path="/full-size-image-m" component={Meredith} />
            <Route exact path="/timelapse" component={MeredithTimeLapse} />
            <Route exact path="/full-size-image-r" component={Rapunzel} />
            <Route exact path="/full-size-image-p" component={POTS} />
            <Route exact path="/full-size-image-d" component={POD} />
            <Route exact path="/full-size-image-e" component={EtsyCountdown} />
            <Route path="/test-portfolio" component={ComponentToPrint} />
          </Switch>
          </AlertProvider>
        </GAListener>
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
