/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import imageOne from "../assets/images/image 83.png";
import imageTwo from "../assets/images/image 85.png";
import imageThree from "../assets/images/Group 11.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  sections: SectionProps[];
};

export type Layout229Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const DataAnalyst = (props: Layout229Props) => {
  const { sections } = { ...Layout229Defaults, ...props } as Props;
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
      <div className='container'>
        <div className='text-center'>
          <p
            className='mb-3  md:mb-4'
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            DATA ANALYTICS
          </p>
          <h2 className='rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl'>
            Transform Data into
            <span
              className=' ml-2'
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Actionable Insights
            </span>
          </h2>
          <p className='mb-6 md:mb-8 md:text-md text-gray-500'>
            {" "}
            Our data analytics solutions reveal insights that drive smarter
            business decisions.
          </p>
        </div>
        <div className='grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
          {sections.map((section, index) => (
            <div
              key={index}
              className='flex w-full flex-col items-center text-center'
            >
              <div className='rb-6 mb-6 md:mb-8'>
                <img
                  src={section.image.src}
                  className='rounded-xl'
                  alt={section.image.alt}
                />
              </div>
              <h3
                className='mb-5 text-md font-bold md:mb-6 md:text-lg md:leading-[1.3] lg:text-xl'
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {section.heading}
              </h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout229Defaults: Layout229Props = {
  sections: [
    {
      image: {
        src: imageOne,
        alt: "Relume placeholder image 1",
      },
      tagline: "Tagline",
      heading: "Performance Monitoring Reports",
      description:
        "Track key performance indicators (KPIs) across departments and visualize trends in real time to keep your business on target.",
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
      image: {
        src: imageTwo,
        alt: "Relume placeholder image 2",
      },
      tagline: "Tagline",
      heading: "Customer Insights Reports",
      description:
        "Understand customer behavior, preferences, and satisfaction metrics to improve engagement and retention.",
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
      image: {
        src: imageThree,
        alt: "Relume placeholder image 3",
      },
      tagline: "Tagline",
      heading: "Sales & Revenue Tracking Reports",
      description:
        "Gain a comprehensive view of sales performance, revenue growth, and top-performing products or services.",
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
