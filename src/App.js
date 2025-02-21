import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Specials from './components/Specials';

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Specials/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
