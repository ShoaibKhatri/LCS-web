import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";
import SecondaryButton from "../components/secondaryBtn";
import PrimaryBtn from "../components/primaryBtn";
import Arrow from "../assets/images/arrowWhite.svg";

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

export type Header128Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AllCaseHero = (props: Header128Props) => {
  const { heading, description, buttons, firstImage, secondImage } = {
    ...Header128Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h5
              className="mb-1 font-thin "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Case Studies
            </h5>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              Real
              <span
                className="ml-3"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Solutions
              </span>
            </h2>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              Real
              <span
                className="ml-3"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Impact
              </span>
            </h2>
            <p className="md:text-md text-gray-500">
              From start-ups to industry leaders, explore how we have delivered
              tailored solutions that make a measurable impact. Each project is
              a testament to our commitment to innovation, efficiency &
              excellence across various sectors.
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
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
          <div className="relative flex w-full">
            <div className="absolute left-0 top-[10%] w-3/5">
              <img
                src={firstImage.src}
                className="aspect-[3/2] size-full object-cover"
                alt={firstImage.alt}
              />
            </div>
            <div className="ml-[15%] w-full">
              <img
                src={secondImage.src}
                className="aspect-square size-full object-cover"
                alt={secondImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header128Defaults: Header128Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  firstImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape-dim.png",
    alt: "Relume placeholder image 1",
  },
  secondImage: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image 2",
  },
};
