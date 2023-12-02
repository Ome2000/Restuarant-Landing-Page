import React from "react";
import ProfilePic from "../Assets/gordon-ramsay-646367718a5f4.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Cool Instagram Bios For Personal Chefs. 
        You don't have to cook fancy or complicated masterpieces, just good food from fresh ingredients.
        I can create recipes that have the power to hit the soul. 
        A recipe has no life; we are able to bring life to each and every recipe.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Cool Instagram Bios For Personal Chefs. 
        You don't have to cook fancy or complicated masterpieces, just good food from fresh ingredients.
        I can create recipes that have the power to hit the soul. 
        A recipe has no life; we are able to bring life to each and every recipe.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Gordan Ramsay</h2>
      </div>
    </div>
  );
};

export default Testimonial;
