/** @format */

"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { colors } from "../constants/theme";
// import { theme } from "../../../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  colorHeading: string;
  description: string;
  images: ImageProps[];
  subTitle: string;
  subDescription: string;
};

export type Gallery13Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Gallery = (props: Gallery13Props) => {
  const {
    tagline,
    heading,
    colorHeading,
    description,
    images,
    subTitle,
    subDescription,
  } = {
    ...props,
    ...serviceGalleryData,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className=' py-16 md:py-24 bg-[#EFF6FF] lg:py-28'>
      <div className='px-[5%] '>
        <div className='container text-center pb-16 md:pb-24 lg:pb-28'>
          <p
            className='uppercase mb-2 text-xs md:text-sm mt-5 md:mt-0'
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tagline}
          </p>
          <h1
            style={{
              display: "inline-block",
            }}
            className='mb-5 text-[2rem] font-extrabold md:text-[2.25rem] leading-8  md:mb-6  lg:text-8xl'
          >
            {heading}{" "}
            <span
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {colorHeading}
            </span>
          </h1>
          <p className='md:text-md text-gray-500'>{description}</p>
        </div>
      </div>
      {/* for all available options: https://www.embla-carousel.com/api/options/ */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className='overflow-hidden container'
      >
        <CarouselContent className='ml-0'>
          {images.map((image, index) => (
            <CarouselItem key={index} className='relative h-dvh pl-0'>
              <img
                src={image.src}
                alt={image.alt}
                className='absolute inset-0 size-full object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='-mt-8 ml-8 hidden lg:flex' />
        <CarouselNext className='-mt-8 mr-8 hidden lg:flex' />
        <div className='absolute bottom-8 left-1/2 bg-[#FFFFFFE5] px-2 h-4 flex items-center  rounded-full -translate-x-1/2 transform'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={clsx(
                "relative mx-[3px] inline-block size-2 rounded-full",
                current === index + 1 ? "bg-blue-300" : "bg-gray-400"
              )}
            />
          ))}
        </div>
      </Carousel>
      <div className='container px-[1%] mx-auto mt-6'>
        <h3
          style={{
            // fontFamily: theme.typography.fontFamily,
            // fontWeight: theme.typography.fontWeight.medium,
            color: "#262626",
          }}
          className='mb-3 text-md leading-[20px] font-semibold  md:mb-4 lg:text-xl'
        >
          {subTitle}{" "}
        </h3>
        <p
          className='text-[1rem] text-[#4B5563] lg:text-[1rem]'
          style={
            {
              // fontFamily: theme.typography.fontFamily,
              // fontWeight: theme.typography.fontWeight.regular,
              // color: theme.colors.primaryLight,
            }
          }
        >
          {subDescription}{" "}
        </p>
      </div>
    </section>
  );
};

export const serviceGalleryData = {
  tagline: "Client Success",
  heading: "Transformative Results for",
  colorHeading: "Our Clients",
  description:
    "We measure our success by the success of our clients, creating long-term value in every partnership.",
  images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
  ],
  subTitle: "Project Title",
  subDescription:
    "Project description,  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ",
};
