"use client";

import React from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useRef } from "react";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import { colors } from "../constants/theme";

type TimelineCircleProps = {
  backgroundColor: MotionStyle;
  className?: string;
};

type TimelineItem = {
  heading: string;
  title: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  timelineItems: TimelineItem[];
};

export type Timeline9Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HiringProcess = (props: Timeline9Props) => {
  const { description, timelineItems } = {
    ...Timeline9Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <h5
                className="mb-1 font-thin leading-6"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                STREAMLINED HIRING PROCESS
              </h5>
              <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
                Key Steps Of
                <span
                  className=" ml-2"
                  style={{
                    background: colors.themeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hiring Process
                </span>
              </h2>
              <p className="md:text-md text-gray-500">{description}</p>
            </div>
          </div>
          <div className="relative grid grid-cols-1 justify-items-center gap-12 md:gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
              {/* <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" /> */}
              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
              {/* <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" /> */}
            </div>
            <React.Fragment>
              {timelineItems.map((item, index) => (
                <TimelineItem key={index} index={index} item={item} />
              ))}
            </React.Fragment>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const circleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };

  return (
    <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
      {isEven ? (
        <React.Fragment>
          <div className="hidden w-full md:block" />
          <TimelineCircle ref={circleRef} backgroundColor={backgroundColor} />
          <TimelineContent item={item} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TimelineContent item={item} alignment="right" />
          <TimelineCircle
            ref={circleRef}
            backgroundColor={backgroundColor}
            className="order-first md:order-none"
          />
          <div className="hidden w-full md:block" />
        </React.Fragment>
      )}
    </div>
  );
};

const TimelineCircle = React.forwardRef<HTMLDivElement, TimelineCircleProps>(
  ({ backgroundColor, className }, ref) => (
    <div className={clsx("flex h-full w-8 justify-center", className)}>
      <motion.div
        ref={ref}
        style={backgroundColor}
        className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
      />
    </div>
  )
);

const TimelineContent = ({
  item,
  alignment = "left",
}: {
  item: TimelineItem;
  alignment?: "left" | "right";
}) => (
  <div
    className={clsx(
      "z-20 mt-4 flex w-full flex-col md:w-auto",
      alignment === "right" &&
        "items-start text-left md:items-end md:text-right"
    )}
  >
    <h3
      className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl"
      style={{
        background: colors.themeGradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {item.heading}
    </h3>
    <p className="text-gray-500 text-[16px]">{item.description}</p>
  </div>
);

export const Timeline9Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Follow our efficient, step-by-step process to quickly onboard the best talent and meet your project needs.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  timelineItems: [
    {
      heading: "Client Needs Assessment",
      title: "Short heading here",
      description:
        "We conduct a thorough analysis of your project requirements and technical needs, ensuring we understand every detail to deliver a tailored solution that aligns with your goals and expectations.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "Talent Search",
      title: "Short heading here",
      description:
        "We leverage our pre-screened database and AI-powered matching tools to identify the most qualified candidates, ensuring an optimal fit for your project needs and organizational culture.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "Candidate Screening",
      title: "Short heading here",
      description:
        "We perform thorough technical assessments and in-depth HR interviews to ensure candidates possess the required skills, experience, and cultural fit for your project and team.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      heading: "Client Interview",
      title: "Short heading here",
      description:
        "We present a carefully curated list of shortlisted candidates, providing detailed profiles to help you make an informed final selection based on your project requirements and team dynamics.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};
