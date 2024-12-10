import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";
import PrimaryBtn from "./primaryBtn";

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
  const { description, firstImage, secondImage } = {
    ...Header137Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className=" ">
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
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
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
          <div className="absolute w-[45%] pl-[5%] lg:pl-0">
            <img
              src={firstImage.src}
              alt={firstImage.alt}
              className="aspect-[2/3] w-full object-cover lg:h-full"
            />
          </div>
          <div className="ml-[10%]">
            <img
              src={secondImage.src}
              alt={secondImage.alt}
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
