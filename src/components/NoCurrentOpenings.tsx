import React from "react";
import { colors } from "../constants/theme";

const NoCurrentOpenings = () => {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container ">
        <div className="text-center">
          <p
            className="mb-3 text-[16px] leading-4 font-semibold md:mb-4 "
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CURRENT OPENINGS
          </p>
          <h1 className="mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl text-center">
            Opportunities Coming Soon,
            <span
              className="ml-3"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stay Connected!
            </span>
          </h1>
          <p className="md:text-md text-gray-500">
            We're not actively hiring at the moment, but we're always open to
            connecting with talented professionals. Submit your resume and we’ll
            reach out if a relevant opportunity arises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoCurrentOpenings;
