import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SubHeader from './components/SubHeader';
import Specials from './components/Specials';

function App() {
  return (
    <>
      <Header/>
      <SubHeader/>
      <Specials/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
