import React from "react";
import { StaffAugHero } from "../components/StaffAugHero";
import { WhyChooseAug } from "../components/WhyChooseAug";
import { SeamlessHiring } from "../components/SeamlessHiring";
import { Navbar } from "../components/navbar";
import { StaffKeyFeatures } from "../components/StaffKeyFeatures";
import { StaffIndustries } from "../components/StaffIndustries";
import { StaffTechStack } from "../components/StaffTechStack";
import { HiringProcess } from "../components/HiringProcess";
import { StaffTable } from "../components/StaffTable";
import { Support } from "../components/Support";
import { StaffSuccess } from "../components/StaffSuccess";
import { ContactComponent } from "../components/contactComponent";
import { Footer } from "../components/Footer";

const StaffAug = () => {
  return (
    <div>
      <Navbar />
      <StaffAugHero />
      <WhyChooseAug />
      <SeamlessHiring />
      <StaffKeyFeatures />
      <StaffIndustries />
      <StaffTechStack />
      <HiringProcess />
      <StaffTable />
      <Support />
      <StaffSuccess />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default StaffAug;
