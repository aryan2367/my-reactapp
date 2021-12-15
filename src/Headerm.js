import React from "react";
import { NavLink } from "react-router-dom";
const  Headerm = () =>{
return(
<>
<div className="nav-mobile">
    <div className="input-mobile">
<input type="search" placeholder="Search for"/>
<i className=" fa fa-search"></i>
    </div>
    <NavLink href="#"><i className="fas fa-home"></i></NavLink>
    <NavLink href="#"><i className="fas fa-language"></i></NavLink>
</div>

</>



);


};
export default Headerm;