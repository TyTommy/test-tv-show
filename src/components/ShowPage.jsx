import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const ShowPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the TV show!", error);
      });
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <div className="show-details">
        <img src={show.image ? show.image.medium : ''} alt={show.name} />
        <div className="show-info">
          <p><strong>Genre:</strong> {show.genres.join(', ')}</p>
          <p><strong>Status:</strong> {show.status}</p>
          <p><strong>Premiered:</strong> {show.premiered}</p>
          <p><strong>Rating:</strong> {show.rating.average}</p>
          <p>{show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'No summary available'}</p>
        </div>
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default ShowPage;
