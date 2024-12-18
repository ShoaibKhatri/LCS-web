/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";

import Arrow from "../assets/images/arrowWhite.svg";
import SecondaryButton from "../components/secondaryBtn";
import PrimaryBtn from "../components/primaryBtn";
import backgroundImage from "../assets/images/LightGradient09.png";
import imageOne from "../assets/images/image 78.png";
import imageTwo from "../assets/images/image 75.png";
import imageThree from "../assets/images/Group 28.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  firstImage: ImageProps;
  secondImage: ImageProps;
  thirdImage: ImageProps;
};

export type Header136Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServiceHero = (props: Header136Props) => {
  const { description, firstImage, secondImage, thirdImage } = {
    ...Header136Defaults,
    ...props,
  } as Props;
  return (
    <section
      style={{
        backgroundImage: `
        url(${backgroundImage})`,
        backgroundSize: "cover", // makes the image cover the whole area
        backgroundPosition: "center", // centers the image
        width: "100%",
      }}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="text-center w-full ">
            <h5
              className="mb-1 font-thin "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Services
            </h5>
            <h2 className="rb-5 mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl">
              Tailored Solutions for
              <span
                className=" ml-2"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Your Business
              </span>
            </h2>
            <p className="md:text-md">{description}</p>
            {/* <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div> */}

            <div className="mt-6 flex justify-center gap-x-4 md:mt-8">
              <PrimaryBtn variant="primary" path="/services">
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
                path="/contact"
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div className="absolute bottom-[20%] left-0 w-1/4">
            <img
              className="aspect-square size-full rounded object-cover"
              src={firstImage.src}
              alt={firstImage.alt}
            />
          </div>
          <div className="mx-[10%] mb-[5%] w-full">
            <img
              className="aspect-[3/2] rounded-lg size-full object-cover"
              src={secondImage.src}
              alt={secondImage.alt}
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/4">
            <img
              className="aspect-[2/3]  rounded size-full object-cover"
              src={thirdImage.src}
              alt={thirdImage.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header136Defaults: Header136Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: imageOne,
    alt: "Relume placeholder image 1",
  },
  secondImage: {
    src: imageTwo,
    alt: "Relume placeholder image 2",
  },
  thirdImage: {
    src: imageThree,
    alt: "Relume placeholder image 3",
  },
};
