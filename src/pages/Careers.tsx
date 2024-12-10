import React from "react";
import { Navbar } from "../components/navbar";
import { AboutHero } from "../components/AboutHero";
import { JobOpenings } from "../components/JobOpenings";
import { Culture } from "../components/Culture";
import { ContactComponent } from "../components/contactComponent";
import { Footer } from "../components/Footer";

const Careers = () => {
  const AboutProps = {
    title: "JOIN US NOW",
    title1: "Unlock your potential",
    title1Gradient: "With us",
    description:
      "Looking for driven, creative & ambitious individuals to help shape the future of low-code & no-code solutions. Join us as we grow, innovate & make an impact.",
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
      <JobOpenings />
      <Culture />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Careers;
