import React from 'react';
import "./section6.css";

import logo from "../../../commonResource/images/icons/logo__dcojfwkzna2q_large.png";
import card from "../../../commonResource/images/icons/tile__cauwwcyyn9hy_large.jpg";


import home from "../../../commonResource/images/home/new-ipad.jpg";

 function Section6() {
  return (
    <>
      
      <section className="row mb-2 mx-1">
      <div className="model54 col-md me-1 border-5 border-solid border -primery">
        <div className="model48 text-center">
          <img
            src={logo}
            alt="card"
          />
        </div>
        <div className="model49 text-center">Get up to 3% Daily Cash back</div>
        <div className="model50 text-center">with Every purchase.</div>

        <div className="model53 d-flex justify-content-center">
          <div className="model51"><a href="">Learn more</a></div>
          <div className="model52"><a href="">Apply now</a></div>
        </div>
      </div>
      
      <div className="model61 col-md ms-1 border-5 border-solid border -primery">
        <div className="model62 text-center me-n1">Apple for k-12</div>
        <div className="model63 text-center">products and resources desined</div>

        <div className="model64 text-center">
          to inspire learners and educators.
        </div>
        <div className="model65 text-center"><a href="">learn more</a></div>
      </div>
    </section>   
    </>
  )
}
export default Section6;