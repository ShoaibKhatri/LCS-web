import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import FrontEnd from "../assets/images/frontEnd.svg";
import BackEnd from "../assets/images/backEnd.svg";
import FullStack from "../assets/images/fullStack.svg";
import MobileApp from "../assets/images/mobileApp.svg";
import LowCode from "../assets/images/lowCode.svg";
import UIUX from "../assets/images/UIUx.svg";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  sections: SectionProps[];
};

export type Layout307Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const WhyChooseAug = (props: Layout307Props) => {
  const { sections } = { ...Layout307Defaults, ...props };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50">
      <div className="container">
        <div className="mb-12  md:mb-18 lg:mb-20 text-center">
          <h5
            className="mb-1 font-thin "
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tech Expertise
          </h5>
          <h2 className="rb-5 mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl">
            Comprehensive
            <span
              className=" ml-2"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IT Staffing Solutions
            </span>
          </h2>
          <p className="md:text-md text-gray-500">
            Delivering tailored IT staffing services to empower your business
            with top-tier talent and unmatched flexibility.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-y-16">
          {sections.map((section, index) => (
            <div key={index} className="text-center">
              <div className="mb-5 md:mb-6">
                <img
                  src={section.image.src}
                  className="rounded-md"
                  alt={section.image.alt}
                />
              </div>
              <h3
                className="mb-3 text-xl font-bold md:mb-4 md:text-2xl leading-6"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {section.heading}
              </h3>
              <p className="text-gray-500">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout307Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  sections: [
    {
      image: {
        src: FullStack,
        alt: "Relume placeholder image 1",
      },
      heading: "Full-Stack Development",
      description: "MERN stack, MEAN stack",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: FrontEnd,
        alt: "Relume placeholder image 2",
      },
      heading: "Frontend Development",
      description: "HTML, CSS, JS, React.js, Vue.js",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: BackEnd,
        alt: "Relume placeholder image 3",
      },
      heading: "Backend Development",
      description: "Node.js, Python, Java, SQL/NoSQL databases",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: MobileApp,
        alt: "Relume placeholder image 4",
      },
      heading: "Mobile App Development",
      description: "Swift, Kotlin, Flutter, React Native",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: LowCode,
        alt: "Relume placeholder image 4",
      },
      heading: "Low-Code Development",
      description: "Mendix, Outsystems, Microsoft PowerApps, Appian, etc",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: UIUX,
        alt: "Relume placeholder image 4",
      },
      heading: "UI/UX Design",
      description: "Web/App design, Responsive layouts, Wireframes, Prototypes",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
