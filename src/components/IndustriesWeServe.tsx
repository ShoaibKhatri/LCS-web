/** @format */

import { Button, ButtonProps } from "@relume_io/relume-ui";
import { colors } from "../constants/theme";
import heartbeat from "../assets/images/Heartbeat.svg";
import ShoppingCartSimple from "../assets/images/ShoppingCartSimple.svg";
import GraduationCap from "../assets/images/GraduationCap.svg";
import HandHeart from "../assets/images/HandHeart.svg";
import DesktopTowerBlue from "../assets/images/DesktopTowerBlue.svg";
import Gear from "../assets/images/Gear.svg";
import SneakerMove from "../assets/images/SneakerMove.svg";
import ForkKnife from "../assets/images/ForkKnife.svg";
import HardHat from "../assets/images/HardHat.svg";
import Grains from "../assets/images/Grains.svg";
import Airplane from "../assets/images/Airplane.svg";
import UserGear from "../assets/images/UserGear.svg";
import { RxChevronRight } from "react-icons/rx";
import useFetch from "../hooks/useFetch";

type ImageProps = {
  src?: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
};

type CoreServices = {
  point: string;
};

type Challenges = {
  point: string;
};

type IndustryListProps = {
  id?: number;
  img?: ImageProps;
  description?: string;
  button?: ButtonProps;
  link?: string;
  coreServices?: CoreServices[];
  challenges?: Challenges[];
};

type Props = {
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
  image: ImageProps;
  industryList: IndustryListProps[];
  coreServices: CoreServices[];
  challenges: Challenges[];
};

