/** @format */

import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import PlaceholderImage from "../assets/images/PlaceholderImage.svg";
import { colors } from "../constants/theme";
import viewMore from "../assets/images/viewMore.svg";
import { useNavigate } from "react-router-dom";
import Vector1 from "../assets/images/industriesV1.svg";
import Vector2 from "../assets/images/industriesV2.svg";
import Vector3 from "../assets/images/industriesV3.svg";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSection[];
};

export type Layout396Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Industries = (props: Layout396Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout396Defaults,
    ...props,
  } as Props;

  const [visibleCount, setVisibleCount] = useState(8); // Initially show 8 cards
  const navigate = useNavigate();

  const { data } = useFetch<any>("/portfoliopage/industries/");

  console.log(data);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more cards
  };

  const isAllVisible = visibleCount >= featureSections.length; // Check if all cards are visible

  return (
    <section
      id="relume"
      className="relative px-[5%] py-16 md:py-24 lg:py-28"
      style={{
        background: colors.themeGradient,
      }}
    >
      <img
        src={Vector1}
        className="lg:block hidden absolute left-[-100px] top-[10%] opacity-30 "
        alt=""
      />
      <img
        src={Vector3}
        className="lg:block hidden absolute left-[60%] bottom-0 opacity-20 "
        alt=""
      />
      <img
        src={Vector2}
        className="lg:block hidden absolute right-0 top-0 opacity-20 size-1/4 "
        alt=""
      />
      <div className="container flex flex-col items-center">
        <div className="mx-4 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 text-[16px] leading-4 font-semibold md:mb-4 text-blue-200">
            {tagline}
          </p>
          <h1 className="mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl text-blue-50 lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-[16px] leading-6 text-blue-200">
            {description}
          </p>
        </div>
        <div className="grid auto-cols-fr items-start grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4">
          {/* Render only visible cards */}
          {data?.slice(0, visibleCount).map((feature: any, index: number) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
        {!isAllVisible && data?.length > 0 && (
          <div className="mt-8 text-center ">
            <Button
              className="text-blue-50 p-3 bg-transparent border border-blue-50 rounded-xl"
              onClick={handleViewMore}
            >
              View More
              <img
                src={viewMore}
                className="size-5 ml-2 inline-block "
                alt=""
              />
            </Button>
          </div>
        )}
        {isAllVisible && (
          <div className="mt-8 text-center ">
            <Button
              onClick={() => navigate("/industries")}
              className="text-blue-50 p-3 bg-transparent border border-blue-50 rounded-xl"
            >
              View All
              <img
                src={viewMore}
                className="size-5 inline-block ml-2 -rotate-90"
                alt=""
              />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

const FeatureSection = (featureSection: any) => (
  <div className="flex flex-col  justify-center bg-transparent p-6 md:p-8">
    <div>
      <div className="rb-5 mb-5 md:mb-6">
        <img
          src={`https://aliasgarkachwala.pythonanywhere.com/${featureSection?.image}`}
          className="w-full rounded-md"
          alt=""
        />
      </div>
      <h2 className="mb-3 text-xl text-blue-50 font-bold md:mb-4 md:text-xl md:leading-[1.3] lg:text-xl">
        {featureSection?.name}
      </h2>
      <p className="text-blue-200 text-[16px] line-clamp-2 md:line-clamp-3">
        {featureSection?.description}
      </p>
    </div>
    <div className="mt-5 md:mt-6 text-blue-50">
      <Link to="/industries">
        <Button
          className="text-blue-50"
          variant="link"
          size="link"
          iconRight={<RxChevronRight />}
        >
          Learn more
        </Button>
      </Link>
    </div>
  </div>
);

export const Layout396Defaults: Layout396Props = {
  tagline: "Industries We Serve",
  heading: "Industries We Aim to Transform",
  description:
    "Our expertise spans a wide range of industries. Whether you’re in healthcare, retail, education or beyond, LCS understands your challenges and delivers innovative digital solutions to accelerate growth, streamline operations and improve efficiency.",
  featureSections: [
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Retail & eCommerce",
      description:
        "Enhance your customer experience with intuitive, scalable and personalized digital retail solutions.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Healthcare",
      description:
        "Empowering healthcare providers with efficient, secure and patient-centric digital solutions for better care.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Education & eLearning",
      description:
        "Deliver impactful learning experiences with tailored solutions for digital education and seamless student engagement.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Construction & Real Estate",
      description:
        "Manage projects efficiently and grow your business with custom solutions for real estate and construction.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Smart Manufacturing",
      description:
        "Enhance efficiency and productivity with robust, scalable solutions tailored for modern manufacturing.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Technology",
      description:
        "Deliver next-gen tech solutions that drive innovation and elevate your business in a dynamic landscape.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Sports & Fitness",
      description:
        "Engage users with modern, customized digital platforms that support fitness, health and wellness goals.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Hotel & Restaurants",
      description:
        "Elevate guest experiences with seamless, tech-driven solutions for hotels and restaurants.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Non-Profit & NGOs",
      description:
        "Maximize your impact with streamlined operations and community-focused digital solutions for non-profits.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Agriculture",
      description:
        "Boost agricultural productivity and sustainability with smart, data-driven digital tools for farming.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PlaceholderImage,
        alt: "Placeholder",
      },
      heading: "Travel & Hospitality",
      description:
        "Enhance traveler engagement and streamline operations with cutting-edge solutions for travel and hospitality.",
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
