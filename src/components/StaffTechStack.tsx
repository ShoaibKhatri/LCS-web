import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import Code from "../assets/images/Code.svg";
import CloudArrowUp from "../assets/images/CloudArrowUp.svg";
import FrameCorners from "../assets/images/FrameCorners.svg";
import Circuitry from "../assets/images/Circuitry.svg";
import StaffTechImg from "../assets/images/staffTechImg.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  buttons: ButtonProps[];
  image: ImageProps;
  features: FeaturesProps[];
};

export type Layout220Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const StaffTechStack = (props: Layout220Props) => {
  const { image, features } = {
    ...Layout220Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src={image.src}
              className="w-full object-cover rounded-lg"
              alt={image.alt}
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <img
                      src={feature.icon.src}
                      className="size-12"
                      alt={feature.icon.alt}
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    {feature.heading}
                  </h3>
                  <p className="text-gray-500 text-[16px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout220Defaults: Props = {
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
    src: StaffTechImg,
    alt: "Relume placeholder image",
  },
  features: [
    {
      icon: {
        src: Code,
        alt: "Relume logo 1",
      },
      heading: "Programming",
      description:
        "Leverage our expertise in Python, Java, C#, and .NET to build robust, scalable, and efficient solutions.",
    },
    {
      icon: {
        src: CloudArrowUp,
        alt: "Relume logo 2",
      },
      heading: "Cloud Platforms",
      description:
        "Our team brings advanced proficiency in AWS, Azure, and Google Cloud, offering efficient cloud solutions. ",
    },
    {
      icon: {
        src: FrameCorners,
        alt: "Relume logo 3",
      },
      heading: "Front-End",
      description:
        "Harness our mastery in React, Angular, and Vue.js to create dynamic web sites that deliver exceptional performance.",
    },
    {
      icon: {
        src: Circuitry,
        alt: "Relume logo 4",
      },
      heading: "Emerging Tech",
      description:
        "Leverage our specialization in AI/ML, Blockchain, and IoT to drive innovation and build cutting-edge solutions.",
    },
  ],
};
