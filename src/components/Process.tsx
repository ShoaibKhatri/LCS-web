/** @format */

import React from "react";
import { colors } from "../constants/theme";
import Stepper from "./Stepper";

import RightBg from "../assets/images/StepsRightBg.svg";
import LeftBg from "../assets/images/StepsLeftBg.svg";

const Process = () => {
  return (
    <section
      id='relume'
      className='lg:px-[13%] px-[6%] py-16 md:py-24 lg:py-28 relative'
    >
      <img
        src={RightBg}
        className='hidden lg:block opacity-25 absolute top-[400px] right-[0px]'
        alt=''
      />
      <img
        src={LeftBg}
        alt=''
        className='hidden lg:block opacity-35 absolute top-[400px] left-0'
      />
      <div className='container z-20'>
        <div className='mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20 '>
          <p
            className={`mb-3 font-semibold md:mb-4 `}
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Our Process
          </p>
          <h1 className='mb-5 mr-2 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl'>
            How we{" "}
            <span
              className={` ml-2 `}
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Work
            </span>
          </h1>
          <p className='md:text-sm '>
            At LCS, we believe in a transparent, collaborative process that
            ensures every project is tailored to your specific needs. From the
            initial consultation through development and launch, we ensure
            quality, speed and flexibility. And our commitment doesn’t end
            there—we provide ongoing support to help you thrive.
          </p>
        </div>
        <Stepper />
      </div>
    </section>
  );
};

export default Process;
