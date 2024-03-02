import React, { useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [response, setResponse] = useState(null);
  
  const handlePostRequest = async () => {
    try {
      // Dummy API endpoint
      const apiUrl = 'https://dummyapi.com/api/post';

      // Your JWT token
      const token = 'your_jwt_token_here';

      // Data to send in the POST request body
      const postData = {
        key1: 'value1',
        key2: 'value2',
      };

      // Sending the POST request with Axios
      const response = await axios.post(apiUrl, postData, {
        headers: {
          'Authorization': `Bearer ${token}`, // Include JWT token in the Authorization header
          'Content-Type': 'application/json', // Set content type to JSON
        },
      });

      // Handle the response
      console.log(response.data); // Response data from the server
      setResponse(response.data); // Update state with the response data
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };




  return (
    <div>
      <button onClick={ () => handlePostRequest}>Make POST Request</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
