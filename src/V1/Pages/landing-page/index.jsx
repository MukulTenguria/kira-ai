import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/banner";
import PlatformIndustry from "./components/PlatformIndustry";
import InsightInnovation from "./components/InsightInnovation";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <PlatformIndustry/>
      <InsightInnovation/>
    </>
  );
};

export default LandingPage;
