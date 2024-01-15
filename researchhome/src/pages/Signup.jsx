import React from 'react';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import Sign from '../components/Signup';

function HomePage() {
    return (
        <div className='HomePage'>
            <Header />
            <Sign />
            <Footer />
        </div>
    );
  }
  
  export default HomePage;
