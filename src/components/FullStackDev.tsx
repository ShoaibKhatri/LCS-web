import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import DataBase from "../assets/images/Database.svg";
import Laptop from "../assets/images/Laptop.svg";
import PencilRuler from "../assets/images/PencilRuler.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type Layout242Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FullStackDev = (props: Layout242Props) => {
  const { sections } = { ...Layout242Defaults, ...props } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center ">
          <div className="rb-12 mb-12 text-center w-full md:mb-18 lg:mb-20">
            <h5
              className="mb-1 font-thin "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Full-Stack Development
            </h5>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              End-to-End Development for
              <span
                className=" ml-2"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Robust Solutions
              </span>
            </h2>
            <p className="md:text-md text-gray-500">
              From backend to frontend, we handle the entire development stack
              for high-performance applications. Customized APIs and
              integrations. Scalable, high-performance architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 lg:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index} className="md:flex ">
                {/* <div className=""> */}
                <img
                  src={section.icon.src}
                  className="size-14 mx-4"
                  alt={section.icon.alt}
                />
                {/* </div> */}
                <div className="">
                  <h3
                    className="mb-5 text-xl font-bold md:mb-6 md:text-2xl"
                    style={{
                      background: colors.themeGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {section.heading}
                  </h3>
                  <p className="mb-5 md:mb-6 text-[16px] text-gray-600">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout242Defaults: Layout242Props = {
  heading: "Long heading is what you see here in this feature section",
  sections: [
    {
      icon: {
        src: DataBase,
        alt: "Relume logo 1",
      },
      heading: "Backend ",
      description:
        "Build secure, scalable server-side solutions.Database design, server management, and data security. Efficient data handling with databases.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: Laptop,
        alt: "Relume logo 2",
      },
      heading: "FrontEnd",
      description:
        "Create dynamic, interactive user interfaces.Responsive & accessible design across devices. Cross-platform design for web & mobile.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: PencilRuler,
        alt: "Relume logo 3",
      },
      heading: "Software Design",
      description:
        "Craft intuitive user interfaces tailored to enhance user experience. Implement design principles for responsive & engaging apps. ",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
