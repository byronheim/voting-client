import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Voting from './components/Voting';
import registerServiceWorker from './registerServiceWorker';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <Voting pair={pair} winner="Trainspotting" />, 
  document.getElementById('root')
);

registerServiceWorker();
