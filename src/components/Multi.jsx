import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.css'

const MultiItemCarousel = ({items}) => {
  const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    
    mobile: {
      breakpoint: { max: 1023, min: 0 },
      items: 1
    }
  };



  return (
    <div
   >
    <Carousel
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      keyBoardControl={true}
      
    >
      {items.map((item, index) => (
        <div key={index} className=''>
          <img className="d-block w-50 m-auto" src={item} alt={`slide ${index}`} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export {MultiItemCarousel as MultiCarousel};
