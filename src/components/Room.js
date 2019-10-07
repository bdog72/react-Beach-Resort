import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/room-1.jpeg';
export default function Room({ room }) {
  const { name, slug, images, price } = room;
  console.log(room);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImage} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary">
          Features
        </Link>
      </div>
    </article>
  );
}

// <img src={Image} alt="" />
// <img src="../images/room-8.jpeg" alt="" />
