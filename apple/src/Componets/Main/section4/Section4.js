import React from 'react';
import "./section4.css";

 import promo from "../../../commonResource/images/icons/promo_bhm__d8b9z5rlwjgy_large.jpg";

import PromoTimo from "../../../commonResource/images/icons/promo_timothee_chalamet__ci3sco7rkmoi_large.jpg";
import logo from "../../../commonResource/images/icons/logo_light__cfvl40z2nzau_large.png";
 
 function Section4() {
  return (
    <>
      <section className="model90 row ms-2 me-2 mx-1">
      <div className="model27 col-md  px-1 -ms-grid-column-align">
        <div className="model21 text-center">Creativity and</div>
        <div className="model22 text-center">Community,</div>
        <div className="model23 text-center">Woven together</div>
        <div className="model24 text-center">Explore the new Black Unity watch</div>
        <div className="model26 text-center">band and matching face.</div>
    
        <div className="d-flex justify-content-center">
          <div className="model28"><a href="#">Learn more</a></div>
          <div className="model29"><a href="#">Buy</a></div>
        </div>
      </div>

  
      <div class="model35 col-md ms-1 px-1">
        <div className="model36 ">
          <img
            src={logo}
            alt=" apple icon"
            className="model36"
          />
        </div>

        <div className="model30 text-center">Almost all the biggest stars</div>
        <div className="model31 text-center">in Hollywood.Almost.</div>

        
        <div className="model34 d-flex justify-content-center">
          <div className="model32"><a href="#">Watch now</a></div>
          <div className="model33">
            <a href="#">Try Apple TV+free</a> <sup>1</sup>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Section4;