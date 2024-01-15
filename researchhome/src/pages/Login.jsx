import React from 'react';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import Login from '../components/Login';

function HomePage() {
    return (
        <div className='HomePage'>
            <Header />
            <Login />
            <Footer />
        </div>
    );
  }
  
  export default HomePage;
