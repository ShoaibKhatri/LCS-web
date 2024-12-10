import React from "react";
import "antd/dist/reset.css";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import MagnifyingGlass from "../assets/images/MagnifyingGlass.svg";
import ShieldCheck from "../assets/images/ShieldCheck.svg";
import Monitor from "../assets/images/Monitor.svg";
import Globe from "../assets/images/Globe.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  features: FeaturesProps[];
  image: ImageProps;
};

export type Layout31Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const QualityAnalyst = (props: Layout31Props) => {
  const { features, image } = {
    ...Layout31Defaults,
    ...props,
  } as Props;

  // Split the features into two groups: left and right
  const leftFeatures = features.slice(0, 2);
  const rightFeatures = features.slice(2);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50">
      <div className="container">
        <div className="text-center lg:mb-12">
          <p
            className="mb-3 md:mb-4"
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Quality Assurance
          </p>
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
            Ensuring High Standards for
            <span
              className=" ml-2"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Project
            </span>
          </h2>
          <p className="md:text-md text-gray-500">
            Our robust testing and quality assurance process ensures your
            product performs flawlessly in all conditions.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-3 md:gap-x-12 lg:gap-x-20">
          {/* Left Features */}
          <div className="grid grid-cols-1 gap-y-8 sm:my-6">
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="mb-3 md:mb-4">
                  <img
                    src={feature.icon.src}
                    className="size-12"
                    alt={feature.icon.alt}
                  />
                </div>
                <h1 className="mb-3 text-gray-600 text-xl font-bold md:mb-4 md:text-2xl">
                  {feature.heading}
                </h1>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={image.src}
              className="w-full max-w-md object-cover rounded-lg"
              alt={image.alt}
            />
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 gap-y-8 items-center sm:my-6">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="mb-3 md:mb-4">
                  <img
                    src={feature.icon.src}
                    className="size-12"
                    alt={feature.icon.alt}
                  />
                </div>
                <h1 className="mb-3 text-gray-600 text-xl font-bold md:mb-4 md:text-2xl">
                  {feature.heading}
                </h1>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout31Defaults: Layout31Props = {
  features: [
    {
      icon: {
        src: MagnifyingGlass,
        alt: "Relume logo 1",
      },
      heading: "Comprehensive Bug Testing",
      description: "Identifying and resolving potential issues before launch.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      icon: {
        src: ShieldCheck,
        alt: "Relume logo 2",
      },
      heading: "Compliance Checks",
      description: "Verifying adherence to industry standards and regulations.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      icon: {
        src: Monitor,
        alt: "Relume logo 3",
      },
      heading: "Usability Testing",
      description: "Testing for ease of use and an intuitive user experience.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      icon: {
        src: Globe,
        alt: "Relume logo 4",
      },
      heading: "Cross-Browser Compatibility",
      description:
        "Ensuring the product functions seamlessly across various browsers & devices.",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
