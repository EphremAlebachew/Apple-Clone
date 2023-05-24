import React from 'react';
import "./section5.css"

import icons from "../../../commonResource/images/icons/promo_logo_fitness_plus_iphone__dpayetemakq6_large.png";

import valantine from "../../../commonResource/images/icons/promo_valentines_day_2023__duffhlmdxcqe_large.jpg";

 import promo from "../../../commonResource/images/icons/promo-apple-fitness-plus-iphone__bzeal882mv7m_large.jpg";

 function Section5() {
  return (
      <>
          <section
      className="row mb-2 me-2 ms-2 mx-1 border-2 border-solid border -primery mt-2"
    >
      <div className="model40 col-md me-1">
        <div className="model37 text-center">Valentine's Day</div>

        <div className="model38 text-center">Sealed with a gift.</div>
        <div className="model39 text-center"><a href="">shop now</a></div>
      </div>
     
      <div className="model46 col-md ms-1 border-5 border-solid border -primery">
        <div className="model41 text-center">
          <img
            src={icons}
            alt="apple"
          />
        </div>
        <div className="model42 text-center">Welcome to the year of you.</div>
        <div className="model43 text-center">Now all you need is iPhone .</div>

        <div className="model47 d-flex text-center justify-content-center">
          <div className="model44"><a href="">Learn more</a></div>
          <div className="model45"><a href="">Try it free</a> <sup>2</sup></div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Section5;