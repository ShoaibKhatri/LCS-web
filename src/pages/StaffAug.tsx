import React from "react";
import { StaffAugHero } from "../components/StaffAugHero";
import { WhyChooseAug } from "../components/WhyChooseAug";
import { SeamlessHiring } from "../components/SeamlessHiring";
import { Navbar } from "../components/navbar";
import { StaffKeyFeatures } from "../components/StaffKeyFeatures";

const StaffAug = () => {
  return (
    <div>
      <Navbar />
      <StaffAugHero />
      <WhyChooseAug />
      <SeamlessHiring />
      <StaffKeyFeatures />
    </div>
  );
};

export default StaffAug;
