"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Feature = {
  columnText: string;
  verticalText: string;
  horizontalText: string;
  heading: string;
  description: string;
  image: ImageProps;
};

type FeatureWithState = Feature & {
  isActive: boolean;
  setIsActive: () => void;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
};

export type Layout351Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const InnovativeSolutions = (props: Layout351Props) => {
  const { description, features } = {
    ...Layout351Defaults,
    ...props,
  } as Props;

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleSetIsActive = (index: number) => {
    setActiveIndex((prevIndex) => {
      if (
        prevIndex === index &&
        features.filter((_, i) => i === prevIndex).length === 1
      ) {
        return prevIndex;
      }
      return prevIndex === index ? null : index;
    });
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center w-full  md:mb-18 lg:mb-20">
          <h5
            className="mb-1 font-thin "
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Innovative Development Solutions
          </h5>
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
            Transform Your Ideas
            <span
              className=" ml-2"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Into Reality
            </span>
          </h2>
          <p className="md:text-md text-gray-500">{description}</p>
        </div>
        <div className="flex w-full flex-col overflow-hidden rounded-xl border-b border-l border-r border-gray-300 lg:h-[90vh] lg:flex-row lg:border-r-0 lg:border-t">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              isActive={activeIndex === index}
              setIsActive={() => handleSetIsActive(index)}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  isActive,
  setIsActive,
  ...feature
}: FeatureWithState) => {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const CardContent = isMobile ? motion.div : "div";
  return (
    <motion.div
      className="flex flex-col rounded-xl justify-start overflow-hidden lg:h-[90vh] lg:min-w-20 lg:flex-row "
      style={{
        boxShadow:
          "25px 0px 30px 0px rgba(197, 197, 197, 0.25), 12px 0px 20px -10px rgba(0, 0, 0, 0.15)",
      }}
      onClick={setIsActive}
      initial={false}
      animate={{
        width: isMobile ? "100%" : isActive ? "100%" : "5rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-border-primary py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none">
        <p className="text-blue-300 absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0">
          {feature.columnText}
        </p>
        <h2 className="hidden text-gray-300 [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold">
          {feature.verticalText}
        </h2>
        <p className="text-xl font-bold md:text-2xl lg:hidden ">
          {feature.horizontalText}
        </p>
      </div>
      <CardContent
        className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto"
        initial={false}
        animate={{
          height: isActive ? "auto" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] lg:px-12 lg:pb-16 lg:pt-16">
          {/* <h3
            dangerouslySetInnerHTML={{ __html: feature.heading }}
            className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl"
          >
            {feature.heading}
          </h3> */}
          <h1
            className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl"
            dangerouslySetInnerHTML={{ __html: feature.heading }}
          />
          <p className="md:text-sm text-gray-600">{feature.description}</p>
          <div className="rt-8 mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12">
            <img
              src={feature.image.src}
              alt={feature.image.alt}
              className="size-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </motion.div>
  );
};

export const Layout351Defaults: Layout351Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "At LCS, we offer a range of development services to meet your unique needs. Our Low-Code Development enables rapid application creation, while our No-Code Solutions empower your team to innovate without coding skills.",

  features: [
    {
      columnText: "01",
      verticalText: "Low-Code Development",
      horizontalText: "Feature one",
      heading: `Accelerate Your Apps 
            <span style="
              background: ${colors.themeGradient};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            ">With Low-Code</span>`,
      description:
        "Our Low-Code Development service empowers businesses to create applications rapidly, cutting down on traditional development timelines. Our team works closely with you to create flexible applications that meet your exact needs.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      columnText: "02",
      verticalText: "No Code Development",
      horizontalText: "Feature two",
      heading: `Powerful Apps, 
      <span style="
              background: ${colors.themeGradient};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            ">WithZero Coding Needed</span>
      `,
      description:
        "LCS’s No-Code Solutions open up new possibilities for non-technical teams by providing them with the tools to create, deploy, and manage applications without writing a single line of code.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      columnText: "03",
      verticalText: "Full Stack Development",
      horizontalText: "Feature three",
      heading: `Complete Solutions With 
      <span style="
              background: ${colors.themeGradient};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            ">Full-Stack Development</span>
      `,
      description:
        "Our Full-Stack Development service provides a comprehensive approach to building robust, scalable applications. With expertise in front-end & back-end development, we ensure every layer is seamlessly integrated & performance-optimized.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 3",
      },
    },
    {
      columnText: "04",
      verticalText: "Custom Built Application",
      horizontalText: "Feature four",
      heading: `Your Vision,  <span style="
              background: ${colors.themeGradient};
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            ">Custom Built</span>`,
      description:
        "At LCS, we understand that every business has unique requirements that off-the-shelf software can’t address. Our Custom Software Solutions service is designed to provide you with a tailored, end-to-end experience, from initial concept and design to deployment and ongoing support.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image 4",
      },
    },
  ],
};
