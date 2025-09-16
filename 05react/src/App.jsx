import React, { useState, useEffect } from 'react';
import { ChaiCouonter } from './ChaiOrder';
import { ChaiMenu } from './AllChai';
import { useSpecialChai } from './custom-hooks/useSpecialChai';

export function App() {
  const { chai, loading, error } = useSpecialChai();
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    // fetch('http://localhost:3000/api/hello')
    //     .then(response => response.json())
    //     .then(data => setMessage(data.message))
    //     .catch(error => setMessage('Error fetching message'));

    setMessage((prev) => prev + ' - Updated');

    return () => {
      // Cleanup if necessary
    };
  }, []);

  if (loading || error) {
    return (
      <div>
        <h1>Loading...</h1>
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome to Chai code</h1>
      <button>{message}</button>
      <p>Welcome to Chai code</p>
      <ChaiCouonter />

      {/* <h2>ChaiMenu</h2>
      <ChaiMenu /> */}
      <h3>{chai.name}</h3>
    </div>
  );
}
