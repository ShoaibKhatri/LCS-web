/** @format */

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { colors } from "../constants/theme";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  teamMembers: TeamMember[];
};

export type Team19Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AboutTeam = (props: Team19Props) => {
  const { tagline, heading, description, button, teamMembers } = {
    ...Team19Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start md:grid-flow-row lg:grid-cols-[.5fr_1fr] md:gap-x-12 lg:gap-x-20">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p
            className="mb-3 font-semibold md:mb-4 text-[12px"
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {tagline}
          </p>
          <h2 className="rb-5 mb-5 text-3xl font-extrabold md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="md:text-md text-gray-500">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Link to="/careers">
              <Button {...button}>{button.title}</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 md:gap-y-16 lg:gap-x-12 lg:grid-cols-1">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-5 md:mb-6">
        <img
          src={member.image.src}
          alt={member.image.alt}
          className="size-20 min-h-20 min-w-20 rounded-full object-cover"
        />
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
        <h6
          className="md:text-md"
          style={{
            background: colors.themeGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          {member.jobTitle}
        </h6>
      </div>
      <p>{member.description}</p>
      <div className="mt-6 flex gap-3.5">
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href} className="text-blue-500">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const teamMembers: TeamMember[] = [
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Person 1",
    },
    name: "Dr. Mohemmed Suleman Shaikh",
    jobTitle: "Founder & CEO",
    description:
      "As the CEO of Low Code Systems & COO at Assetify, Dr. Mohemmed Suleman has also specialized in low-code development services, fintech and digital transformation. His leadership focuses on delivering high-performance, scalable software solutions.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
  {
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Person 2",
    },
    name: "Khizer Shaikh",
    jobTitle: "CTO",
    description:
      "Founder & Director at Fladdra Technologies, Mr. Khizer Shaikh is a tech entrepreneur and former Head of India Operations at APSIS, known for his innovative approach in full-stack development, cybersecurity and automation.",
    socialLinks: [
      { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
      { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
      { href: "#", icon: <BiLogoDribbble className="size-6" /> },
    ],
  },
];

export const Team19Defaults: Team19Props = {
  tagline: "Meet the Team",
  heading: "The People Behind the Solutions",
  description:
    "Our diverse team of experts brings a unique blend of experience & creativity to every project.",
  button: { title: "Open positions", variant: "secondary" },
  teamMembers: teamMembers,
};
