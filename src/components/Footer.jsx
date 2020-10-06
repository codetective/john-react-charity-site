import React from "react";
import fb from "../img/facebook.svg";
import tw from "../img/twitter.svg";
import mail from "../img/mail.svg";
import phone from "../img/old-telephone-ringing.svg";
import {Link, useLocation} from 'react-router-dom'

function Footer() {
  let location = useLocation()
 
 if (
   location.pathname === "/" ||
   location.pathname === "/board" ||
   location.pathname === "/history" ||
   location.pathname === "/statements" ||
   location.pathname === "/founderbio" ||
   location.pathname === "/bye-laws" ||
   location.pathname === "/education" ||
   location.pathname === "/donate"
 ) {
   return (
     <footer className="bg-dark text-white py-3">
       <div className="container">
         <div className="row">
           <div className="col-lg-6 col-md-6 mb-2">
             <div className="footer-content px-3">
               <small className="footer-title">
                 The James Udoekong Foundation
                 <br /> &copy; 2020
               </small>
               <br />
               <small className="text-uppercase font-weight-bold mb-2">
                 Get Involved
               </small>
               <small className="text-white">
                 <Link to="/donate" className="mr-2 d-flex">
                   <h5>Donate</h5>
                 </Link>
               </small>
               <small className="text-white">
                 <Link to="History" className="mr-2 d-flex">
                   <h5>Learn Our History</h5>
                 </Link>
               </small>
               <small className="text-white">
                 <Link to="/board" className="mr-2 d-flex">
                   <h5>Board of Trustees</h5>
                 </Link>
               </small>
               <small className="text-white">
                 <Link to="/gallery" className="mr-2 d-flex">
                   <h5>Gallery</h5>
                 </Link>
               </small>
             </div>
           </div>

           <div className="col-lg-6 col-md-6 mb-2">
             <div className="footer-content px-3">
               <small className="text-uppercase font-weight-bold mb-2">
                 contact us
               </small>
               <small className="text-white">
                 <a
                   href="https://www.facebook.com/James-Udoekong-Education-Trust-Fund-117624183436700/"
                   className="mr-2 my-2 d-flex"
                 >
                   <img src={fb} alt="" className="mr-2" />
                   <h5>Facebook Link</h5>
                 </a>
               </small>
               <small className="text-white">
                 <a href="#1" className="mr-2 my-2 d-flex">
                   <img src={tw} alt="" className="mr-2" />
                   <h5>Twitter Link</h5>
                 </a>
               </small>
               <small className="text-white">
                 <a
                   href="mailto:info@jamesudoekongtrustfund.org"
                   className="mr-2 d-flex"
                 >
                   <img src={mail} alt="" className="mr-2" />
                   <h5>info@jamesudoekongtrustfund.org</h5>
                 </a>
               </small>

               <small className="text-white">
                 <a href="#1" className="mr-2 my-2 d-flex">
                   <img src={phone} alt="" className="mr-2" />
                   <h5>+234 803 402 3476</h5>
                 </a>
               </small>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 }
  return ''
}

export default Footer;
