import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { positions, Provider as AlertProvider } from 'react-alert';
import reportWebVitals from './reportWebVitals';

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
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
