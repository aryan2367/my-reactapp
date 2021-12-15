

import React from "react";
import { NavLink } from "react-router-dom";
import tyui from "./tyui.png";
import ghjk from "./ghjk.png";

import Footercard from "./Footercard";
const Footer = ()=>{
return (
<>
<div className="footer-top">
  <Footercard/>
  </div>





  <div className="footer-middle">
      <div className="list1">
          <h3>Policy Info</h3>
          <ul>
              <li><NavLink to="#">Privacy Policy</NavLink></li>
              <li><NavLink to="#">Terms of Sale</NavLink></li>
              <li><NavLink to="#">Terms of Use</NavLink></li>
              <li><NavLink to="#">Report Abuse & Takedown policy</NavLink></li>


          </ul>
      </div>

      <div className="list1">
          <h3>Company</h3>
          <ul>
          <li><NavLink to="#">About Us</NavLink></li>
          <li><NavLink to="#">Core Values</NavLink></li>
          <li><NavLink to="#">Careers</NavLink></li>
          <li><NavLink to="#">Blog</NavLink></li>
          <li><NavLink to="#">Sitemap</NavLink></li>





          </ul>
      </div>
      <div className="list1">
          <h3>Snapdeal business</h3>
          <ul>
          <li><NavLink to="#">Shopping App</NavLink></li>
          <li><NavLink to="#">Sell on Snapdeal</NavLink></li>
          <li><NavLink to="#">Advertise on Snapdeal</NavLink></li>
          <li><NavLink to="#">Media Enquiries</NavLink></li>
          <li><NavLink to="#">Be an Affiliate</NavLink></li>





          </ul>
      </div>
      <div className="list1">
          <h3>NEED help?</h3>
          <ul>
          <li><NavLink to="#">FAQ</NavLink></li>
          <li><NavLink to="#">Contact Us</NavLink></li>
          <li><NavLink to="#">Online-shopping</NavLink></li>



          </ul>
      </div>
      <div className="list1">
          <h3>Subscribe</h3>
          <div className="input">
              <input type="email" placeholder="Your email address"/>
              <input type="submit" value="SUBSCRIBE"/>
          </div>
          <p>Register now to get updates on promotions and coupons. <NavLink to="#">Or Download App</NavLink></p>
      </div>
  </div>
  <div className="footer-bottom">
     <div class="left-f">
         <h3>Payment</h3>
         <img src={tyui} alt="tyi"/>
         </div>
         <div class="right-f">
             <h3>Connect</h3>
             <img src={ghjk} alt="ghjk"/>
             </div> 
  </div>

</>

);



};
export default Footer;