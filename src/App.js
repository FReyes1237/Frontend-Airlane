import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header/header';
import Footer from './Componentes/Footer/footer';
import ListVuel from './Componentes/Content/ListaVuelos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
