import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Variety of choices to pick from our restaurant, customize your diet meal and we will prepare as per your choice.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lot of choices from menu, but we customize your meal on your order and as per your wish.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "We deliver you food using sites like Swiggy, Zomato, Blinkit e.t.c",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        You choose from our menu and tell us the customization based on your choices.
        We try our best to provide you the best quality meal with hygeine and airtight packed containers.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
