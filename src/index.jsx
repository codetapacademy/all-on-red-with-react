import React from 'react';
import { render } from 'react-dom';
import App from './component/app';

const renderApp = document.querySelector('#render-app');

render(<App />, renderApp);
