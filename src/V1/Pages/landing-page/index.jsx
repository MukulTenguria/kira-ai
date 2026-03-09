import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/banner";
import PlatformIndustry from "./components/PlatformIndustry";
import InsightInnovation from "./components/InsightInnovation";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <PlatformIndustry />
      <InsightInnovation />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;
