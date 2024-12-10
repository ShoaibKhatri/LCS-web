import React from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import Binoculars from "../assets/images/Binoculars.svg";
import PencilRuler from "../assets/images/PencilRuler.svg";
import Code from "../assets/images/Code.svg";
import ListChecks from "../assets/images/ListChecks.svg";
import RocketLaunch from "../assets/images/RocketLaunch.svg";
import { colors } from "../constants/theme";
import Arrow from "../assets/images/arrowWhite.svg";
import SecondaryButton from "../components/secondaryBtn";
import PrimaryBtn from "../components/primaryBtn";

type TimelineItem = {
  date: string;
  description: string;
  img: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  timelineItems: TimelineItem[];
};

export type Timeline20Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ProcessTimeline = (props: Timeline20Props) => {
  const { description, timelineItems } = {
    ...Timeline20Defaults,
    ...props,
  } as Props;

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full  text-center ">
            <h5
              className="mb-1 font-thin text-center"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Process
            </h5>

            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl text-center">
              How We Achieve
              <span
                className="ml-3"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Results
              </span>
            </h1>
            <p className="md:text-md text-center">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8 items-center justify-center">
              <PrimaryBtn variant="primary">
                Get Started
                <img src={Arrow} className="inline-block ml-2 " alt="" />
              </PrimaryBtn>
              <SecondaryButton
                color="blue"
                variant="transparent"
                sx={{
                  color: colors.blue500,
                  border: `1px solid ${colors.blue500}`,
                }}
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-normal">
          <div className="relative hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="flex flex-col items-center md:w-full md:flex-row">
              <div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
            </div>
          </div>
          <React.Fragment>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                index={index}
                isLastItem={index === timelineItems.length - 1}
                {...item}
              />
            ))}
          </React.Fragment>
          <div className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white" />
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  date,
  description,
  img,
  index,
  isLastItem,
}: {
  date: string;
  description: string;
  img: string;
  index: number;
  isLastItem: boolean;
}) => {
  const isEven = index % 2 === 0;

  const ContentComponent = ({ className }: { className?: string }) => (
    <React.Fragment>
      <div
        className={clsx(
          "mb-8 flex flex-col md:text-center md:items-center md:mb-0 md:mr-4",
          className
        )}
      >
        <h3 className="mb-2 text-xl font-semibold md:text-xl">{date}</h3>
        <p className="text-[14px] text-gray-600">{description}</p>
      </div>
    </React.Fragment>
  );

  const LineComponent = () => (
    <div className="flex flex-col items-center md:w-full md:flex-row">
      <div
        className={clsx(
          "h-full w-[3px] bg-gray-200 md:h-[3px] md:w-full md:block",
          {
            "hidden md:block": isLastItem,
          }
        )}
      />
      <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-blue-500 shadow-[0_0_0_8px_white]" />
      <div
        className={clsx(
          "h-full w-[3px] bg-gray-200 md:h-[3px] md:w-full md:block",
          {
            "hidden md:block": isLastItem,
          }
        )}
      />
    </div>
  );

  const SvgComponent = () => (
    <div className="md:flex items-center justify-center hidden ">
      <img className="size-12" src={img} alt="" />
    </div>
  );

  return (
    <div className="relative grid auto-cols-fr grid-cols-[max-content_1fr] gap-4 md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr]">
      {isEven ? (
        <React.Fragment>
          {/* <div className="hidden md:block" /> */}
          <SvgComponent />
          <LineComponent />
          <ContentComponent />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <SvgComponent />
          <LineComponent />
          <ContentComponent className="order-last md:order-none" />
        </React.Fragment>
      )}
    </div>
  );
};

export const Timeline20Defaults: Timeline20Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Our success lies in our process. Discover how we work closely with clients to create solutions that deliver value and results.",
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
      date: "Discovery",
      description:
        "In-depth client consultation to understand requirements and goals.",
      img: Binoculars,
    },
    {
      date: "Design",
      description:
        "Creating wireframes and UI/UX designs tailored to the client’s needs.",
      img: PencilRuler,
    },
    {
      date: "Development",
      description:
        "Low-code and full-stack development to bring ideas to life.",
      img: Code,
    },
    {
      date: "Testing",
      description:
        "Extensive testing for quality assurance and performance optimization.",
      img: ListChecks,
    },
    {
      date: "Deployment",
      description: "Seamless deployment and post-launch support.",
      img: RocketLaunch,
    },
  ],
};
