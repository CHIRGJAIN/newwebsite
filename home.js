import React from "react";
import Header from "../components/header";
//import SearchBar from "../components/searchbar";
// import Categories from "../components/categories";
import ExploreCategory from "../components/explorecategory";
import TrustedClients from "../components/aboutus";
import CustomerReviews from "../components/customerreviews";
import PosterSlider from "../components/postslider";  

function Home() {
  return (
    <div>
      <Header />
      <PosterSlider />
      {/* <Categories /> */}
      <ExploreCategory />
      <TrustedClients />
      <CustomerReviews />
    </div>
  );
}

export default Home;