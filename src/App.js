import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://xjl0zsag57.execute-api.us-east-1.amazonaws.com/deploy01/apigateway');
      const result = await response.json();
      setData(result.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Serverless App</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <p>{data}</p>}
    </div>
  );
}

export default App;
