/** @format */

import React from "react";
import { Navbar } from "../components/navbar";
import { AboutHero } from "../components/AboutHero";
import { AboutMission } from "../components/AboutMission";
import { AboutTeam } from "../components/AboutTeam";
import { Partnering } from "../components/Partnering";
import { ContactComponent } from "../components/contactComponent";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";

const About = () => {
  const AboutProps = {
    title: "Who we are",
    title1: "Empowering",
    title1Gradient: "Business",
    title2: "Through",
    title2Gradient: "Technology",
    description:
      "At LCS, our goal is to simplify complex challenges through innovative, low-code and no-code solutions that deliver real results. We’re a dedicated team of tech experts, strategists and creators focused on transforming your ideas into impactful digital solutions. Our commitment to excellence drives us to continuously innovate, adapt and deliver exceptional service across industries.",
    buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
    firstImage: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-dim.png",
      alt: "Relume placeholder image 1",
    },
    secondImage: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    thirdImage: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape-dim.png",
      alt: "Relume placeholder image 3",
    },
  };
  return (
    <div>
      <Navbar />
      <AboutHero {...AboutProps} />
      <AboutMission />
      <AboutTeam />
      <Gallery />
      <Partnering />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default About;
