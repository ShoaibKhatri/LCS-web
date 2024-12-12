import type { ButtonProps } from "@relume_io/relume-ui";
import StaffHeroL from "../assets/images/StaffHeroL.svg";
import StaffHeroS from "../assets/images/StaffHeroS.svg";
import LightGradient from "../assets/images/LightGradient.svg";
import { colors } from "../constants/theme";
import PrimaryBtn from "../components/primaryBtn";

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

export const StaffAugHero = (props: Header128Props) => {
  const { description, firstImage, secondImage } = {
    ...Header128Defaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{
        backgroundImage: `
        url(${LightGradient})`,
        backgroundSize: "cover", // makes the image cover the whole area
        backgroundPosition: "center", // centers the image
        height: "100dvh", // sets the height for this example
        width: "100%",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h5
              className="mb-1 font-thin leading-6"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Flexible IT Staffing
            </h5>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              LCS Staff
              <span
                className=" ml-2 inline-block"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Outsourcing Solutions
              </span>
            </h2>
            <p className="md:text-[16px] text-gray-500">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {/* {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))} */}
              <PrimaryBtn variant="primary">Hire Top IT Talent</PrimaryBtn>
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute left-0 top-[10%] w-3/5">
              <img
                src={StaffHeroS}
                className="aspect-[3/2] size-full object-cover"
                alt={firstImage.alt}
              />
            </div>
            <div className="ml-[15%] w-full">
              <img
                src={StaffHeroL}
                className="aspect-square rounded-md size-full object-cover"
                alt={secondImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header128Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Whether you need specialized expertise or additional resources to meet project deadlines, LCS connects you with top-tier talent to accelerate your success.",
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
