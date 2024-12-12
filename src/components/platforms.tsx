/** @format */

import React from "react";
import Mendix from "../assets/images/mendix.svg";
import OutSystems from "../assets/images/outsystem.svg";
import Powerapps from "../assets/images/powerapps.svg";
import Appian from "../assets/images/appian_logo.svg";
import Icon from "../assets/images/Icon.svg";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
  link: string;
};

type Props = {
  sections: SectionProps[];
};

export type Layout228Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const PlatForms = (props: Layout228Props) => {
  const { sections } = { ...Layout228Defaults, ...props } as Props;
  return (
    <>
      <section
        id='relume'
        className='px-[13%]  mobile:px-[6%] py-16 md:py-24 lg:py-28'
      >
        <div className='container'>
          <div className='mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20'>
            <p
              className={`mb-3 font-semibold md:mb-4 `}
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Low code platforms
            </p>
            <h1 className='mb-5 mr-2 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl'>
              Platforms We Use for{" "}
              <span
                className={` ml-2 `}
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Low Code
              </span>
            </h1>
            <p className='md:text-sm '>
              Utilizing cutting-edge low code platforms to deliver agile,
              efficient and scalable solutions tailored to your needs.
            </p>
          </div>
          <div className='grid grid-cols-1  items-start justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-4 lg:gap-x-4'>
            {sections.map((section, index) => (
              <a href={section.link} target='_blank' rel='noreferrer'>
                <div
                  key={index}
                  className='relative h-[165px] w-full hover:bg-platformColorBg hover:border-gray-100 border border-gray-200 bg-blue-50 p-5 hover:p-0 rounded-2xl flex items-center text-center transition-all duration-300 ease-in-out hover:flex-col hover:cursor-pointer hover group'
                >
                  {/* Logo Image */}
                  <div className='absolute top-1/2 left-1/2 transform p-0 -translate-x-1/2 -translate-y-1/2  transition-all duration-300 ease-in-out group-hover:w-1/2 group-hover:h-16 group-hover:top-2 group-hover:left-1 group-hover:translate-x-0 group-hover:translate-y-0'>
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <img
                    src={Icon}
                    className='size-5 opacity-0 absolute right-3 top-7 group-hover:opacity-100'
                    alt=''
                  />

                  {/* Heading / Description */}
                  <h3 className='absolute bottom-4 left-5 w-[calc(100%-10px)] transform translate-y-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 text-left text-md text-gray-500 md:text-md md:leading-[1.3] lg:text-[16px]'>
                    {section.description}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const Layout228Defaults: Layout228Props = {
  sections: [
    {
      image: {
        src: Mendix,
        alt: "Relume logo 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "A low-code platform that enables rapid development of enterprise-grade applications with minimal coding effort.",
      link: "https://www.mendix.com/",
    },
    {
      image: {
        src: OutSystems,
        alt: "Relume logo 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "A high-performance low-code platform designed to accelerate digital transformation by building scalable apps quickly.",
      link: "https://www.outsystems.com/",
    },
    {
      image: {
        src: Powerapps,
        alt: "Relume logo 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "A Microsoft low-code platform that allows businesses to build custom apps and automate workflows seamlessly with integrated cloud services. ",
      link: "https://www.microsoft.com/en-us/power-platform/products/power-apps",
    },
    {
      image: {
        src: Appian,
        alt: "Relume logo 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "A powerful low-code platform that combines process automation & application development to create scalable enterprise solutions efficiently. ",
      link: "https://appian.com/",
    },
  ],
};
