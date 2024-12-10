import React from "react";
import { Navbar } from "../components/navbar";
import { ServiceHero } from "../components/ServiceHero";
import { InnovativeSolutions } from "../components/InnovativeSolutions";
import Marquee from "../components/marquee";
import { PlatForms } from "../components/platforms";
import { IntegrationAutomation } from "../components/IntegrationAutomation";
import { ContactComponent } from "../components/contactComponent";
import { Footer } from "../components/Footer";
import { Partnering } from "../components/Partnering";
import { Industries } from "../components/industries";
import { QualityAnalyst } from "../components/QualityAnalyst";
import { DataAnalyst } from "../components/DataAnalyst";
import { FullStackDev } from "../components/FullStackDev";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <InnovativeSolutions />
      <PlatForms />
      <Marquee />
      <IntegrationAutomation />
      <FullStackDev />
      <Industries />
      <DataAnalyst />
      <QualityAnalyst />
      <Partnering />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Services;
