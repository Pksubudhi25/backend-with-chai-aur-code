import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function JokesComponent() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
    <div>
      <h1>Chai aur code</h1>
      <p>JOKES:{jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}

export default JokesComponent;
