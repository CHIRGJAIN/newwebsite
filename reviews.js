import React, { useState } from "react";
import "../styles/Reviews.css";
import user1 from "../assets/user1.jpg";
const user1Image = user1;

const reviews = [
  { name: "John Doe", text: "Great service and quality!",image:{user1Image}},
  { name: "Jane Smith", text: "Fast delivery and amazing products!" },
  { name: "Alex Brown", text: "Highly recommended for tech enthusiasts!" },
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section className="reviews">
      <h2>Customer Reviews</h2>
      <div className="review-box">
        <p>{reviews[currentIndex].text}</p>
        <h4>- {reviews[currentIndex].name}</h4>
      </div>
      <button onClick={nextReview}>Next Review</button>
    </section>
  );
}

export default Reviews;

