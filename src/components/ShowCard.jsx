import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <img src={show.image ? show.image.medium : ''} alt={show.name} />
      <div className="show-info">
        <h3>{show.name}</h3>
        <p>{show.genres.join(', ')}</p>
        <Link to={`/show/${show.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
