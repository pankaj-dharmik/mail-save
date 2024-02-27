import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './UserPage.css'; 

const UserPage = () => {
  const { userId } = useParams();

  useEffect(() => {
    // Make POST API call with userId
    axios.post('https://ywjru1t4oa.execute-api.ap-south-1.amazonaws.com/dev/savemail', { userId })
      .then(response => {
        console.log('API Response:', response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, [userId]);

  return (
    <div className="user-page-container">
      <h1>Congratulations {userId}!</h1>
      <h2>You will get your digital gold within 24 hours.</h2>
      <h3>Please, Don't forget to LOGIN to our App</h3>
    </div>
  );
};

export default UserPage;
