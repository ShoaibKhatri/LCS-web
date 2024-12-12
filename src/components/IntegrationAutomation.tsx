/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import HandShake from "../assets/images/Handshake.svg";
import ListCheck from "../assets/images/ListChecks.svg";
import SecondaryButton from "../components/secondaryBtn";
import Integration from "../assets/images/integrationImage.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  img: string;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const IntegrationAutomation = (props: Layout4Props) => {
  const { tagline, description, image, subHeadings } = {
    ...Layout4Defaults,
    ...props,
  } as Props;
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-y-12 md:grid-flow-row lg:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20'>
          <div>
            <img
              src={image.src}
              className='w-full object-cover'
              alt={image.alt}
            />
          </div>
          <div>
            <p
              className='mb-3 font-semibold md:mb-4'
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {tagline}
            </p>
            <h2 className='rb-5 mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl'>
              Seamlessly Connect And
              <span
                className=' ml-2'
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Automate Your Systems
              </span>
            </h2>
            <p className='mb-6 md:mb-8 md:text-md text-gray-500'>
              {description}
            </p>
            <div className='grid grid-cols-1 gap-6 py-2 sm:grid-cols-2'>
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <img src={subHeading.img} className='size-12' alt='' />
                  <h6 className='mb-3 text-md font-bold mt-2 leading-[1.4] md:mb-4 md:text-xl'>
                    {subHeading.title}
                  </h6>
                  <p>{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className='mt-6 flex flex-wrap items-center gap-4 md:mt-8'>
              <SecondaryButton
                color='blue'
                variant='transparent'
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
    </section>
  );
};

export const Layout4Defaults: Layout4Props = {
  tagline: "Integration & Automation",
  heading: "Medium length section heading goes here",
  description:
    "Our integration solutions streamline your processes and eliminate repetitive tasks to save time and resources.Our integration and automation solutions help you connect disparate systems and automate workflows seamlessly.",
  subHeadings: [
    {
      img: HandShake,
      title: "Why Choose Us",
      description:
        "Choose LCS for our expertise in custom integrations and automation.",
    },
    {
      img: ListCheck,
      title: "What We Offer",
      description:
        "API integrations to unify various applications and services.",
    },
  ],
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
    src: Integration,
    alt: "Relume placeholder image",
  },
};
