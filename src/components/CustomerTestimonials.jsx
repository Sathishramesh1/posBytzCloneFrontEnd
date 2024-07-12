import React, { useEffect, useState } from 'react';
import './CustomerTestimonials.css';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import Card from './Card';
import items from '../utilites/testimonials.json';
import { FaRegStar } from "react-icons/fa6";

function CustomerTestimonials() {
  const [view, setView] = useState(0);
 

  
  const handleRight = () => {
    setView((prev) => (prev + itemsPerPage >= items.length ? 0 : prev + itemsPerPage));
  };

  const handleLeft = () => {
    setView((prev) => (prev === 0 ? Math.max(items.length - itemsPerPage, 0) : prev - itemsPerPage));
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const itemsPerPage = isMobile ? 1 : 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (view >= items.length) {
      setView(0);
    }
  }, [items, itemsPerPage]);

  return (
    <div className='testimonial_page'>
      <div className='testimonial_heading'>
        <div>Customer Testimonials</div>
        <div className='arrow_icon'>
        {!isMobile &&
        <>
          <TfiArrowCircleLeft onClick={handleLeft} />
          <TfiArrowCircleRight onClick={handleRight} />
          </>
        }
        </div>
      </div>
      <div className='cards_container'>
     
        {Array.isArray(items) && items.slice(view, isMobile? items.length:view + itemsPerPage).map((ele, index) => (
          <Card item={ele} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CustomerTestimonials;
