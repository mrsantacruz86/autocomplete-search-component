import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import API from './utils/API';


API.getCountryNames( countries => {
	ReactDOM.render(<App list={countries}/>, document.getElementById('root'));
});

registerServiceWorker();
