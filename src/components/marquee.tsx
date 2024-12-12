/** @format */

import React from "react";
import Mendix from "../assets/images/mendix.svg";
import OutSystems from "../assets/images/outsystem.svg";
import PowerApps from "../assets/images/powerapps.svg";
import Appian from "../assets/images/appian_logo.svg";
import SalesForce from "../assets/images/salesforce.svg";
import BettyBlocks from "../assets/images/bettyBlocks.svg";
import BuildFire from "../assets/images/buildFire.svg";
import Nintex from "../assets/images/nintex.svg";
import Pega from "../assets/images/pega.svg";
import KissFlow from "../assets/images/kissFlow.svg";
import Wavemaker from "../assets/images/wavemaker.svg";
import Joget from "../assets/images/joget.svg";
import Quickbase from "../assets/images/quickbase.svg";
import Appmaker from "../assets/images/AppMaker.svg";
import Zoho from "../assets/images/Zoho.svg";
import Appypie from "../assets/images/AppyPie.svg";
import Kintone from "../assets/images/kintone.svg";
import Zudy from "../assets/images/zudy.svg";
import ServiceNow from "../assets/images/serviceNow.svg";
import Quixy from "../assets/images/quixy.svg";

const Marquee: React.FC = () => {
  const companies = [
    Mendix,
    OutSystems,
    PowerApps,
    Appian,
    SalesForce,
    BettyBlocks,
    BuildFire,
    Nintex,
    Pega,
    KissFlow,
    Wavemaker,
    Joget,
    Quickbase,
    Appmaker,
    Zoho,
    Appypie,
    Kintone,
    Zudy,
    ServiceNow,
    Quixy,
  ];

  return (
    <div className='w-full mb-6'>
      <h1 className='text-center text-2xl font-extrabold mb-6'>
        More Platforms
      </h1>

      <div className='relative overflow-hidden p-10 h-16 flex items-center'>
        {/* Left Blur */}
        <div className='absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10' />

        {/* Right Blur */}
        <div className='absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10' />

        {/* Marquee */}
        <div className='flex whitespace-nowrap animate-marquee'>
          {/* Duplicate companies multiple times to ensure continuous scrolling */}
          {companies.map((company, index) => (
            <img
              key={index}
              className='mx-6 w-auto h-12 object-contain'
              src={company}
              alt={`Company logo ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
