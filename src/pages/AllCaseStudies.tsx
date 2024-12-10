import React from "react";
import { Navbar } from "../components/navbar";
import { AllCaseHero } from "../components/AllCaseHero";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { RxChevronRight } from "react-icons/rx";

const AllCaseStudies = () => {
  const project = [
    {
      id: 1,
      title: "Project name here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      url: "#",
      button: {
        title: "View project",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="text-blue-500" />,
      },
      tags: [
        {
          label: "Tag one",
          url: "#",
        },
        {
          label: "Tag two",
          url: "#",
        },
        {
          label: "Tag three",
          url: "#",
        },
      ],
    },
    {
      id: 2,
      title: "Fairseed - Crowd Funding Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      url: "#",
      button: {
        title: "View project",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="text-blue-500" />,
      },
      tags: [
        {
          label: "Crowd Funding",
          url: "#",
        },
        {
          label: "Tag two",
          url: "#",
        },
        {
          label: "Tag three",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      title: "Fairseed - Crowd Funding Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      url: "#",
      button: {
        title: "View project",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="text-blue-500" />,
      },
      tags: [
        {
          label: "Crowd Funding",
          url: "#",
        },
        {
          label: "Tag two",
          url: "#",
        },
        {
          label: "Tag three",
          url: "#",
        },
      ],
    },
    {
      id: 4,
      title: "Fairseed - Crowd Funding Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      url: "#",
      button: {
        title: "View project",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="text-blue-500" />,
      },
      tags: [
        {
          label: "Crowd Funding",
          url: "#",
        },
        {
          label: "Tag two",
          url: "#",
        },
        {
          label: "Tag three",
          url: "#",
        },
      ],
    },
    {
      id: 5,
      title: "Fairseed - Crowd Funding Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      url: "#",
      button: {
        title: "View project",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="text-blue-500" />,
      },
      tags: [
        {
          label: "Crowd Funding",
          url: "#",
        },
        {
          label: "Tag two",
          url: "#",
        },
        {
          label: "Tag three",
          url: "#",
        },
      ],
    },
    {
      id: 6,
      title: "Fairseed - Crowd Funding Platform",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      url: "#",
      button: {
        title: "View project",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="text-blue-500" />,
      },
      tags: [
        {
          label: "Crowd Funding",
          url: "#",
        },
        {
          label: "Tag two",
          url: "#",
        },
        {
          label: "Tag three",
          url: "#",
        },
      ],
    },
  ];

  const Portfolio5Defaults = {
    tagline: "Featured Projects",
    heading: "Short heading goes here",
    description:
      "From startups to enterprises, we’ve empowered businesses with custom solutions that drive growth and efficiency. Here’s a closer look at some of our successful projects.",
    projects: project,
    button: {
      title: "View all",
      variant: "secondary",
      size: "primary",
    },
  };
  return (
    <div>
      <Navbar />
      <AllCaseHero />
      <FeaturedProjects {...Portfolio5Defaults} />
    </div>
  );
};

export default AllCaseStudies;
