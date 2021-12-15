import React from "react";
import { NavLink } from "react-router-dom";
import di from  './di.png';
import mo from  './mo.png';
import ca from  './ca.png';
import ha from  './ha.jpg';
import blockbu from'./blockbu.jpg';

const Sidesection =() =>{
return(
<>
<div className="left-side">
<h3>Top Categories</h3>
<ul>
    <li><span><img src={di} alt="di"/></span><NavLink to="#">All Offers</NavLink>
    <div className="right-submenu">
        <div class="inner-s">
            <h3>Autumn / winter special</h3>
        <ul>
            <li><NavLink to="#">Air Purifier</NavLink></li>
            <li><NavLink to="#">Geysers</NavLink></li>
            <li><NavLink to="#">Socks</NavLink></li>
            <li><NavLink to="#">Air Freshners</NavLink></li>
            <li><NavLink to="#">Blanket & Comforters</NavLink></li>
            <li><NavLink to="#">Cofee & Tea Makers</NavLink></li>
            <li><NavLink to="#">Hair & Dryer</NavLink></li>
            <li><NavLink to="#">Air Conditioners</NavLink></li>
           
        </ul>
        <h3>Festive Decor Lighting</h3>
        <ul>
            <li><NavLink to="#">Decorative Lighting</NavLink></li>
            <li><NavLink to="#">Diyas</NavLink></li>
            </ul>
            <h3>Sesonal Care</h3>

            <ul>
            <li><NavLink to="#">Skin Moisturizers</NavLink></li>

            <li><NavLink to="#">Face Wash Cleaner</NavLink></li>
            <li><NavLink to="#">Body Lotions</NavLink></li>
            <li><NavLink to="#">Shampoos</NavLink></li>
            <li><NavLink to="#">Lip Balms</NavLink></li>
            <li><NavLink to="#">Deodorants</NavLink></li>
           
        </ul>
</div>
<div class="inner-s">
            <h3>Men's fashion</h3>
        <ul>
            <li><NavLink to="#">Full Sleeve Tees</NavLink></li>
            <li><NavLink to="#">Shirts</NavLink></li>
            <li><NavLink to="#">Kurtas pyjama sets</NavLink></li>
            <li><NavLink to="#">Casual Shoes</NavLink></li>
            <li><NavLink to="#">Watches</NavLink></li>
                       
        </ul>
        <h3>Women's Fashion</h3>
        <ul>
            <li><NavLink to="#">Dressess</NavLink></li>
            <li><NavLink to="#">Silk Sarees</NavLink></li>
            <li><NavLink to="#">Fragrance</NavLink></li>
            <li><NavLink to="#">Fashion Jewellery</NavLink></li>
            <li><NavLink to="#">Inner wear & Sleep Wear</NavLink></li>
            <li><NavLink to="#">Hills</NavLink></li>




            </ul>
            <h3>Kid's Fashion</h3>

            <ul>
            <li><NavLink to="#">Boy's Kurta Pyjama</NavLink></li>

            <li><NavLink to="#">Girls Lehnga cholis</NavLink></li>
            <li><NavLink to="#">Top & Bottom Sets</NavLink></li>
            <li><NavLink to="#">Ethnic Gown</NavLink></li>
            
        </ul>
</div>
<div class="inner-s">
            <h3>Featured Stores</h3>
        <ul>
            <li><NavLink to="#">Religious Stores</NavLink></li>
            <li><NavLink to="#">Gadget Stores</NavLink></li>
            <li><NavLink to="#">Wedding Starts</NavLink></li>
            <li><NavLink to="#">Dey fruits Stores</NavLink></li>
                       
        </ul>
        <h3>Top Brands</h3>
        <ul>
            <li><NavLink to="#">Mufti</NavLink></li>
            <li><NavLink to="#">Pepe Jeans</NavLink></li>
            <li><NavLink to="#">Prestige</NavLink></li>
            <li><NavLink to="#">Duke</NavLink></li>
            <li><NavLink to="#">Croces</NavLink></li>
            <li><NavLink to="#">Nautica</NavLink></li>


        <li><NavLink to="#">Cello</NavLink></li>

            <li><NavLink to="#">CatWalks</NavLink></li>
            <li><NavLink to="#">Oppo</NavLink></li>
            <li><NavLink to="#">Fastrack</NavLink></li>
            <li><NavLink to="#">boat</NavLink></li>

        </ul>
</div>
<div className="inner-s">
<img src={blockbu} alt="blockbuster"/>
    </div>
    </div>
    
    </li>
    <li><span><img src={mo} alt="mo"/></span><NavLink to="#">Mobile & Tablets</NavLink></li>
    <li><span><img src={ca} alt="ci"/></span><NavLink to="#">Electronics</NavLink></li>
    <li><span><img src={ca} alt="di"/></span><NavLink to="#">Computers & Gaming</NavLink></li>
    <li><span><img src={ha} alt="di"/></span><NavLink to="#">Home & Kitchen</NavLink></li>
    
</ul>
<h3>More Categories</h3>
<ul className="categories">
    <li><NavLink to="#">Men's Fashion</NavLink></li>
    <li><NavLink to="#">Women's Fashion</NavLink></li>
    <li><NavLink to="#">Toys, Kids Fashion & more</NavLink></li>
    <li><NavLink to="#">Beauty, Health & Daily Needs</NavLink></li>
    <li><NavLink to="#">Support, Fitness & Outdoor</NavLink></li>
    <li><NavLink to="#">Support, Fitness & Outdoor</NavLink></li>
    <li><NavLink to="#">Car & Motorbike</NavLink></li>
    <li><NavLink to="#">Hobbies</NavLink></li>
    <li><NavLink to="#">Books, Media & Music</NavLink></li>
    <li><NavLink to="#">See All Categories</NavLink></li>


</ul>
<h3>Trending Searches</h3>
<ul className="trending">
<li><NavLink to="#"><i className="fas fa-search"></i>Frock Women</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-search"></i>Mens Shoe</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-search"></i>Tshirt 38 Men Low Price</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-search"></i>Fancy Saree</NavLink></li>
    <li><NavLink to="#"><i className="fas fa-search"></i>Eaebuds</NavLink></li>

 
</ul>
</div>
</>
);
};
export default Sidesection;
