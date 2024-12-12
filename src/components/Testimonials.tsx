/** @format */

import { BiSolidStar } from "react-icons/bi";
import { colors } from "../constants/theme";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonials = (props: Testimonial17Props) => {
  const { heading, description, testimonials, tagline } = {
    ...Testimonial17Defaults,
    ...props,
  } as Props;
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50'>
      <div className='container'>
        <div className='mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20'>
          <p
            className='mb-3 text-[16px] leading-4 font-semibold md:mb-4 '
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tagline}
          </p>
          <h1 className='mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl text-center'>
            What Our
            <span
              className='ml-3'
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clients Say
            </span>
          </h1>
          <p
            className='md:text-md text-blue-50'
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {description}
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: colors.testimonialBg,
              }}
              className='flex w-full flex-col items-start justify-between rounded-xl p-6 md:p-8'
            >
              <div className='mb-5 flex md:mb-6'>
                {Array(testimonial.numberOfStars)
                  .fill(null)
                  .map((_, starIndex) => (
                    <BiSolidStar
                      key={starIndex}
                      style={{
                        background: `${colors.starColor}`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className='mr-1 text-yellow-300  size-6'
                    />
                  ))}
              </div>
              <blockquote className='md:text-md'>
                {testimonial.quote}
              </blockquote>
              <div className='mt-5 flex w-full  flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center'>
                <img
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  className='mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover !md:mb-0 md:mr-4'
                />
                <div className=''>
                  <p
                    className='font-semibold !mb-0'
                    style={{
                      background: colors.themeGradient,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p>
                    <span>{testimonial.position}</span>,{" "}
                    <span>{testimonial.companyName}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults: Testimonial17Props = {
  tagline: "Success Stories",
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};
