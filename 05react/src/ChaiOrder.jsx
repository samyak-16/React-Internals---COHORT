import { useState, useEffect } from 'react';

export function ChaiCouonter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>
        Chai Counter
        <p>You have served {count} cups of chai </p>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          ServeChai
        </button>
      </h2>
    </div>
  );
}
