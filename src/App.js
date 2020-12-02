import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header/header';
import Footer from './Componentes/Footer/footer';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import thema from './Theme/theme';  

function App() {
  return (
    <MuiThemeProvider theme = { thema }>
      <Header></Header>
      <Footer></Footer>
    </MuiThemeProvider>
  );
}

export default App;
