import type { ButtonProps } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";
import Arrow from "../assets/images/arrowWhite.svg";
import AboutHeroTop from "../assets/images/AboutHeroTop.svg";
import AboutHeroBottom from "../assets/images/AboutHeroBottom.svg";
import Earth from "../assets/images/InterconnectedEarth.svg";
import SecondaryButton from "../components/secondaryBtn";
import PrimaryBtn from "../components/primaryBtn";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  title?: string;
  title1?: string;
  title1Gradient?: string;
  title2?: string;
  title2Gradient?: string;
  description: string;
  buttons: ButtonProps[];
  firstImage: ImageProps;
  secondImage: ImageProps;
  thirdImage: ImageProps;
};

export type Header129Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AboutHero = (props: Header129Props) => {
  const {
    description,
    firstImage,
    secondImage,
    thirdImage,
    title,
    title1,
    title1Gradient,
    title2,
    title2Gradient,
  } = {
    // ...Header129Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[7.9%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 md:gap-16">
          <div>
            <h5
              className="mb-1 font-thin "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h5>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
              {title1}
              <span
                className=" ml-2"
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {title1Gradient}
              </span>
            </h2>
            {title2 && (
              <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
                {title2}
                <span
                  className="ml-3"
                  style={{
                    background: colors.themeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {title2Gradient}
                </span>
              </h2>
            )}

            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <PrimaryBtn variant="primary">
                Get Started
                <img src={Arrow} className="inline-block ml-2 " alt="" />
              </PrimaryBtn>
              <SecondaryButton
                color="blue"
                variant="transparent"
                sx={{
                  color: colors.blue500,
                  border: `1px solid ${colors.blue500}`,
                }}
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="absolute bottom-[10%] left-0 w-[35%]">
              <img
                src={AboutHeroBottom}
                className="aspect-square size-full rounded-md object-cover"
                alt={firstImage.alt}
              />
            </div>
            <div className="mx-[10%] w-full">
              <img
                src={Earth}
                className="aspect-square size-full object-cover"
                alt={secondImage.alt}
              />
            </div>
            <div className="absolute right-0 top-[10%] w-2/5">
              <img
                src={AboutHeroTop}
                className="aspect-[3/2] size-full rounded-md object-cover"
                alt={thirdImage.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
