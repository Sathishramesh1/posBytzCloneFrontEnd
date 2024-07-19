import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import "./footer.css";

function Footer() {
  return (
    <div className="footer_page">
      <div className="column_one">
        <img
          src="https://posbytz.com/wp-content/uploads/2021/09/logo_light.svg"
          alt="logo"
        />

        <p>
          PosBytz is your comprehensive platform to manage everything you need
          to sell and grow your business.
        </p>

        <div>
          PosBytz is a product
          <br />
          <span>of Bytize, Inc.</span>
        </div>
      </div>

      <div className="column_two">
       
          <div className="column_title">PRODUCT</div>

          <div>
            <MdOutlineKeyboardArrowRight />
            Pricing
          </div>
          <div>
            <MdOutlineKeyboardArrowRight />
            Watch Videos
          </div>
          <div>
            <MdOutlineKeyboardArrowRight />
            Best POS Software
          </div>
          <div>
            <MdOutlineKeyboardArrowRight />
            PostBytz for Restaurants
          </div>
          <div>
            <MdOutlineKeyboardArrowRight />
            Cloud POS
          </div>
          <div>
            <MdOutlineKeyboardArrowRight />
            Android POS
          </div>
          <div>
            <MdOutlineKeyboardArrowRight />
            PostBytz for Small
          </div>
          <div>
            <MdOutlineKeyboardArrowRight />
            Business
          </div>
  
        </div>

        <div className="column_three">
        <div className="column_title">PARTNERS</div>

<div>
  <MdOutlineKeyboardArrowRight />
  Partner Program
</div>

<div>
  <MdOutlineKeyboardArrowRight />
  Become a Partner
</div>
<div>
  <MdOutlineKeyboardArrowRight />
  Partner Portal
</div>

        
      </div>


      <div className="column_four">
      
      <div className="column_title">COMPANY</div>
      
      <div><MdOutlineKeyboardArrowRight />
About Us
</div>
<div>
<MdOutlineKeyboardArrowRight />
Contact Us
</div>

<div>
<MdOutlineKeyboardArrowRight />
PosBytz Blog
</div>
<div>
<MdOutlineKeyboardArrowRight />
Terms and Conditions
</div>

<div>
<MdOutlineKeyboardArrowRight />
Privacy Policy
</div>


      </div>

      <div className="column_five">


    <div className="column_title">  ACCOUNT
    </div>
    <div>
    <MdOutlineKeyboardArrowRight />
Login to PosBytz
</div>
<div>
<MdOutlineKeyboardArrowRight />
Register with PosBytz
</div>



      </div>

      <div className="column_six">
      
      <div className="column_title">SUPPORT
      </div>

      <div>
      <MdOutlineKeyboardArrowRight />
Help Center
</div>
<div>
<MdOutlineKeyboardArrowRight />
Status Monitor
</div>
<div>
<MdOutlineKeyboardArrowRight />
Contact Support
</div>

      </div>

      <div className="column_last">

      <div className="column_title">FIND US ON</div>
      <div className="footer_icons">
      <BsFacebook />
      <AiFillTwitterCircle />
      <BsLinkedin />

      </div>

      </div>
    </div>
  );
}

export default Footer;
