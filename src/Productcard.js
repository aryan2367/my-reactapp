import React from "react";
import { NavLink } from "react-router-dom";

 const Productcard =(props) =>{
    return(
    <>
 <div className="product1">
        <div className="p-img">
           <NavLink to="#"> <img src={props.imgsrc} alt="product"/></NavLink>
           <i class="far fa-heart"></i>     
              </div>
        <p><NavLink to="#">Veirdo 100 Percent Cotton Green Color Block T-Shirt</NavLink></p>
        <div className="rating">
        <i className="fas fa-star checked"></i>
        <i className="fas fa-star checked"></i>
        <i className="fas fa-star checked"></i>
        <i className="fas fa-star checked"></i>
        <i className="fas fa-star"></i>

        </div>
        <span className="prg">Rs 999</span>
        <span className="mrp">Rs 129</span>
        <span className="product-d">87% OFF</span>
    </div>
   
    </>
);
};    
export default Productcard;