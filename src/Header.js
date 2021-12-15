import React from "react";
import { NavLink } from "react-router-dom";
import logo from  './logo.svg';
import desk from  './desk.png';

const Header =() =>{
return(
<>
<div className="nav-top">
<p>Brand waali Quality Bazar Waali Deal!</p>
<div className="nav-top-right">
    <ul>
        <li><NavLink to="#">Gift Cards</NavLink></li>
        <li><NavLink to="#">Help Center</NavLink></li>
        <li><NavLink to="#">Sell of Snapdeal</NavLink></li>
        <li><NavLink to="#"><img src={desk} alt="desk"/>Download App</NavLink></li>

    </ul>
</div>
</div>
<div className="nav-bottom">
    <div className="nav-left">
<NavLink to="#"><img src={logo} alt="Sanadeal" title="Snapdeal"/></NavLink>
<div className="input-holder">
    <input type="search" placeholder="Search Products & Brands"/>
    <input type="submit" value="Search"/>
    {/* <i className="fa fa-search"></i> */}
</div>
</div>
<div className="nav-right">
    <ul>
        <li><NavLink to="#">Cart <i class="fal fa-shopping-cart"></i></NavLink></li>
        <li><NavLink to="#">Sign In <i class="fas fa-user"></i></NavLink>
        
        <div className="submenu">
            <ul>
<li><NavLink to="#"><i className="far fa-user"></i> Your Account</NavLink></li>
<li><NavLink to="#"> <i className="fab fa-first-order-alt"></i>Your Orders</NavLink></li>
<li><NavLink to="#"><i className="far fa-heart"></i> Shortlist</NavLink></li>
<li><NavLink to="#"> <i className="far fa-heart"></i>Sd Cash</NavLink></li>

        </ul>
       <p> If you are a new user</p>
       <NavLink  to="#">Register</NavLink>
       <NavLink to="#" className="login">Login</NavLink>
        </div>
        
        </li>

    </ul>
</div>

</div>
<div className="nav-mobile">
    <div className="input-mobile">
<i className="fa fa-search"></i>

<input type="search" placeholder="Search for"/>
    </div>
    <NavLink to="#"><i className="fas fa-home"></i></NavLink>
    <NavLink to="#"><i className="fas fa-language"></i></NavLink>
    <NavLink to ="#"><i className="fal fa-shopping-cart"></i></NavLink>
</div>

</>


);

};
export default Header;