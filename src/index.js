// External libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// Local imports
import { store }  from './utils/configureStore';
import App from './App';
import 'reset-css';
import './index.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);
