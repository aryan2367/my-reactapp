import React from "react";
import Productcard from "./Productcard";
import 'bootstrap/dist/css/bootstrap.min.css';   
import Carousel from 'react-elastic-carousel'
import pro from  './pro.jpeg';
import ylow from  './ylow.jpeg';
import yhjo from  './yhjo.jpeg';
import yhji from  './yhji.jpg';
import yhjp from  './yhjp.jpg';
import yhja from  './yhja.jpeg';

// import Carousel from 'react-bootstrap/Carousel'  


const Product =() =>{
return(
<>
<div className="product-section">
<h3>Trending Products</h3>
<div className="inner-product-section">
<Carousel itemsToShow={4}>  


    <Productcard imgsrc={pro}/>
    
    <Productcard imgsrc={yhja}/>
    
    <Productcard imgsrc={yhjp}/>
    <Productcard imgsrc={yhji}/>
    <Productcard imgsrc={yhjo}/>

    <Productcard imgsrc={ylow}/>
    
    </Carousel>  

</div>

</div>



</>
);
};
export default Product;