import React from "react";
import { Navbar } from "../components/navbar";
import { useLocation } from "react-router-dom";

const Project = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Project;
