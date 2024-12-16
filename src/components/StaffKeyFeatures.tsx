import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import ChartLineUp from "../assets/images/ChartLineUpBlue.svg";
import HandCoins from "../assets/images/HandCoins.svg";
import HandShake from "../assets/images/Handshake.svg";
import Magnifying from "../assets/images/MagnifyingGlass.svg";
import RocketLaunch from "../assets/images/RocketLaunch.svg";
import SheildCheck from "../assets/images/ShieldCheck.svg";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  icon: ImageProps;
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  featureSections: FeatureSectionProps[];
};

export type Layout353Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const StaffKeyFeatures = (props: Layout353Props) => {
  const { tagline, heading, description, buttons, featureSections } = {
    ...Layout353Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <h5
              className="mb-1 font-thin leading-6"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              KEY FEATURES
            </h5>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              <span
                className=" ml-2"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Key Features{" "}
              </span>
              Of Our Services
            </h2>
            <p className="md:text-md text-gray-500 text-[16px]">
              {description}
            </p>
          </div>
          <div>
            {featureSections.map((section, index) => (
              <div
                key={index}
                className="sticky mb-8 border border-gray-200 rounded-md bg-background-primary p-8"
                style={{ top: `${30 + index * 2}%` }}
              >
                <div className="mb-3 md:mb-4">
                  <img
                    src={section.icon.src}
                    alt={section.icon.alt}
                    className="size-12"
                  />
                </div>
                <h3
                  className="mb-3 text-xl font-bold md:mb-4 md:text-2xl"
                  style={{
                    background: colors.themeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {section.title}
                </h3>
                <p className="text-gray-500 text-[16px]">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout353Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Discover the powerful features and unique advantages that set our services apart, designed to accelerate your business growth, enhance efficiency, and drive innovation.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  featureSections: [
    {
      icon: {
        src: ChartLineUp,
        alt: "Relume logo 1",
      },
      title: "Scalability",
      description:
        "Rapidly align resources with evolving business needs, ensuring your team stays agile, efficient, and ready to tackle new challenges at any stage of growth.",
    },
    {
      icon: {
        src: HandCoins,
        alt: "Relume logo 2",
      },
      title: "Cost Optimization",
      description:
        "Quickly align resources with shifting business needs, providing the flexibility and expertise to adapt and stay ahead in a dynamic marketplace.",
    },
    {
      icon: {
        src: HandShake,
        alt: "Relume logo 3",
      },
      title: "Flexible engagement  models",
      description:
        "Choose from full-time, part-time, or project-specific staffing solutions tailored to meet your exact needs and drive success at every stage of your project.",
    },
    {
      icon: {
        src: Magnifying,
        alt: "Relume logo 4",
      },
      title: "Specialized Expertise",
      description:
        "Gain access to a global talent pool with expertise in emerging technologies, ensuring your team is equipped with the latest skills to drive innovation and success.",
    },
    {
      icon: {
        src: RocketLaunch,
        alt: "Relume logo 4",
      },
      title: "Faster Time-to-Market",
      description:
        "Deploy pre-vetted, highly qualified professionals quickly to ensure your projects stay on track and meet critical deadlines with efficiency and expertise.",
    },
    {
      icon: {
        src: SheildCheck,
        alt: "Relume logo 4",
      },
      title: "Risk Mitigation  Strategies",
      description:
        "Ensure full compliance with both regional and international standards, safeguarding your business against risks while maintaining operational excellence across all markets.",
    },
  ],
};
