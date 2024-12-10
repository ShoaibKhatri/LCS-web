import React from "react";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/heroSection";
import { ChooseUs } from "../components/chooseUs";
import { PlatForms } from "../components/platforms";
import Marquee from "../components/marquee";
import { Industries } from "../components/industries";
import Process from "../components/Process";
import { Testimonials } from "../components/Testimonials";
import { Partnering } from "../components/Partnering";
import { ContactComponent } from "../components/contactComponent";
import { Footer } from "../components/Footer";
import { Layout415 } from "../components/layout415";

const home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <Expertise /> */}
      <Layout415 />
      <ChooseUs />
      <PlatForms />
      <Marquee />
      <Industries />
      <Process />
      <Testimonials />
      <Partnering />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default home;
