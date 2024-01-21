import React from "react";
import Card from './Card';
import './Tours.css';

function Tours({ tours, removeTour }) {
  return (
    <div className="tour">
      <h1 className="head">Plan Your Tour With Arun</h1>
      <div className="card-container">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
