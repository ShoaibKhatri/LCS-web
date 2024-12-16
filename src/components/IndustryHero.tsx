/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";
import PrimaryBtn from "./primaryBtn";
import IndHeroBig from "../assets/images/indHeroBig.svg";
import IndHeroSmall from "../assets/images/indHeroSmall.svg";
import backgroundImage from "../assets/images/LightGradient06.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Header137Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const IndustryHero = (props: Header137Props) => {
  const { description } = {
    ...Header137Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="relume"
      className=" "
      style={{
        backgroundImage: `
        url(${backgroundImage} )`,
        backgroundSize: "cover", // makes the image cover the whole area
        backgroundPosition: "center", // centers the image
        width: "100%",
      }}
    >
      <div className="container grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 md:mt-0 mt-8">
        <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
          <p
            className="mb-3 md:mb-4"
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tailored Solutions for Every Industry
          </p>
          <h2 className="rb-5 mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl">
            Empowering Industries with
            <span
              className=" ml-2"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Innovative Solutions
            </span>
          </h2>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <PrimaryBtn variant="primary">
              Find Your Industry Solution
            </PrimaryBtn>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="absolute right-0 w-[45%] pr-[5%] lg:pr-0">
            <img
              src={IndHeroSmall}
              alt=""
              className="aspect-[2/3] w-full object-cover lg:h-full"
            />
          </div>
          <div className="ml-[10%]">
            <img
              src={IndHeroBig}
              alt=""
              className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header137Defaults: Header137Props = {
  heading: "Medium length hero heading goes here",
  description:
    "From healthcare to e-commerce, we tailor our services to meet your industry’s specific demands.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png",
    alt: "Relume placeholder image 1",
  },
  secondImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image 2",
  },
};
