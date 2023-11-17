import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { MyProvider } from './components/ContadorProvider/contadorProvider';
import ContadorConsumer from './components/ContadorConsumer/contadorConsumer';
import ContadorConsumer2 from './components/ContadorConsumer2/contadorConsumer2';
import Home from './components/Home/home';

const App = () => {
  return (
    <div className='container-app'>
    <MyProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/consumer1">Consumidor 1</Link>
              </li>
              <li>
                <Link to="/consumer2">Consumidor 2</Link>
              </li>
            </ul>
          </nav>

          <hr />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/consumer1" element={<ContadorConsumer/>} />
            <Route path="/consumer2" element={<ContadorConsumer2/>} />
          </Routes>
        </div>
      </Router>
    </MyProvider>
    </div>
  );
};

export default App;