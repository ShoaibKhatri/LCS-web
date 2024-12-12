/** @format */

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";
import viewMore from "../assets/images/DownArrow.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  alt?: string;
};

type Tag = {
  label: string;
  url: string;
};

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: ImageProps;
  url: string;
  button: ButtonProps;
  tags: Tag[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type Portfolio5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FeaturedProjects = (props: Portfolio5Props) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(2);
  const location = useLocation();

  const { tagline, description, projects } = {
    ...props,
  } as Props;

  console.log(projects);

  const isAllVisible = visibleCount >= projects.length;

  return (
    <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50'>
      <div className='container'>
        <header className='mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20'>
          <p
            className='mb-3 font-semibold md:mb-4'
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {tagline}
          </p>
          <h2 className='rb-5 mb-5 text-4xl font-extrabold md:mb-6 md:text-6xl lg:text-8xl'>
            Case
            <span
              className=' ml-2'
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Studies
            </span>
          </h2>
          <p className='md:text-md text-gray-500'>{description}</p>
        </header>
        <div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12'>
          {location.pathname === "/portfolio"
            ? projects
                .slice(0, visibleCount)
                .map((project, index) => <Project key={index} {...project} />)
            : projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
        </div>
        <footer className='mt-12 flex justify-center md:mt-18 lg:mt-20'>
          {!isAllVisible && location.pathname === "/portfolio" ? (
            <Button
              className=' p-3 bg-transparent border  rounded-xl border-blue-500'
              style={{
                background: colors.themeGradient, // Gradient background
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              onClick={() => setVisibleCount(visibleCount + 2)}
            >
              View More
              <img
                src={viewMore}
                className='size-5 inline-block ml-2 '
                alt=''
              />
            </Button>
          ) : (
            ""
          )}

          {isAllVisible && location.pathname === "/portfolio" ? (
            <div className='mt-8 text-center '>
              <Button
                className='p-3 bg-transparent border  rounded-xl border-blue-500'
                style={{
                  background: colors.themeGradient, // Gradient background
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                onClick={() => navigate("/CaseStudies")}
              >
                View All
                <img
                  src={viewMore}
                  className='size-5 inline-block ml-2 -rotate-90'
                  alt=''
                />
              </Button>
            </div>
          ) : (
            ""
          )}
        </footer>
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  image,
  url,
  button,
  tags,
}) => (
  <article>
    <div className='mb-5 md:mb-6'>
      <a href={url}>
        <img
          src={image.src}
          className='w-full object-cover rounded-2xl'
          alt={image.alt}
        />
      </a>
    </div>
    <h3 className='mb-2 text-xl font-bold md:text-2xl'>
      <a href={url}>{title}</a>
    </h3>
    <p>{description}</p>
    <ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
      {tags.map((tag, index) => (
        <li key={index} className='flex'>
          <a
            href={tag.url}
            className='bg-background-secondary px-2 py-1 text-sm font-semibold'
          >
            {tag.label}
          </a>
        </li>
      ))}
    </ul>
    <Button
      {...button}
      asChild
      className='mt-5 md:mt-6'
      style={{
        background: colors.themeGradient, // Gradient background
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      onClick={() => console.log(id)}
    >
      <Link to={`/CaseStudies/${id}`} state={{ id, description, image }}>
        {button.title}
      </Link>
    </Button>
  </article>
);
