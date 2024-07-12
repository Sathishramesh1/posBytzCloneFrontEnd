import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaRegStar } from "react-icons/fa";
import items from '../utilites/testimonials.json';
import './MultiItemCard.css';

const MultiItemCard = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      keyBoardControl={true}
    >
      {Array.isArray(items) && items.map((item, index) => (
        <div key={index} className="testimonial-item">
          <div className="d-flex flex-column align-items-center">
            <img className="d-block w-25 m-auto" src={item.logo} alt={`slide ${index}`} />
            <p className="customer-name">
              {item.customer_name}
            </p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaRegStar key={i} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export { MultiItemCard };
