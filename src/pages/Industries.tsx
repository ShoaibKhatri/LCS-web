import React from "react";
import { Navbar } from "../components/navbar";
import { IndustryHero } from "../components/IndustryHero";
import { IndustriesWeServe } from "../components/IndustriesWeServe";
import { Partnering } from "../components/Partnering";
import { ContactComponent } from "../components/contactComponent";
import { Footer } from "../components/Footer";

const Industries = () => {
  return (
    <div>
      <Navbar />
      <IndustryHero />
      <IndustriesWeServe />
      <Partnering />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Industries;
