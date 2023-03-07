import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PersonLists() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then(response => {
        setData(response.data.users);
      });
  }, []);

  return (
    <div>
      {data.map(user => (
        <p key={user.id}>
          Email: {user.email} Password: {user.password} 
        </p>
      ))}
    </div>
  );
}

export default PersonLists; 
