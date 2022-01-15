import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/Products" element={<MainContent />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// <Route path="/description" element={<Discription />}/>  i need to craete new file for product discription when the user click th product it should go to the product discription