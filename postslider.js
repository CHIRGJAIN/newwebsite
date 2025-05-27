import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Slider.css"; // Add custom styles

// Sample slides (replace with your actual images)
const slides = [
  { id: 1, img: require("../assets/slide4.png"), text: "SALE SALE SALE ", subtext: "Laptops are available for Office Use, Classrooms, Corporate Meetings, Events & Exhibition with low budgets." },
  { id: 2, img: require("../assets/slide5.png"), text: "LELO LELO LELO", subtext: "Get the best deals on high-performance laptops for business and gaming." },
  { id: 3, img: require("../assets/slide3.jpg"), text: "250/- 250/- 250/-", subtext: "Lightweight and portable laptops designed for professionals on the go." },
];

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img src={slide.img} alt="Slide" className="slide-image" />
              <div className="slide-content">
                <h2>{slide.text}</h2>
                <p>{slide.subtext}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;