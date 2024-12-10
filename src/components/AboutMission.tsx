import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import InnovationBulb from "../assets/images/InnovationBulb.svg";
import TransparencyHand from "../assets/images/TransparencyHand.svg";
import Trophy from "../assets/images/Trophy.svg";
import CustomerCentric from "../assets/images/CustomerCentric.svg";

type ImageProps = {
  src: string;
  alt?: string;
};
type FeaturesProps = {
  icon?: ImageProps;
  title?: string;
  description?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
  featureSections: FeaturesProps[];
};

export type Layout192Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AboutMission = (props: Layout192Props) => {
  const { description, image, featureSections } = {
    ...Layout192Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50">
      <div className="container">
        <div className="mx-auto mb-12 w-full  text-center md:mb-18 lg:mb-20">
          <p
            className={`mb-3 font-semibold md:mb-4 `}
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Our Mission & Values
          </p>
          <h1 className="mb-5 mr-2 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Guiding Principles for{" "}
            <span
              className={` ml-2 `}
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Success
            </span>
          </h1>
          <p className="md:text-sm ">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-y-16">
          {featureSections.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-y-16  md:grid-cols-2 md:items-center md:gap-x-6 lg:gap-x-8"
            >
              <div className="order-2 md:order-1">
                <img
                  src={feature.icon?.src}
                  className="w-full h-[200px] rounded-md object-cover"
                  alt={image.alt}
                />
              </div>
              <div className="order-1 lg:order-2">
                <h5
                  className="mb-3 font-semibold text-[24px] md:mb-4"
                  style={{
                    background: colors.themeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {feature.title}
                </h5>
                <p className="md:text-sm">{feature.description}</p>
                {/* <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {buttons.map((button, index) => (
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

export const Layout192Defaults: Layout192Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Our mission is to empower businesses by simplifying the development process and providing agile, customizable, and scalable solutions. We stand by our core values: Innovation, Transparency, Excellence and Customer-Centricity.",
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
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  featureSections: [
    {
      icon: {
        src: InnovationBulb,
        alt: "Relume logo 1",
      },
      title: "Innovation",
      description:
        "Continuously evolving to stay ahead, embracing change and creative solutions to meet today’s demands and prepare for tomorrow.",
    },
    {
      icon: {
        src: TransparencyHand,
        alt: "Relume logo 2",
      },
      title: "Transparency",
      description:
        "Clear communication at every step, ensuring transparency, openness and trust so you’re always in the loop.",
    },
    {
      icon: {
        src: Trophy,
        alt: "Relume logo 3",
      },
      title: "Excellence",
      description:
        "Delivering quality solutions with precision, driven by high standards and attention to detail to exceed expectations.",
    },
    {
      icon: {
        src: CustomerCentric,
        alt: "Relume logo 4",
      },
      title: "Customer-Centricity",
      description:
        "Your success is our priority; we tailor solutions to align with your unique needs, empowering you every step of the way.",
    },
  ],
};
