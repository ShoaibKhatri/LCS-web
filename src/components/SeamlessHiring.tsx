import CheckCircle from "../assets/images/CheckCircle.svg";
import SketchLogo from "../assets/images/SketchLogo.svg";
import SeamlessImg from "../assets/images/SeamlessImg.svg";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
  icon: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
  subHeadings: SubHeadingProps[];
};

export type Layout203Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const SeamlessHiring = (props: Layout203Props) => {
  const { description, image, subHeadings } = {
    ...Layout203Defaults,
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
            <h5
              className="mb-1 font-thin "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Integration & Automation
            </h5>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              Empowering Teams with
              <span
                className=" ml-2"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Agile Talent Solutions
              </span>
            </h2>
            <p className="mb-6 md:mb-8 md:text-md text-gray-500">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <img
                      src={subHeading.icon.src}
                      className="size-12"
                      alt={subHeading.icon.alt}
                    />
                  </div>
                  <h6
                    className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl"
                    style={{
                      background: colors.themeGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {subHeading.title}
                  </h6>
                  <p className="text-gray-500">{subHeading.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout203Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "IT Staff Augmentation is a strategic approach where external talent is seamlessly integrated into your in-house team to  meet evolving project requirements.",
  image: {
    src: SeamlessImg,
    alt: "Relume placeholder image",
  },
  subHeadings: [
    {
      icon: {
        src: SketchLogo,
        alt: "Relume logo 1",
      },
      title: "Unique Attributes",
      description:
        "Bridge skill gaps for niche technologies. Scale teams dynamically for project-specific needs. Reduce overhead costs without compromising expertise.",
    },
    {
      icon: {
        src: CheckCircle,
        alt: "Relume logo 2",
      },
      title: "Essential For",
      description:
        "Supports innovation without long-term commitments. Empowers businesses to focus on core competencies while we handle staffing needs.",
    },
  ],
};
