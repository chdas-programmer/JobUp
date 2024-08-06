import React from "react";
import { useContext } from "react";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import Banner from "./Banner/Banner";
import Popup from "./Popup/Popup";
import Testimonials from "./Testimonials/Testimonials"
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import TopProducts from "./TopProducts/TopProducts";


const Home = () => {
  const { isAuthorized } = useContext(Context);
  // if (!isAuthorized) {
  //   return <Navigate to={"/login"} />;
  // }
  return (
    <>
      <section className="homePage page">

        
       <Navbar />
        <HeroSection />

        <HowItWorks />
        <Banner/>
        <Popup/>
        <Testimonials/>
        {/* <TopProducts/> */}
        <PopularCategories />
        <PopularCompanies />
        <Footer />
      </section>
    </>
  );
};

export default Home;
