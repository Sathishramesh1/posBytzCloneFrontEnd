import React from 'react'
import './card.css'
import { FaRegStar } from "react-icons/fa6";


function Card({item}) {
  return (
    <div >

<div class="card"  style={{width:"550px",height:"360px"}}>
  
<div
className='card_heading' 
>
<img src={item.logo}/>
<p>
{item.customer_name}
</p>
<div className='star'>
<FaRegStar />
<FaRegStar />
<FaRegStar />
<FaRegStar />
<FaRegStar />
   
</div>
    
</div>

  <div class="card-body">
    <p class="card-text">
    {item.feedback}
    </p>
  </div>
</div>



    </div>
    
  )
}

export default Card