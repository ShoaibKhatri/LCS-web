/** @format */

"use client";

import { useRef } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Arrow from "../assets/images/arrowWhite.svg";
import PrimaryBtn from "../components/primaryBtn";
import SecondaryButton from "../components/secondaryBtn";
import { colors } from "../constants/theme";
import Vector1 from "../assets/images/ExVector1.svg";
import Vector2 from "../assets/images/ExVector2.svg";
import Vector3 from "../assets/images/ExVector3.svg";
import cardBg1 from "../assets/images/cardBg1.png";
import cardBg2 from "../assets/images/cardBg2.svg";
import cardBg3 from "../assets/images/cardBg3.svg";
import cardBg4 from "../assets/images/cardBg4.svg";
import Speedometer from "../assets/images/Speedometer.svg";
import PuzzlePiece from "../assets/images/PuzzlePiece.svg";
import Microscope from "../assets/images//Microscope.svg";
import Graph from "../assets/images/Graph.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  icon: ImageProps;
  title: string;
  description: string;
  style?: any;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  featureSections: FeatureSectionProps[];
};

export type Layout415Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout415 = (props: Layout415Props) => {
  const { tagline, description, featureSections } = {
    ...Layout415Defaults,
    ...props,
  } as Props;

  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="px-[5%]">
      <div className="container">
        <div className="relative h-[300svh] lg:h-[300vh]">
          <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-svh md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
            <div>
              <p className="mb-3 font-semibold md:mb-4 text-blue-400">
                {tagline}
              </p>
              <h2 className="rb-5 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
                Driven By
                <span className="text-blue-600 ml-2">Expertise</span>
              </h2>
              <p className="md:text-md">{description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <PrimaryBtn variant="primary" path="/services">
                  Learn More
                  <img
                    className="text-white inline-block ml-2"
                    src={Arrow}
                    alt=""
                  />
                </PrimaryBtn>
                <SecondaryButton
                  variant="transparent"
                  color="blue"
                  sx={{
                    color: colors.blue500,
                    border: `1px solid ${colors.blue500}`,
                  }}
                  path="/contact"
                >
                  Contact Us
                </SecondaryButton>
              </div>
            </div>
            <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
              <img
                src={Vector1}
                className="hidden lg:block absolute top-[-300px] opacity-25 right-[40px] w-[200px] h-[200px] "
                alt=""
              />
              <img
                src={Vector2}
                className="hidden lg:block absolute  opacity-25 right-[-100px] w-[200px] h-[200px] "
                alt=""
              />
              <img
                src={Vector3}
                className="hidden lg:block absolute bottom-[-300px] opacity-25 left-[100px] w-[200px] h-[200px] "
                alt=""
              />
              {featureSections.map((section, index) => (
                <FeatureSection
                  style={section.style}
                  key={index}
                  section={section}
                  index={index}
                  totalSections={featureSections.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

const FeatureSection = ({
  section,
  index,
  totalSections,
  scrollYProgress,
  style,
}: {
  section: FeatureSectionProps;
  index: number;
  totalSections: number;
  scrollYProgress: MotionValue<number>;
  style: any;
}) => {
  const sectionScrollStart = index / totalSections;
  const sectionScrollEnd = (index + 1) / totalSections;

  const rotate = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    [0 + index * 3, -30]
  );
  const translateY = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vh", "-100vh"]
  );

  const translateX = useTransform(
    scrollYProgress,
    [sectionScrollStart, sectionScrollEnd],
    ["0vw", "-10vw"]
  );

  return (
    <motion.div
      className={`absolute border border-gray-400 rounded-lg mx-6 flex flex-col justify-between bg-background-primary p-8 md:ml-0`}
      style={{
        rotate: index === totalSections - 1 ? "9deg" : rotate,
        translateY: index === totalSections - 1 ? undefined : translateY,
        translateX: index === totalSections - 1 ? undefined : translateX,
        zIndex: totalSections - index,
        backgroundImage: `url(${style?.img})`, // Use backgroundImage here
        backgroundSize: "cover", // Ensures the image covers the div
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="rb-6 mb-6 md:mb-8">
        <img
          src={section.icon.src}
          alt={section.icon.alt}
          className="size-12"
        />
      </div>
      <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
        {section.title}
      </h3>
      <p>{section.description}</p>
    </motion.div>
  );
};

export const Layout415Defaults: Layout415Props = {
  tagline: "What We Offer",
  heading: "Medium length section heading goes here",
  description:
    "We provide flexible, innovative and future-ready solutions designed to drive your business growth. Our adaptable approach ensures you can quickly respond to changes and seize new opportunities. By leveraging the latest technologies, we address current needs and anticipate future demands, positioning your business for long-term success.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  featureSections: [
    {
      icon: {
        src: Speedometer,
        alt: "Relume logo 1",
      },
      title: "Low-code Development",
      description:
        "Achieve faster results without sacrificing quality. Low-code platforms allow you to build & launch custom applications quickly & efficiently.",
      style: {
        color: colors.lowcodeColor,
        img: cardBg1,
      },
    },
    {
      icon: {
        src: PuzzlePiece,
        alt: "Relume logo 2",
      },
      title: "No-code Solutions",
      description:
        "Empower your non-technical teams to create, manage & update  apps with no coding knowledge required, reducing dependency on devs.",
      style: {
        img: cardBg2,
      },
    },
    {
      icon: {
        src: Microscope,
        alt: "Relume logo 3",
      },
      title: "Full Stack Development",
      description:
        "For projects with deeper technical expertise, we offer comprehensive full-stack development services to ensure powerful & scalable solution.",
      style: {
        img: cardBg3,
      },
    },
    {
      icon: {
        src: Graph,
        alt: "Relume logo 4",
      },
      title: "Custom Software",
      description:
        "Tailored software solutions to meet the unique needs of your business, ensuring maximum efficiency and growth potential.",
      style: {
        img: cardBg4,
      },
    },
  ],
};
