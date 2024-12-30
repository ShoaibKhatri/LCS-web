/** @format */

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import imageOne from "../assets/images/Group 23.png";
import imageTwo from "../assets/images/Group 24.png";
import { LuDot } from "react-icons/lu";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  tagline: string;
  heading: string;
  description: string;
  SecondDescription: String;
  buttons: ButtonProps[];
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
};

export type Layout361Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const StaffSuccess = (props: Layout361Props) => {
  const { tagline, heading, description, sections } = {
    ...Layout361Defaults,
    ...props,
  };
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='rb-12 mb-12 md:mb-18 lg:mb-20'>
          <div className='mx-auto max-w-lg text-center'>
            <h5
              className='mb-1 pt-4 md:pt-0 font-thin leading-6 '
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shared Success
            </h5>
            <p className='text-4xl !mb-0 font-extrabold md:text-6xl lg:text-8xl leading-6'>
              Achieving
              <span
                className=' ml-2'
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Milestones Together
              </span>
            </p>
            <p className='md:text-md text-gray-500 leading-6'>{description}</p>
          </div>
        </div>
        <div className='grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8'>
          {sections.map((section, index) => (
            <div key={index} className='shadow-large rounded-[10px] '>
              <div className='flex items-center justify-center'>
                <img
                  src={section.image.src}
                  className='size-full object-cover'
                  alt={section.image.alt}
                />
              </div>
              <div className='p-6 md:p-8 lg:p-12'>
                {/* <p
                  style={{
                    background: colors.themeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className='mb-2 text-sm font-semibold'
                >
                  {section.tagline}
                </p> */}
                <h3
                  style={{
                    background: colors.themeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className='mb-5 text-2xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'
                >
                  {section.heading}
                </h3>
                <p className='text-[#6B7280 flex items-center'>
                  <LuDot className='size-7' />
                  {section.description}
                </p>
                <p className='text-[#6B7280 flex items-center'>
                  {" "}
                  <LuDot className='size-7' />
                  {section.SecondDescription}
                </p>

                {/* <div className='mt-6 flex flex-wrap items-center gap-4 md:mt-8'>
                  {section.buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout361Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description:
    "Partner with us to reach your goals efficiently, leveraging our expertise and collaborative approach.",
  sections: [
    {
      tagline: "Tagline",
      heading: "Performance Monitoring",

      description: "Regular check-ins and reviews",
      SecondDescription: "KPI tracking and satisfaction metrics",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: imageOne,
        alt: "Relume placeholder image 1",
      },
    },
    {
      tagline: "Tagline",
      heading: "Feedback Collection",

      description: "Post-project surveys",
      SecondDescription: "Documentation of insights for continuous improvement",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: imageTwo,
        alt: "Relume placeholder image 2",
      },
    },
  ],
};
