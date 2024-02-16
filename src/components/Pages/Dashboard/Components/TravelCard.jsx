import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TravelCard.scss';

import PropTypes from 'prop-types';

const TravelCard = ({ trip }) => {
  if (!trip) {
    return null;
  }
  const { name, startDate, backgroundPictureURL } = trip;

  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Calculate the countdown when the component mounts
    const calculateCountdown = () => {
      const currentDate = new Date();
      const travelStartDate = new Date(startDate);

      // Calculate the difference in milliseconds
      const difference = travelStartDate - currentDate;

      // Calculate days, hours, minutes, seconds from milliseconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      // Update the state with the countdown value
      setCountdown(days >= 0 ? days : null);
    };

    // Call the function to calculate the countdown
    calculateCountdown();
  }, [startDate]);

  return (
    <div className="cardContainer">
      <Link to={`/trip/${trip.id}`}>
        {/* Background image for the travel card */}
        <img className="cardPicture" src={backgroundPictureURL} alt="Travel" />
      </Link>
      <Link to={`/trip/${trip.id}`}>
        <div className="cardTitle">
          {/* Title of the travel */}
          <h3>{name}</h3>
          {/* Countdown of the days before the beginning of the travel */}
          {countdown && <span>Départ dans {countdown} jours</span>}
        </div>
      </Link>
    </div>
  );
};

TravelCard.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    backgroundPictureURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default TravelCard;
