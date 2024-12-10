import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import ChartLineUp from "../assets/images/ChartLineUp.svg";
import Ranking from "../assets/images/Ranking.svg";
import UsersThree from "../assets/images/UsersThree.svg";
import Cube from "../assets/images/CubeTransparent.svg";
import Lightbulb from "../assets/images/Lightbulb.svg";
import ClockUser from "../assets/images/ClockUser.svg";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSection = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
  sx: any;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSection[];
};

export type Layout396Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Culture = (props: Layout396Props) => {
  const { tagline, description, featureSections } = {
    ...Layout396Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="relume"
      className="relative lg:px-[13%] py-16 px-10 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p
            className="mb-3 font-semibold md:mb-4 "
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tagline}
          </p>
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
            What It’s Like to
            <span
              className="ml-2"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work Here
            </span>
          </h2>
          <p className="md:text-md text-gray-500">{description}</p>
        </div>
        <div className="relative grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {featureSections.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = (featureSection: FeatureSection) => (
  <div className="shadow-whyUsShadow hover:cursor-pointer hover:shadow-hover transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-center rounded-[20px] border-border-primary p-6 md:p-8">
    <div>
      <div className="rb-5 mb-5 md:mb-6">
        <img
          src={featureSection.icon.src}
          className="size-12"
          alt={featureSection.icon.alt}
        />
      </div>
      <h2
        className="mb-3 font-bold md:mb-4 md:text-md md:leading-[1.3] lg:text-[16px]"
        style={featureSection.sx}
      >
        {featureSection.heading}
      </h2>
      <p className="text-gray-600">{featureSection.description}</p>
    </div>
  </div>
);

export const Layout396Defaults: Layout396Props = {
  tagline: "Our Culture",
  heading: "Why Choose Us",
  description:
    "At LowCoSys, we believe in growth, collaboration and balance. We’re committed to fostering a flexible and innovative workspace.",
  featureSections: [
    {
      icon: {
        src: ChartLineUp,
        alt: "Relume logo 1",
      },
      heading: "Growth",
      description:
        "In a start-up environment, learning is constant and we support continuous professional development.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      sx: {
        color: " rgba(8, 166, 82, 1)",
      },
    },
    {
      icon: {
        src: ClockUser,
        alt: "Relume logo 2",
      },
      heading: "Flexibility",
      description:
        "We support work-life balance with options for flexible hours and more.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      sx: {
        color: "rgba(2, 74, 176, 1)",
      },
    },
    {
      icon: {
        src: UsersThree,
        alt: "Relume logo 3",
      },
      heading: "Collaboration",
      description:
        "We’re a small team, so every voice matters. Together, we create and innovate.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      sx: {
        color: "rgba(249, 165, 29, 1)",
      },
    },
    {
      icon: {
        src: Cube,
        alt: "Relume logo 3",
      },
      heading: "Transparency",
      description:
        "We also value open communication, keeping everyone informed and involved in key decisions.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      sx: {
        color: " rgba(8, 166, 82, 1)",
      },
    },
    {
      icon: {
        src: Lightbulb,
        alt: "Relume logo 3",
      },
      heading: "Innovation",
      description:
        "Creativity is at our core, and we encourage new ideas to keep us ahead.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      sx: {
        color: "rgba(2, 74, 176, 1)",
      },
    },
    {
      icon: {
        src: Ranking,
        alt: "Relume logo 3",
      },
      heading: "Ownership",
      description:
        "We leverage the latest technology to keep you ahead in the rapidly evolving digital landscape.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
      sx: {
        color: "rgba(249, 165, 29, 1)",
      },
    },
  ],
};
