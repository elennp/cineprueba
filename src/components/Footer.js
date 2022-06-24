import React from "react";
import "./footer.css";


function Footer() {
    return(
        <div id="footer-widget-bar" className="widget">

        <div className="footerStyle">
          
 
          <div id="back-to-top-wrapped" className="bottomed">
          <div>
             <a href="#top" id="to-top-buttom" className="heading-font" title="BACK TO TOP">
               <svg xmls="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewbox="0 0 30.63 107.42" className="svg replaced-svg">
                 <line className="cls-1" x1="15.32" y1="94.97" x2="15.32" y2="26.83"></line>
                 <polyline className="cls-1" points="1 92.13 15.31 80.21 29.63 92.13"></polyline>
                 <polyline className="cls-1" points="1 99.28 15.32 87.36 29.63 99.28"></polyline>
                 <polyline className="cls-1" points="1 106.42 15.32 94.5 29.63 106.42"></polyline>
                 <polyline className="cls-1" points="1 77.84 15.32 65.92 29.63 77.84"></polyline>
                 <polyline className="cls-1" points="1 84.99 15.32 73.06 29.63 84.99"></polyline>
                 <path className="cls-2" d="M703,371.51l-10.39,29.1h20.79Zm0,25.08h-4.54L703,383.89V396.6Z" transform="translate(-687.64 -371.51)"></path>
               </svg>
             </a>
          </div>
          <div>
             <span className="caption">BACK TO TOP</span>
          </div>
         </div>  
 
 
 
 
         {/*principio de botones----------*/}
         <div className="container left-right">
           <section className="widget-area">
             <div className="widget">
               <div className="menu-footer-menu-container">
                 <ul id="menu-footer-menu" className="menu">
                   <li
                     id="menu-item-213"
                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-213"
                   >
                     <a href="#about">ABOUT</a>
                   </li>
                   <li
                     id="menu-item-214"
                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-214"
                   >
                     <a href="#services">SERVICES</a>
                   </li>
                   <li
                     id="menu-item-215"
                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-215"
                   >
                     <a href="#prices">PRICES</a>
                   </li>
                   <li
                     id="menu-item-216"
                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-216"
                   >
                     <a href="https://shaver.freevision.me/shop/">STORE</a>
                   </li>
                 </ul>
               </div>
             </div>
           </section>
           <section className="widget-area">
             <div className="widget">
               <div className="textwidget">
                 Telefono:  1123229687&nbsp; &nbsp; &nbsp; &nbsp;@ccs.estilos
               </div>
             </div>
           </section>
         </div>
 
 
 
 
         <div className="container">
           <section className="widget-area"></section>
         </div>
       </div>
 
 
 
 
       <div id="footer">
         <footer>
           <div className="container">
             <div id="footer-line-1">Copyright 2022 © BarberShop React CCS Estilos
             </div>
             <div id="footer-line-2">
               Design &amp; Development by 
               <a href="https://github.com/leandrogomez28/barbershop">BarberShop</a>
             </div>
             <div id="social-icons">
               <a href="http://www.facebook.com/#" target="_blank" className="bi bi-facebook">
                 <span className="tooltip symbol" title=""></span></a>
               <a href="http://www.twitter.com/#" target="_blank" className="bi bi-twitter">
                 <span className="tooltip symbol" title=""></span></a>
               <a href="http://instagram.com/#" target="_blank" className="bi bi-instagram">
                 <span className="tooltip symbol" title=""></span></a>
               <a href="http://www.vimeo.com/#" target="_blank" className="bi bi-vimeo">
                 <span className="tooltip symbol" title=""></span></a>
               <a href="http://www.linkedin.com/#" target="_blank" className="bi bi-linkedin">
                 <span className="tooltip symbol" title=""></span></a>
               <a href="http://pinterest.com/#" target="_blank" className="bi bi-pinterest">
                 <span className="tooltip symbol" title=""></span></a>
               <a href="mailto:#" target="_self" className="bi bi-envelope-fill">
                 <span className="tooltip symbol" title=""></span></a>
             </div>
           </div>
 
          
 
         </footer>
       </div>
     </div>
    );
}
export default Footer;