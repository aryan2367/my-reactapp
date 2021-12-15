import React from "react";
import { NavLink } from "react-router-dom";
 import banner from  './b1.jpg';
import map from  './map1.png';
import Product from "./Product";
import fgh from "./fgh.webp";
import beay from "./beay.webp";
import tyjk from "./tyjk.webp";
// import ghty from "./ghty.webp";
import gen from "./gen.webp";
import pbh from "./pbh.webp";
import san from "./san.jpg";

// import pro from  './pro.jpeg';
import Categories from "./Categories";
import 'bootstrap/dist/css/bootstrap.min.css';   

import Carousel from 'react-bootstrap/Carousel'  

const Rightbar =() =>{
return(
<>
<div className="banner">
    <div className="banner-topp">
    <div className="left-banner">
    <Carousel>  
    <Carousel.Item>  

<img src={banner} alt="banner" style={{'height':"330px"}}/>
</Carousel.Item >  
<Carousel.Item >  

<img src={san} alt="banner" style={{'height':"330px"}}/>
</Carousel.Item  >  

</Carousel>  

    </div>
    <div className="right-b">
        <div className="img1">
            <img src={map} alt="map"/>

        </div>
        <h5>Your Delivery Pincode</h5>
        <span></span>
        <p>Enter your pincode to check availability and faster delivery options</p>
        <input type="text" placeholder="Enter Pincode"/>
        <div class="button">
            <NavLink to="#">Submit</NavLink>
            <NavLink to="#">Next</NavLink>

        </div>
    </div>
    </div>
    <Product/>

</div>
<div className="cart-mobile">
<div className="cart1">
    <div className="inc1">
<img src={pbh} alt="pro"/>
</div>
<NavLink to="#">Popular</NavLink>
</div>

<div className="cart1">
<div className="inc1">

<img src={fgh} alt="pro"/>
</div>
<NavLink to="#">Men</NavLink>
</div>

<div className="cart1">
<div className="inc1">

<img src={gen} alt="pro"/>
</div>
<NavLink to="#">Women</NavLink>

</div>

<div className="cart1">
<div className="inc1">

<img src={tyjk} alt="pro"/>
 </div>
 <NavLink to="#">Kids</NavLink>

</div>
<div className="cart1">
<div className="inc1">

<img src={beay} alt="pro"/>
 </div>
 <NavLink to="#">Beauty </NavLink>

</div>

</div>
<div class="banner-mobile">
    <img src={banner} alt="b1"/>
</div>
<div className="top-section">
<h3>Top Categories</h3>
<div className="top-inner">
    <Categories/>
    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

</div>
</div>
<div className="social-bottom">

<div class="social1">
    <NavLink to="#"><i className="fas fa-home"></i></NavLink>
    <p>Home</p>
</div>
<div class="social1">
    <NavLink to="#"><i className="fas fa-search"></i></NavLink>
    <p>Search</p>
</div>
<div class="social1">
    <NavLink to="#"><i className="fas fa-heart"></i></NavLink>
    <p>Shorlist</p>
</div>
<div class="social1">
    <NavLink to="#"><i className="fas fa-user"></i></NavLink>
    <p>Profile</p>
</div>

    </div>
    <div class="banner-mobile">
    <img src={banner} alt="b1"/>
</div>
<div className="top-section">
<div className="top-inner">
    <Categories/>
    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

    <Categories/>

</div>
</div>

</>
);
};
export default Rightbar;
