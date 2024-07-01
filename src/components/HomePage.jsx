import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';
import '../App.css';

const HomePage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the shows!", error);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>TV Shows</h1>
      <div className="show-grid">
        {shows.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
