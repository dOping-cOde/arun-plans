import React, { useState } from 'react';
import './Card.css';

function Card({ id, image, info, name, price, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.slice(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className='card'>
      <div>
        <img src={image} className='image' alt={name} />
        <div className='item-details'>
          <h2>{name}</h2>
          <h2>Rs. {price}</h2>
        </div>
        <div className='des'>
          {description}
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={readmoreHandler}>
            {readmore ? ' Show Less' : ' Read More'}
          </span>
        </div>
        <button onClick={() => removeTour(id)} className='btn'>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Card;
