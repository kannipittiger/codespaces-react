import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import Counter from './Counter';
import BMI from './BMI';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <BMI/>
    {/*<Counter/>*/}
    {/*<Hello name="tiger" age={15}/>*/}
    {/*<Hello name="frame" age="10"/>*/}
    {/*<Hello name="jay" age="5"/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
