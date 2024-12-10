import type { ButtonProps } from "@relume_io/relume-ui";
import SecondaryButton from "../components/secondaryBtn";
import HeroBg from "../assets/images/heroBg.svg";
import MacBook from "../assets/images/MacBook.svg";
import iPhone from "../assets/images/iMockup.svg";
import Star from "../assets/images/starPattern.svg";
import InvertedStar from "../assets/images/topRight.svg";
import Arrow from "../assets/images/arrowBlue.svg";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroSection = (props: Header1Props) => {
  const { heading, description } = {
    ...Header1Defaults,
    ...props,
  } as Props;
  return (
    <section
      style={{
        backgroundImage: `
        url(${HeroBg})`,
        backgroundSize: "cover", // makes the image cover the whole area
        backgroundPosition: "center", // centers the image
        height: "100dvh", // sets the height for this example
        width: "100%",
      }}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-22 relative lg:mt-10"
    >
      <img
        src={Star}
        className="hidden lg:block absolute bottom-[-20px] left-[10px] w-[300px]"
        alt=""
      />
      <img
        src={InvertedStar}
        className="hidden lg:block absolute right-[110px] top-[50px] w-[500px]"
        alt=""
      />
      <div className="container p-4 lg:px-12">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="mb-1 font-thin text-blue-200">At LowCoSys </h5>
            <h1 className="mb-5 text-xl font-bold text-white md:mb-6 md:text-5xl lg:text-7xl">
              {heading}
            </h1>
            <p className="md:text-[16px] text-blue-200">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <SecondaryButton
                variant="secondary"
                color="blue"
                border=""
                sx={{
                  color: colors.blue500,
                  border: `1px solid ${colors.blue100}`,
                }}
              >
                Get Started
                <img src={Arrow} className="inline-block ml-2" alt="" />
              </SecondaryButton>
              <SecondaryButton
                sx={{
                  color: "white",
                  border: `1px solid ${colors.blue100}`,
                }}
                variant="transparent"
                color=""
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
          <div className="relative ">
            <img
              src={MacBook}
              className="w-full object-cover"
              alt={"MacBook Pro 16"}
            />
            <img
              className="hidden md:block absolute right-[-20px] top-[-50px] w-[150px] h-[200px]"
              src={iPhone}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header1Defaults: Header1Props = {
  heading:
    "Transform Your Business with Scalable Low-code & Full Stack Solutions",
  description:
    "At lowcosys, we provide end-to-end IT services to help your business thrive by offering low code solutions, responsive layouts & excellent UI/UX designs for seamless integration & enhanced performance.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
