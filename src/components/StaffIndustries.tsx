import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import Magnifying from "../assets/images/MagnifyingGlass.svg";
import SheildCheck from "../assets/images/ShieldCheck.svg";
import Monitor from "../assets/images/Monitor.svg";
import Globe from "../assets/images/Globe.svg";
import { colors } from "../constants/theme";
import StaffIndustriesImg from "../assets/images/StaffIndustries.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  leftSections: SectionProps[];
  rightSections: SectionProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout254Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const StaffIndustries = (props: Layout254Props) => {
  const { description, leftSections, rightSections, image } = {
    ...props,
    ...Layout254Defaults,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto  text-center">
            <h5
              className="mb-1 font-thin leading-6 "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              INDUSTRIES
            </h5>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              Catering to
              <span
                className=" ml-2"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Diverse Business Verticals
              </span>
            </h2>
            <p className="md:text-md text-gray-500 text-[18px]">
              {description}
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <FeatureSection sections={leftSections} />
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto w-full object-cover rounded-lg"
            />
          </div>
          <FeatureSection sections={rightSections} />
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ sections }: { sections: SectionProps[] }) => (
  <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
    {sections.map((section, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        <div className="mb-5 md:mb-6">
          <img
            src={section.icon.src}
            className="size-12"
            alt={section.icon.alt}
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
          {section.heading}
        </h3>
        <p className="text-gray-500 text-[16px]">{section.description}</p>
      </div>
    ))}
  </div>
);

export const Layout254Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Our expertise spans a wide range of industries. Whether you’re in healthcare, eCommerce, education, or beyond, LCS understands your challenges and delivers innovative digital solutions to accelerate growth, streamline operations and improve efficiency.",
  leftSections: [
    {
      icon: {
        src: Magnifying,
        alt: "Relume logo 1",
      },
      heading: "Healthcare",
      description:
        "Secure patient portals, telehealth  platforms, EMR solutions.",
    },
    {
      icon: {
        src: SheildCheck,
        alt: "Relume logo 2",
      },
      heading: "eCommerce",
      description: "Scalable storefronts, payment  integration, enhanced UX.",
    },
  ],
  rightSections: [
    {
      icon: {
        src: Monitor,
        alt: "Relume logo 3",
      },
      heading: "Manufacturing",
      description:
        "Implement IoT-based solutions  for supply chain automation.",
    },
    {
      icon: {
        src: Globe,
        alt: "Relume logo 4",
      },
      heading: "Education",
      description: "Virtual classrooms, LMS, AI-driven  learning tools.",
    },
  ],
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
    src: StaffIndustriesImg,
    alt: "Relume placeholder image",
  },
};
