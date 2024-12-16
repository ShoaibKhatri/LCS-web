import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { colors } from "../constants/theme";
import Imgage105 from "../assets/images/image 105.png";
import Imgage103 from "../assets/images/image 103.png";
import Imgage104 from "../assets/images/image 104.png";
import Imgage106 from "../assets/images/image 106.png";

type ImageProps = {
  src: string;
  alt?: string;
};

type Card = {
  tagline: string;
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  cards: Card[];
};

export type Layout399Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Support = (props: Layout399Props) => {
  const { tagline, heading, description, cards } = {
    ...Layout399Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h5
              className="mb-1 pt-4 md:pt-0 font-thin leading-6 "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              END TO END SUPPORT
            </h5>
            <p className="text-4xl !mb-0 font-extrabold md:text-6xl lg:text-8xl leading-6">
              Ensuring Success
              <span
                className=" ml-2"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                At Every Stage
              </span>
            </p>
            <p className="md:text-md text-gray-500 leading-6">{description}</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = (card: Card) => {
  return (
    <div
      className="flex flex-col border border-gray-200 rounded-md"
      style={{
        boxShadow: "0px 20px 24px -4px rgba(0, 0, 0, 0.08)",
        background: "rgba(249, 250, 251, 1)",
      }}
    >
      <div className="flex flex-1 flex-col justify-center p-6">
        <div>
          <h3
            className="mb-2 text-lg font-bold  md:text-2xl leading-6"
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {card.heading}
          </h3>
          <p className="text-gray-500">{card.description}</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center self-start">
        <img src={card.image.src} alt={card.image.alt} className="rounded-md" />
      </div>
    </div>
  );
};

export const Layout399Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description:
    "We provide dedicated guidance and expertise throughout the entire project lifecycle to ensure optimal results and sustained success.",
  cards: [
    {
      tagline: "Tagline",
      image: {
        src: Imgage103,
        alt: "Relume placeholder image 1",
      },
      heading: "Transparent Hiring Process",
      description:
        "We implement thorough screening procedures to find the ideal talent or your project.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: Imgage104,
        alt: "Relume placeholder image 2",
      },
      heading: "Seamless Onboarding  Experience",
      description:
        "Our comprehensive onboarding process ensures a smooth transition for new team members.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: Imgage105,
        alt: "Relume placeholder image 3",
      },
      heading: "Performance Monitoring",
      description:
        "We utilize tools like Trello and Monday.com to track progress and identify areas for improvement.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: Imgage106,
        alt: "Relume placeholder image 4",
      },
      heading: "Regular Feedback & Alignment",
      description:
        "We prioritize open communication and regular feedback sessions to ensure goals are met.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
