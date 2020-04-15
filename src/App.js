import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter} from 'react-router-dom';
import MainRoute from './route/Route'
function App() {
  return (
    <BrowserRouter>
    <MainRoute/>
    </BrowserRouter>
  );
}

export default App;