export type Layout6Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const IndustriesWeServe = (props: Layout6Props) => {
  const { industryList = IndustryList } = {
    ...Layout6Defaults,
    ...props,
  } as Props;

  const { data } = useFetch<any>("/portfoliopage/industries/");

  const handleScroll = (id: number): void => {
    const section = document.getElementById(id.toString());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id='relume' className=' py-16 md:py-24 lg:py-28'>
      <div className='bg-blue-50'>
        <div className='container'>
          <div className=' p-5 my-10'>
            {/* Heading Section */}
            <div className='mx-auto mb-12 w-full  text-center md:mb-18 lg:mb-20'>
              <p
                className={`mb-3 font-semibold md:mb-4 `}
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Industries We Serve
              </p>
              <h1 className='mb-5 mr-2 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
                Industries We{" "}
                <span
                  className={` ml-2 `}
                  style={{
                    background: colors.themeGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Aim to Transform
                </span>
              </h1>
              <p className='md:text-sm text-gray-500'>
                Our expertise spans a wide range of industries. Whether you’re
                in healthcare, retail, education, or beyond, LCS understands
                your challenges and delivers innovative digital solutions to
                accelerate growth, streamline operations and improve efficiency.
              </p>
            </div>

            {/* Industry list */}

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
              {industryList?.map((industry, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center bg-transparent p-6 md:p-8'
                >
                  <div className=''>
                    <div className='rb-5 mb-5 md:mb-6'>
                      <img src={industry.img?.src} className='size-12' alt='' />
                    </div>
                    <div className='mt-5 md:mb-6 '>
                      <Button
                        key={index}
                        {...industry.button}
                        onClick={() =>
                          industry.id !== undefined && handleScroll(industry.id)
                        }
                      >
                        {industry.button?.title}
                      </Button>
                    </div>
                    <p className='text-gray-500 text-[16px] w-full sm:w-[32]  truncate '>
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specific Industry */}
      {data?.map((industry: any, index: number) => (
        <div
          className='container'
          id={industry.id !== undefined ? String(industry.id) : undefined}
        >
          <div
            onClick={() => console.log(industry.image)}
            // className={`grid grid-cols-1 ${
            //   index % 2 === 0 ? "" : ""
            // } gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 my-12`}
            className={`flex md:flex-row mb-10  flex-col items-center justify-center lg:my-20  ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            } mx-6 my8`}
          >
            <div className=' m-6 w-full md:w-1/2'>
              <h1
                className='rb-5 mb-5 text-3xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-6xl'
                style={{
                  background: colors.themeGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {industry.name}
              </h1>
              <div className='grid grid-cols-1 gap-6 py-2 sm:grid-cols-2'>
                <div>
                  <h3
                    className='text-[18px]  mb-4'
                    style={{
                      background: colors.themeGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Core Services
                  </h3>
                  <ul className='list-disc ml-6 text-gray-500'>
                    {industry.core_services?.map(
                      (coreService: any, index: number) => (
                        <li className='mb-3 text-md  leading-[1] md:mb-4 '>
                          {coreService}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3
                    className='text-[18px] mb-4'
                    style={{
                      background: colors.themeGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Unique Challenges
                  </h3>
                  <ul className='list-disc ml-6 text-gray-500'>
                    {industry.unique_challenges?.map(
                      (challenge: any, index: number) => (
                        <li className='mb-3 text-md leading-[1] md:mb-4 '>
                          {challenge}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <img
                src={`https://aliasgarkachwala.pythonanywhere.com/${industry.image}`}
                className='size-full rounded-md object-cover'
                alt=''
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export const Layout6Defaults: Layout6Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  subHeadings: [
    {
      title: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      title: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};

export const IndustryList: IndustryListProps[] = [
  {
    id: 1,
    img: {
      src: heartbeat,
      alt: "Relume placeholder image",
    },
    description:
      "Transform healthcare with secure, patient-centric technology designed for digital healthcare solutions. Our healthcare digital transformation services enable healthcare providers to streamline operations, safeguard data, and prioritize patient care.",
    button: {
      title: "Healthcare",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Secure healthcare solutions",
      },
      {
        point: "Patient portals",
      },
      {
        point: "Patient portals",
      },
      {
        point: "Data management",
      },
    ],
    challenges: [
      {
        point: "Ensuring patient data security",
      },
      {
        point: "Integrating health records",
      },
      {
        point: "Complying with regulatory standards",
      },
    ],
  },
  {
    id: 2,
    img: {
      src: ShoppingCartSimple,
      alt: "Relume placeholder image",
    },
    description:
      "Enhance your retail business with scalable eCommerce solutions designed to boost customer experience. Our eCommerce customer experience tools create personalized shopping experiences while streamlining operations, making your business adaptable to evolving consumer needs.",
    button: {
      title: "Retail & eCommerce",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Personalized retail platforms",
      },
      {
        point: "Inventory management",
      },
      {
        point: "Payment gateways",
      },
      {
        point: "User personalization ",
      },
      {
        point: "Mobile optimization ",
      },
    ],
    challenges: [
      {
        point: "Managing inventory",
      },
      {
        point: "Delivering seamless online experiences",
      },
      {
        point: "Adapting to fast-changing consumer trends.",
      },
    ],
  },
  {
    id: 3,
    img: {
      src: GraduationCap,
      alt: "Relume placeholder image",
    },
    description:
      "Empower learning through digital solutions that engage and connect. Our digital learning platforms and seamless student engagement tools provide education technology solutions that support educators and students in a dynamic, user-friendly environment.",
    button: {
      title: "Education & eLearning",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Virtual classrooms",
      },
      {
        point: "Learning Management Systems",
      },
      {
        point: "Student data analytics",
      },
    ],
    challenges: [
      {
        point: "Increasing engagement",
      },
      {
        point: "Supporting various learning styles",
      },
      {
        point: "Ensuring platform scalability",
      },
    ],
  },
  {
    id: 4,
    img: {
      src: HandHeart,
      alt: "Relume placeholder image",
    },
    description:
      "Leverage digital tools for nonprofits to drive impactful change. Our non-profit digital transformation services offer community-focused tech solutions that streamline operations, manage volunteers, and enhance donor engagement.",
    button: {
      title: "Non-Profit & NGOs",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Donor management systems",
      },
      {
        point: "Online donation platforms",
      },
      {
        point: "Event registration",
      },
      {
        point: "Outreach automation",
      },
    ],
    challenges: [
      {
        point: "Managing tight budgets",
      },
      {
        point: "Improving donor retention",
      },
      {
        point: "Coordinating volunteer efforts",
      },
      {
        point: "Tracking funding impact effectively",
      },
    ],
  },
  {
    id: 5,
    img: {
      src: Gear,
      alt: "Relume placeholder image",
    },
    description:
      "Enhance productivity and efficiency in manufacturing with our digital manufacturing solutions and smart factory technology. Our tools enable data-driven decision-making, helping you modernize operations and maximize output.",
    button: {
      title: "Manufacturing",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Smart manufacturing platforms",
      },
      {
        point: "Workflow automation",
      },
      {
        point: "Predictive maintenance",
      },
    ],
    challenges: [
      {
        point: "Optimizing production processes",
      },
      {
        point: "Maintaining product quality",
      },
      {
        point: "Managing supply chains effectively",
      },
    ],
  },
  {
    id: 6,
    img: {
      src: DesktopTowerBlue,
      alt: "Relume placeholder image",
    },
    description:
      "Drive business growth with innovative tech solutions that scale with your needs. Our next-gen technology platforms and dynamic solutions help you stay competitive and adapt to the rapidly changing tech landscape.",
    button: {
      title: "Technology",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Cloud integration",
      },
      {
        point: "Infrastructure management",
      },
      {
        point: "API integrations",
      },
    ],
    challenges: [
      {
        point: "Meeting tech standards",
      },
      {
        point: "Data privacy and security",
      },
      {
        point: "Achieving seamless integration",
      },
    ],
  },
  {
    id: 7,
    img: {
      src: SneakerMove,
      alt: "Relume placeholder image",
    },
    description:
      "Engage your members with fitness digital platforms tailored for health and wellness. Our customized sports tech solutions and wellness engagement platforms enhance user experiences and simplify management for fitness facilities.",
    button: {
      title: "Sports & Fitness",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Membership management",
      },
      {
        point: "Mobile apps",
      },
      {
        point: "Scheduling tools",
      },
    ],
    challenges: [
      {
        point: "Managing class schedules",
      },
      {
        point: "Improving member engagement",
      },
      {
        point: "Supporting user progress",
      },
    ],
  },
  {
    id: 8,
    img: {
      src: ForkKnife,
      alt: "Relume placeholder image",
    },
    description:
      "Transform guest experiences with digital solutions for hospitality. Our tech solutions for hotels and restaurants focus on streamlining operations, enhancing guest satisfaction, and offering a seamless experience.",
    button: {
      title: "Hotel & Restaurants",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Guest experience platforms",
      },
      {
        point: "Customer feedback management",
      },
      {
        point: "Point-of-sale (POS) systems",
      },
    ],
    challenges: [
      {
        point: "Meeting guest expectations",
      },
      {
        point: "Managing bookings",
      },
      {
        point: "Improving operational efficiency",
      },
    ],
  },
  {
    id: 9,
    img: {
      src: HardHat,
      alt: "Relume placeholder image",
    },
    description:
      "Boost productivity and streamline project management with solutions built for the construction and real estate sectors. We provide tools for property tracking, contract management, and project scheduling.",
    button: {
      title: "Construction & Real Estate",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Project management systems",
      },
      {
        point: "CRM for real estate",
      },
      {
        point: "Document and contract tracking",
      },
    ],
    challenges: [
      {
        point: "Coordinating projects across teams",
      },
      {
        point: "Tracking budgets and deadlines",
      },
      {
        point: "Managing property listings",
      },
    ],
  },
  {
    id: 10,
    img: {
      src: Grains,
      alt: "Relume placeholder image",
    },
    description:
      "Optimize farming practices with smart farming tools that boost productivity and sustainability. Our agricultural productivity tech and data-driven agriculture solutions help farmers make informed decisions and improve crop yields.",
    button: {
      title: "Agriculture",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Inventory tracking",
      },
      {
        point: "Crop monitoring",
      },
      {
        point: "Weather forecasting",
      },
      {
        point: "Yield optimization analytics",
      },
    ],
    challenges: [
      {
        point: "Adapting to weather conditions",
      },
      {
        point: "Managing resources efficiently",
      },
      {
        point: "Improving crop yield",
      },
      {
        point: "Market price fluctuations",
      },
    ],
  },
  {
    id: 11,
    img: {
      src: Airplane,
      alt: "Relume placeholder image",
    },
    description:
      "Deliver unforgettable travel experiences with traveler engagement technology and hospitality digital transformation. Our digital tools for tourism help streamline bookings, enhance customer support, and meet the needs of modern travelers.",
    button: {
      title: "Travel & Hospitality",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Booking systems",
      },
      {
        point: "Customer service platforms",
      },
      {
        point: "Itinerary management",
      },
      {
        point: "Travel CRM",
      },
    ],
    challenges: [
      {
        point: "Managing high booking volumes",
      },
      {
        point: "Ensuring 24/7 customer support",
      },
      {
        point: "Providing personalized travel experiences",
      },
    ],
  },
  {
    id: 12,
    img: {
      src: UserGear,
      alt: "Relume placeholder image",
    },
    description:
      "Have specific requirements that fall outside of traditional industries? Our team specializes in creating tailored solutions to meet your unique needs. We work closely with you to understand your objectives and build a custom, end-to-end solution that aligns perfectly with your goals.",
    button: {
      title: "Custom Solutions",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
    link: "#",
    coreServices: [
      {
        point: "Custom application development",
      },
      {
        point: "Personalized consultation",
      },
      {
        point: "Specialized integrations",
      },
      {
        point: "Tailored system architecture",
      },
    ],
    challenges: [
      {
        point: "Bespoke requirements",
      },
      {
        point: "Need for innovative approaches",
      },
      {
        point: "Aligning technology to specific workflows and processes",
      },
    ],
  },
];
