import React, { useState } from 'react';
import {AboutUs} from'./components/AboutUs';
import {TermsConditions} from './components/TermsConditions';
import {Services} from './components/Services';
import {ContactUs} from './components/ContactUs';
import './App.css';

function App(){

  const [currentPage, setCurrentPage] = useState();

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs />;
      case 'terms':
        return <TermsConditions />;
      case 'services':
        return <Services />;
      case 'contact':
        return <ContactUs />;
      default:

        return (
          <div className='HomePage'>
            <h1>Welcome to the Vegetable Store</h1>
            <p>Select a page to show and Purchase more items!</p>
          </div>
        );
    }
  }
  return (
    <div className='OurVegetableStore' >
      <nav style={{ marginBottom: '30px' }}> 
        <button onClick={() => setCurrentPage('about')}>About Us</button>
        <button onClick={() => setCurrentPage('terms')}>Terms & Conditions</button>
        <button onClick={() => setCurrentPage('services')}>Services</button>
        <button onClick={() => setCurrentPage('contact')}>Contact Us</button>
      </nav>
      {renderPage()}
    </div>
  );
  };


export default App;
