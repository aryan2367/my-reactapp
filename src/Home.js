import React from  "react";
import Header from "./Header";
import Sidesection from "./Sidesection";
import Rightbar from "./Rightsection";
import Footer from "./Footer";
import Productcard from "./Productcard";
import pro from  './pro.jpeg';
import ylow from  './ylow.jpeg';
import yhjo from  './yhjo.jpeg';
import yhji from  './yhji.jpg';
import yhjp from  './yhjp.jpg';
import yhja from  './yhja.jpeg';
import $ from 'jquery';
// import { NavLink } from "react-router-dom";

    $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
        $('.goToTop').fadeIn(); 
      } 
      else { 
        $('.goToTop').fadeOut(); 
      } 
    }); 
    $('.goToTop').click(function(){ 
        $('body').animate({scrollTop : 0},700); 
        
    });


const Home = ()=>{

    return(
        <>
    <Header/>
   
    <div className="section-header">
<Sidesection/>
<Rightbar/>



    </div>
    <div className="product-section product-section1">

<div className="inner-product-section">
<Productcard imgsrc={pro}/>
    
    <Productcard imgsrc={yhja}/>
    
    <Productcard imgsrc={yhjp}/>
    <Productcard imgsrc={yhji}/>
    <Productcard imgsrc={yhjo}/>

    <Productcard imgsrc={ylow}/>
    <Productcard imgsrc={yhja}/>
    
    <Productcard imgsrc={yhjp}/>
    <Productcard imgsrc={yhjo}/>

<Productcard imgsrc={ylow}/>

</div>

</div>
<div className="goToTop"><i class="fas fa-angle-up"></i></div>
    <Footer/>
   
    </>
    );
}
export default Home;