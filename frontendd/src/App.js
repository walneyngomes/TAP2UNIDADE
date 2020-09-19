import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './route';
const axios = require('axios');

function App() {
  
    axios.get('/usuarios').then(resultado=>{
        console.log(resultado);
    })
    axios.get('/livro').then(resultado=>{
      console.log(resultado);
  })
  axios.post('/auth/login').then(resultado=>{
    console.log(resultado);
})
  return (
    
    <Routes />
  );
}

export default App;
