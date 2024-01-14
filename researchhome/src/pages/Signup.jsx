import React from 'react';
import Header from '../components/Headers';
import Footer from '../components/Footer';
import Heros from '../components/Heros';

function HomePage() {
    return (
        <div className='HomePage'>
            <Header />
            <Heros />
            <Footer />
        </div>
    );
  }
  
  export default HomePage;
