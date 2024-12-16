/** @format */

import type { ButtonProps } from "@relume_io/relume-ui";
import SecondaryButton from "../components/secondaryBtn";
import PrimaryBtn from "../components/primaryBtn";
import Arrow from "../assets/images/arrowWhite.svg";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  logos: ImageProps[];
};

export type Cta33Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Partnering = (props: Cta33Props) => {
  const { description, logos } = {
    ...Cta33Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="mx-auto w-full text-center">
            <p
              className="mb-3 text-[16px] leading-4 font-semibold md:mb-4 "
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to Transform Your Business?
            </p>
            <h1 className="mb-5 mr-2 text-3xl font-extrabold md:mb-6 md:text-6xl lg:text-7xl">
              Partner with LCS And
              <span
                className={` ml-2 `}
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Unlock Your Full Potential
              </span>
            </h1>
            <p className="md:text-md text-gray-500">{description}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <PrimaryBtn variant="primary" path="services">
                Learn More
                <img src={Arrow} className="ml-2 inline-block" alt="" />
              </PrimaryBtn>
              <SecondaryButton
                variant="transparent"
                color="blue"
                sx={{
                  color: colors.blue500,
                  border: `1px solid ${colors.blue500}`,
                }}
                path="/contact"
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-3 text-[16px] leading-4 font-semibold md:mb-4">
            Partnering with industry experts, we bring you the best resources
            and insights tailored to your needs.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 md:max-h-14"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Cta33Defaults: Cta33Props = {
  heading: "Partner with LCS and unlock your full potential",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  logos: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 3",
    },
  ],
};
