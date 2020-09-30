import React from 'react';
import Header from './components/Header/Header';
// import TempPage from './components/Pages/TempPage';
import Footer from './components/Footer/Footer';
import HomePage from './components/Pages/HomePage';

import './App.css';


function App() {
  return (
    <div >
      
      <div className="container-fluid background">
        <Header />
        {/* <TempPage /> */}
        <HomePage />

        <Footer />
      </div>
      </div>
    
  );
}

export default App;
