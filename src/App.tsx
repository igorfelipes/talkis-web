import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Routes from './routes';

import './assets/styles/global.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes /> 
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
