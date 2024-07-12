import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiArrowRightSLine } from "react-icons/ri";
import '../App.css'



function NavBar() {

  const [showDropdown, setShowDropdown] = useState(false);
  
  
  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setTimeout(()=>{
      setShowDropdown(false);

    },1000);
    
  };


  

  return (
    <header className='header_area '>
      <div className='header_top'>
         <div className='container_'>
         <div className='row'>
         <div className="col-lg-6 header_top_column left_content">
         <ul>
<li>Email:<a href="mailto:support@posbytz.com">support@posbytz.com</a></li>
</ul>
     </div>
     <div className="col-lg-6 header_top_column right_content">
                            </div>
         </div>
         </div>

      </div>


    <div className='header_bottom'>
        

    <Navbar expand="lg" className="bg-white h-100 w-100 shadow-lg p-3 mb-3">
      <Container>
        <Navbar.Brand href="#home" className='navbar_brand'>
        <div className='logo'>
        <img src="https://posbytz.com/wp-content/uploads/2021/09/logo_default_2x.svg " className='mw-100' alt='posBytz' />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto  ">
            <Nav.Link href="#home"  
          
           onMouseEnter={handleMouseOver}
           onMouseLeave={handleMouseOut}
          
           >
              
              <b style={{color:"#000000A6"}}
            
              className='no-bg '
            > Explore </b>

             <NavDropdown title="" id="nav-dropdown "
        
             className='first_drop  '        
             show={showDropdown}                     
             >
             
        
        <NavDropdown.Item eventKey='1.1' className='nav_dropdown_item no-bg  second_dropdown'>Restaurant <RiArrowRightSLine />
      
        <div className='second_dropdown_content'>
             <ul>
              <li>
              Restaurant POS Software
              </li>
              <li>Cloud kitchen Software </li>
              <li>Cafe Billing Software </li>
              <li>Food truck POS </li>
              <li>Bar and Restaurant Software </li>
             </ul>

        </div>
         

        
        
        </NavDropdown.Item>



        {/* <NavDropdown title={<div className='nav_dropdown_item ' > Restaurant <RiArrowRightSLine /></div>} > */}
       
      {/* <NavDropdown.Item eventKey="1.1.1" className='nav_dropdown_item '>Restaurant POS Software  <RiArrowRightSLine /></NavDropdown.Item> */}
      {/* <NavDropdown.Item eventKey="1.1.2" className='nav_dropdown_item'>Cloud kitchen Software <RiArrowRightSLine /></NavDropdown.Item> */}
      {/* <NavDropdown.Item eventKey="1.1.3" className='nav_dropdown_item'>Cafe Billing Software <RiArrowRightSLine /></NavDropdown.Item> */}
      {/* <NavDropdown.Item eventKey="1.1.4" className='nav_dropdown_item'>Food truck POS <RiArrowRightSLine /></NavDropdown.Item> */}
      {/* <NavDropdown.Item eventKey="1.1.5" className='nav_dropdown_item'>Bar and Restaurant Software <RiArrowRightSLine /></NavDropdown.Item> */}
        
        {/* </NavDropdown> */}
 

        <NavDropdown.Item eventKey="1.2" className='nav_dropdown_item no-bg second_dropdown'> Retail
        
        <div className='second_dropdown_content'>
             <ul>
              <li>
              Retail Billing Software 
             
              </li>
              <li>Supermarket Billing Software </li>
              <li>Grocery store software  </li>
              <li>Boutique software </li>
              <li>Butchery software  </li>
              <li>vegetable shop billing software</li>
              <li> 
Liquor store POS 
</li>
<li>
Fish store software 
</li>

             </ul>

        </div>
        
        
         <RiArrowRightSLine /></NavDropdown.Item>
        <NavDropdown.Item eventKey="1.3" className='nav_dropdown_item no-bg second_dropdown'>POS 
        
        <div className='second_dropdown_content'>
             <ul>
              <li>
              Cloud POS 
             
              </li>
              <li>IPAD POS  </li>
              <li>Windows POS  </li>
              <li>Android POS </li>
              <li>POS System for Small Business   </li>
              <li>vegetable shop billing software</li>
              <li> 
              Best Pos Software 
</li>


             </ul>

        </div>
        
       





        
        
        
        <RiArrowRightSLine /></NavDropdown.Item>
        <NavDropdown.Item eventKey="1.4" className='nav_dropdown_item no-bg second_dropdown'>Online
         Ordering <RiArrowRightSLine />
         
         
         <div className='second_dropdown_content'>
             <ul>
              <li>
              Cloud POS 
             
              </li>
              <li> Restaurant Online ordering system  </li>
              <li>Online Food Delivering System </li>
              <li>Online Food Ordering System </li>
             

             </ul>

        </div>
        
       
         
         
         </NavDropdown.Item>
        <NavDropdown.Item eventKey="1.5" className='nav_dropdown_item no-bg second_dropdown'>E-commerce <RiArrowRightSLine />
        <div className='second_dropdown_content'>
             <ul>
              <li>
              Ecommerce Platform 
             
              </li>
              <li> Online Sales Platform   </li>
              
             

             </ul>

        </div>
        
       

        
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="1.6" className='nav_dropdown_item no-bg second_dropdown'>Integration <RiArrowRightSLine />
        <div className='second_dropdown_content'>
             <ul>
              <li>
              Woocommerce POS integration 




             
              </li>
              <li> WhatsApp Ecommerce Integration   </li>
              <li>Shopify Alternatives </li>
              <li>Zoho Pos Integration </li>
              <li>Shopify POS integration</li>
             

             </ul>

        </div>
        
        
        
        
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="1.7" className='nav_dropdown_item no-bg second_dropdown'>E-invoicing <RiArrowRightSLine />
        <div className='second_dropdown_content'>
             <ul>
              <li>
              ZATCA approved E invoicing software 
             </li>
              <li> Free e-invoicing software in Saudi Arabia    </li> 
             </ul>

        </div>
        
        
        

        </NavDropdown.Item>
        <NavDropdown.Item eventKey="1.8" className='nav_dropdown_item no-bg'> Free Delivery App <RiArrowRightSLine /></NavDropdown.Item>
       
      </NavDropdown> 
            </Nav.Link>
            <NavDropdown title={<b className='no-bg'>Partners</b>}>
        
        <NavDropdown.Item eventKey="2.1" className='nav_dropdown_item'>

        Partner Program 


        </NavDropdown.Item>
        <NavDropdown.Item eventKey="2.2" className='nav_dropdown_item no-bg'>  Become a Partner  </NavDropdown.Item>
        <NavDropdown.Item eventKey="2.3" className='nav_dropdown_item no-bg'>  Partner Portal   </NavDropdown.Item>
    </NavDropdown>
            <Nav.Link href="#link"><b className='no-bg'>Pricing</b></Nav.Link>
            <Nav.Link href="#link"><b className='no-bg'>Blog</b></Nav.Link>
            <NavDropdown title={<b className='no-bg'>Company</b>}>
        
        <NavDropdown.Item eventKey="4.1" className='nav_dropdown_item no-bg'>

       About us


        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" className='nav_dropdown_item no-bg'> 
        Contact us
          </NavDropdown.Item>
        
    </NavDropdown>
            <Nav.Link href="#link"><b className='no-bg'>Support</b></Nav.Link>
            <Nav.Link href="#link"><b className='no-bg'>Login</b></Nav.Link>
            <NavDropdown title={<b className='no-bg '>Language</b>}>
        
        <NavDropdown.Item eventKey="8.1" className='nav_dropdown_item no-bg'>

       English


        </NavDropdown.Item>
        <NavDropdown.Item eventKey="8.2" className='nav_dropdown_item no-bg'> 
        العربية 
          </NavDropdown.Item>
        
    </NavDropdown>
            <Nav.Link href="#link"> <b className='no-bg'>Career</b></Nav.Link>
            <Nav.Link className='navbar_button '>
            Get Started
            </Nav.Link>
           
          </Nav>
    
    

        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>


    </header>
  )
}

export default NavBar