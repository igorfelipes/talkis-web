import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store'

import './assets/styles/global.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Provider store={store}>
        <BrowserRouter>
          <Routes /> 
        </BrowserRouter>
      </Provider>
      </header>
    </div>
  );
}

export default App;
