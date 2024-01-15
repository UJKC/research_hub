// Example in a React component
import React, { useEffect, useState } from 'react';
import Header from '../components/Headers';
import Footer from '../components/Footer';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <Header />
        <h1>Frontend-Backend Connection Example</h1>
        {data && <p>Data from the backend: {data.message}</p>}
        <Footer />
    </div>
  );
};

export default MyComponent;