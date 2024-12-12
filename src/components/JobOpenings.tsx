/** @format */

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { LuMapPin } from "react-icons/lu";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import { colors } from "../constants/theme";
import SecondaryButton from "../components/secondaryBtn";

type PositionProps = {
  url: string;
  title: string;
  department: string;
  description: string;
  location: string;
  contractType: string;
  experience: string;
  button: ButtonProps;
};

type PositionCardProps = {
  position: PositionProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  positions: PositionProps[];
};

export type Career11Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const JobOpenings = (props: Career11Props) => {
  const { tagline, description, positions } = {
    ...Career11Defaults,
    ...props,
  } as Props;
  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50'>
      <div className='container '>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 md:gap-16'>
          {/* First Column */}
          <div className='lg:sticky lg:top-20 self-start'>
            <h5
              className='mb-1 font-thin'
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {tagline}
            </h5>
            <h2 className='rb-5 mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl'>
              We’re Looking for
              <span
                className='ml-2 block'
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Talent
              </span>
            </h2>
            <p className='md:text-md text-gray-500'>{description}</p>
          </div>

          {/* Second Column */}
          <div>
            {positions.map((position, index) => (
              <PositionCard key={index} position={position} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PositionCard: React.FC<PositionCardProps> = ({ position }) => {
  return (
    <div className='border-none bg-brand-white rounded-xl p-6 md:py-8 m-6'>
      <div className='mb-3 flex items-center justify-between gap-4 md:mb-4'>
        <a href={position.url}>
          <h3
            className='text-xl font-bold md:text-2xl'
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {position.title}
          </h3>
        </a>
        <p className='bg-blue-50 text-gray-400 px-2 py-1 text-sm font-semibold'>
          {position.department}
        </p>
      </div>
      <p className='mb-5 md:mb-6 text-gray-600'>{position.description}</p>
      <div className='flex flex-wrap gap-y-3'>
        <div className='mr-6 flex items-center'>
          <div className='mr-3 flex-none'>
            <LuMapPin className='flex size-6 flex-col items-center justify-center text-blue-600' />
          </div>
          <span className='md:text-md'>{position.location}</span>
        </div>
        <div className='mr-6 flex items-center'>
          <div className='mr-3 flex-none'>
            <MdAccessTime className='flex size-6 flex-col items-center justify-center text-blue-600' />
          </div>
          <span className='md:text-md'>{position.contractType}</span>
        </div>
        <div className='mr-6 flex items-center'>
          <div className='mr-3 flex-none'>
            <PiSuitcaseSimpleBold className='flex size-6 flex-col items-center justify-center text-blue-600' />
          </div>
          <span className='md:text-md'>{position.experience}</span>
        </div>
      </div>
      <div className='mt-6 md:mt-8'>
        {/* <Button {...position.button} asChild>
          <a href={position.url}>{position.button.title}</a>
        </Button> */}
        <SecondaryButton
          color='blue'
          variant='transparent'
          sx={{
            color: colors.blue500,
            border: `1px solid ${colors.blue500}`,
          }}
        >
          Apply
        </SecondaryButton>
      </div>
    </div>
  );
};

const position = {
  url: "#",
  title: "Job Title",
  department: "Department",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  location: "Location",
  contractType: "Contract Type",
  experience: "3-4 years experience",
  button: {
    title: "Apply Now",
    variant: "secondary",
    size: "sm",
  },
};

export const Career11Defaults: Career11Props = {
  tagline: "Current Openings",
  heading: "Open Positions",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  positions: [position, position, position, position, position],
};
