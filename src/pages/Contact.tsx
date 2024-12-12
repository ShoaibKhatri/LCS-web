/** @format */

import React from "react";
import { Navbar } from "../components/navbar";
import { ContactComponent } from "../components/contactComponent";
import { Footer } from "../components/Footer";
import AboutUsHeader from "../components/ContactHeader";
import contactBgImg from "../assets/images/5.svg";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <AboutUsHeader title='aboutus' backgroundImage={contactBgImg} />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Contact;
