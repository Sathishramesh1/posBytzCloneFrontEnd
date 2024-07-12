import React from 'react'
import { MultiCarousel } from './Multi'
import carosel1 from '../utilites/carosel1.json';
// import './businesspage.css'

function BusinessPage() {
  return (
   <>
    <div className="carousel">
        <div>
          <h2>Trusted by great brands</h2>
          <p>
            Over 5000+ businesses in 15 countries have registered with PosBytz.
          </p>

        <button className="carousel_btn">
          Get started for free
        </button>

        </div>


        <div className="carousel_slider">
       
       <MultiCarousel items={carosel1.urls1}/>
       <MultiCarousel items={carosel1.urls2}/>
       <MultiCarousel items={carosel1.urls3}/>
          
        
        </div>     

      </div>

  </>
  )
}

export default BusinessPage