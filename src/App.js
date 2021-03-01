import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { ReactHamburger } from 'react-hamburger';
import primaryLogo from './assets/primaryLogo-01.svg';
import { useMediaQuery } from 'react-responsive';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './Contact';
import Shop from './components/Shop.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import TOS from './components/TOS';
import RWBY from './components/RWBY';
import Meredith from './components/Meredith';
import MeredithTimeLapse from './components/MeredithTimeLapse';
import Rapunzel from './components/Rapunzel';
import POTS from './components/POTS';
import POD from './components/POD';
import EtsyCountdown from './components/EtsyCountdown';


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

//handles changes to media queries
/*const handleMediaQueryChange = (matches) => {
  console.log("it's working yay");

  (matches) =>
    matches ? <p>Testing this</p> : <p>also testing this</p>
}*/


//navigation link child component for navigation component
const NavigationLink = ({ doSomething, value, name }) => (
  <div onClick={() => doSomething(value)}>
    <NavLink exact to={`/${name}`} className={'item-mobile'} value={value} name={name}>{value}</NavLink>
  </div>
);

//navigation parent component for navigation link component
class Navigation extends React.Component{
  doSomething = value => {
    console.log("doSomething called by child with value:", value);
  }

  render() {
    console.log(this.props.children);
    
    const childrenWithProps = React.Children.map(this.props.children, child => {
      // checking isValidElement is the safe way and avoids a typescript error too
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { doSomething: this.doSomething });
      }
      return child;
    });

    return <div>{childrenWithProps}</div>;
  }
}

function App() {
  return (
    <div className="PersonalApp">

      <Mobile>
        <ReactHamburger 
          barColor={"#000"} 
          barRadius={0} 
          inline={true}
          locked={true}
          right={true}
          linkContainerColor={"#fcfbfb"}
          linkContainerMaxWidth={300}
          linkContainerWidth={100}
          verticalSlide={true}
          showTopBar={true}
          topBarColor={"#FF99B0"}
          topBarGutter={-100}
          className={"border-bottom"}
          TopContent={<img src={primaryLogo} className="logo-mobile"></img>}
        >
          <Navigation className="navigation">
            <NavigationLink activeClassName="active" className="navigation-link" name={"home"} value={"HOME"} />
            <NavigationLink activeClassName="active" className="navigation-link" name={"about"} value={"ABOUT"} />
            <NavigationLink activeClassName="active" className="navigation-link" name={"portfolio"} value={"PORTFOLIO"} />
            <NavigationLink className="navigation-link" name={"shop"} value={"SHOP"} />
            <NavigationLink activeClassName="active" className="navigation-link" name={"contact"} value={"CONTACT"} />
          </Navigation>
        </ReactHamburger>
      </Mobile>

      <Desktop>
        <div className="navigation-desktop">
          <img src={primaryLogo} className="logo" />

          <div className="navigation-links">
            <NavLink exact activeClassName="active" to="/" className="item">HOME</NavLink>
            <NavLink exact activeClassName="active" to="/about" className="item">ABOUT</NavLink>
            <NavLink exact activeClassName="active" to="/portfolio" className="item">PORTFOLIO</NavLink>
            <NavLink exact activeClassName="active" to="/shop" className="item">SHOP</NavLink>
            <NavLink exact activeClassName="active" to="/contact" className="item">CONTACT</NavLink>
          </div>
        </div>
      </Desktop>

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

    </div>
  );
}

export default App;
