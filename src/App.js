import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Specials from './components/Specials';
import Reviews from "./components/Reviews";
import About from "./components/About";

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Specials/>
      <Reviews/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
