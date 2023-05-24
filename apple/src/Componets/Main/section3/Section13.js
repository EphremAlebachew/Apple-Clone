import React from 'react'
import "./section3.css"
import hero from "../../../commonResource/images/home/hero_homepod__fnwfsi8ride2_largetall.jpg";
import apple from "../../../commonResource/images/icons/promo_logo_apple_watch_series_8__ee6riplsucuq_large.png";
 function Section13() {
  return (
    <div>
      <section className="row ">
      <div className="model60 col-md  px-1  ">
        <div className="model15">
          <div className="model11 text-center pt-3">Homepod</div>
          <div className="model12 text-center">Profond sound.</div>
          <div className="d-flex justify-content-center">
            <div className="model13"><a href="#">Learn more</a></div>
            <div className="model14"><a href="#">Buy</a></div>
          </div>
        </div>
      </div>
      <div className="model20 col-md mb-1 px-1 ">
        <div className=""><img src="" alt="" /></div>
        <div className="model16 text-center">
          <img
            src={apple}
            alt="logo"
          />
        </div>
        <div className="model17 text-center">A healthy leap ahead.</div>
        <div className="model21 d-flex justify-content-center">
          <div className="model18"><a href="#">Learn more</a></div>
          <div className="model19"><a href="#">Buy</a></div>
        </div>
        
      </div>
    </section>
          
    </div>
  )
}
export default Section13;