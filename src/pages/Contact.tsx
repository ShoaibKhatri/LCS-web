import React from "react";
import { Navbar } from "../components/navbar";
import { ContactComponent } from "../components/contactComponent";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;
