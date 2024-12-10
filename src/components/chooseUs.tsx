import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import ChartLineUp from "../assets/images/ChartLineUp.svg";
import Coins from "../assets/images/Coins.svg";
import UsersThree from "../assets/images/UsersThree.svg";
import DesktopTower from "../assets/images/DesktopTower.svg";
import Lightbulb from "../assets/images/Lightbulb.svg";
import Headset from "../assets/images/Headset.svg";
import BottomRightWhy from "../assets/images/BottonRightPatternWhy.svg";
import TopLeftWhy from "../assets/images/TopLeftPatternWhy.svg";

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

export const ChooseUs = (props: Layout396Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout396Defaults,
    ...props,
  } as Props;
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #3B82F6 0%, #114FD7 100%)",
      }}
      id="relume"
      className="relative lg:px-[13%] py-16 px-10 md:py-24 lg:py-28"
    >
      <img
        className="hidden md:block absolute left-1 top-1 "
        src={TopLeftWhy}
        alt=""
      />
      <img
        className="hidden md:block absolute bottom-30 right-1 w-[250px] h-[250px]"
        src={BottomRightWhy}
        alt=""
      />
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 text-white">{tagline}</p>
          <h1 className="mb-5 text-5xl text-white font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md text-white">{description}</p>
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
  <div
    className="shadow-custom hover:cursor-pointer hover:shadow-hover transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col justify-center rounded-[20px] border-border-primary p-6 md:p-8"
    style={{
      background: "linear-gradient(73.88deg, #EFF6FF 0.01%, #BFDBF5 99.88%)",
    }}
  >
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
    {/* <div className="mt-5 md:mt-6">
      <Button {...featureSection.button}>{featureSection.button.title}</Button>
    </div> */}
  </div>
);

export const Layout396Defaults: Layout396Props = {
  tagline: "Why LowCoSys",
  heading: "Why Choose Us",
  description:
    "At LCS, we thrive ourselves on delivering results that matter. Our team is dedicated to providing high-productivity solutions that reduce costs while leveraging cutting-edge tech. With our expert team by your side, you'll enjoy customized solutions tailored to your business needs, all backed by continuous support.",
  featureSections: [
    {
      icon: {
        src: ChartLineUp,
        alt: "Relume logo 1",
      },
      heading: "High Productivity",
      description:
        "Our streamlined processes ensure maximum efficiency & deliver results faster than industry standards.",
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
        src: Coins,
        alt: "Relume logo 2",
      },
      heading: "Lower Expenditure",
      description:
        "We provide innovative and cost-effective solutions to help save resources and achieve your business goals.",
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
      heading: "Team Of Experts",
      description:
        "Our skilled professionals bring years of experience and industry knowledge to every project.",
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
        src: DesktopTower,
        alt: "Relume logo 3",
      },
      heading: "Cutting-Edge Technology",
      description:
        "We leverage the latest tools and technology to keep you ahead in the rapidly evolving digital landscape.",
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
      heading: "Tailored Solutions",
      description:
        "We customize our services to meet your every unique business needs, ensuring the perfect fit every time.",
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
        src: Headset,
        alt: "Relume logo 3",
      },
      heading: "Continuous Support",
      description:
        "Our dedicated and experienced team provides ongoing support to ensure smooth operation and lasting success.",
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
