"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Arrow from "../assets/images/arrowWhite.svg";
import SecondaryButton from "../components/secondaryBtn";
import PrimaryBtn from "../components/primaryBtn";
import {
  motion,
  MotionStyle,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useCallback } from "react";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  group1Images: ImageProps[];
  group2Images: ImageProps[];
  group3Images: ImageProps[];
};

export type Header142Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const imagePositions = {
  group1: [
    "bottom-[5%] left-[-8%] z-10 max-w-[18%] sm:bottom-[10%] lg:bottom-auto",
    "left-[30%] top-[8%] z-10 max-w-[18%] sm:top-[10%] sm:max-w-[12%] lg:left-[40%] lg:top-[5%]",
    "bottom-[-5%] right-[-5%] z-10 max-w-[25%] lg:max-w-[18%]",
  ],
  group2: [
    "left-[2%] top-[-5%] max-w-[30%] sm:left-[5%] sm:max-w-[18%] lg:left-[10%] lg:top-[-10%]",
    "right-[20%] top-[-2%] max-w-[25%] sm:top-[5%] sm:max-w-[16%] lg:right-[20%] lg:top-[-10%]",
  ],
  group3: [
    "right-[-5%] top-[10%] max-w-[20%] sm:max-w-[15%] lg:top-[25%]",
    "bottom-[-2%] left-[20%] z-10 max-w-[18%] sm:bottom-[-5%] sm:max-w-[16%] lg:bottom-[-10%]",
    "bottom-[5%] right-[32%] max-w-[18%] sm:right-[30%] sm:max-w-[15%] lg:bottom-[5%] lg:max-w-[12%]",
  ],
};

const useMouseMove = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 500 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 500 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        event.currentTarget.getBoundingClientRect();
      mouseX.set((clientX - left) / width);
      mouseY.set((clientY - top) / height);
    },
    [mouseX, mouseY]
  );

  return { smoothMouseX, smoothMouseY, handleMouseMove };
};

export const PortfolioHero = (props: Header142Props) => {
  const { description, group1Images, group2Images, group3Images } = {
    ...Header142Defaults,
    ...props,
  } as Props;

  const { smoothMouseX, smoothMouseY, handleMouseMove } = useMouseMove();
  // const isMobile = useMediaQuery("(max-width: 991px)");
  // const Animate = isMobile ? "div" : motion.div;

  const canvasTransform: MotionStyle = {
    x: useTransform(smoothMouseX, [0, 1], ["10vw", "-5vw"]),
    y: useTransform(smoothMouseY, [0, 1], ["10vh", "-5vh"]),
  };

  const group1Transform: MotionStyle = {
    x: useTransform(smoothMouseX, [0, 1], ["8%", "-8%"]),
    y: useTransform(smoothMouseY, [0, 1], ["8%", "-8%"]),
  };

  const group2Transform: MotionStyle = {
    x: useTransform(smoothMouseX, [0, 1], ["5%", "-5%"]),
    y: useTransform(smoothMouseY, [0, 1], ["5%", "-5%"]),
  };

  const group3Transform: MotionStyle = {
    x: useTransform(smoothMouseX, [0, 1], ["3%", "-3%"]),
    y: useTransform(smoothMouseY, [0, 1], ["3%", "-3%"]),
  };

  const renderImages = (
    images: ImageProps[],
    positions: string[],
    transformStyles: MotionStyle,
    blur: string
  ) => (
    <motion.div
      className="absolute inset-0 flex origin-bottom items-center justify-center"
      style={{
        ...transformStyles,
        filter: blur, // Add blur filter here
      }}
    >
      {images.slice(0, positions.length).map((image, index) => (
        <div key={index} className={`absolute w-full ${positions[index]}`}>
          <img src={image.src} alt={image.alt} className="size-full" />
        </div>
      ))}
    </motion.div>
  );

  return (
    <section
      className="relative flex h-svh items-center justify-center overflow-hidden lg:h-screen"
      onMouseMove={handleMouseMove}
    >
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg">
          <div className="relative z-10 text-center">
            <h5
              className="mb-1 font-thin text-center"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Success Stories{" "}
            </h5>

            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl text-center">
              Through
              <span
                className="ml-3"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technology
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
      </div>
      <motion.div className="absolute size-full" style={canvasTransform}>
        {renderImages(
          group1Images,
          imagePositions.group1,
          group1Transform,
          "none"
        )}
        {renderImages(
          group2Images,
          imagePositions.group2,
          group2Transform,
          "blur(3px)"
        )}
        {renderImages(
          group3Images,
          imagePositions.group3,
          group3Transform,
          "blur(15px)"
        )}
      </motion.div>
    </section>
  );
};

export const Header142Defaults: Header142Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  group1Images: [
    { src: "https://via.placeholder.com/150", alt: "Group 1 - Image 1" },
    { src: "https://via.placeholder.com/150", alt: "Group 1 - Image 2" },
    { src: "https://via.placeholder.com/150", alt: "Group 1 - Image 3" },
  ],
  group2Images: [
    { src: "https://via.placeholder.com/150", alt: "Group 2 - Image 1" },
    { src: "https://via.placeholder.com/150", alt: "Group 2 - Image 2" },
  ],
  group3Images: [
    { src: "https://via.placeholder.com/150", alt: "Group 3 - Image 1" },
    { src: "https://via.placeholder.com/150", alt: "Group 3 - Image 2" },
    { src: "https://via.placeholder.com/150", alt: "Group 3 - Image 3" },
  ],
};
