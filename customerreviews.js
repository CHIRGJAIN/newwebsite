import React, { useState } from "react";
import "../styles/CustomerReviews.css";

const reviews = [
  {
    text: "As a satisfied customer of A&S Computer , I want to share my positive experience with others. Their software as a service platform has greatly improved the efficiency and productivity of our business operations. The cloud-based solution is user-friendly and regularly updated to stay ahead of the technology curve.",
    name: "Savannah Nguyen",
    image: "/user1.png",
  },
  {
    text: "Amazing service and support! Their team is always available to help, and the product is outstanding.",
    name: "John Doe",
    image: "/user2.png",
  },
];

function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="customer-reviews">
      <h2>Customer Review</h2>
      <div className="review-card">
        <p className="review-text">"{reviews[currentIndex].text}"</p>
        <div className="review-footer">
          <img className="review-avatar" src={reviews[currentIndex].image} alt={reviews[currentIndex].name} />
          <h4 className="review-name">{reviews[currentIndex].name}</h4>
        </div>
        <div className="review-navigation">
          <button onClick={prevReview}>&lt;</button>
          <button onClick={nextReview}>&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;