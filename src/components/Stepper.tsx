/** @format */

import React, { useEffect, useState } from "react";
import { Steps, Button } from "antd";
import PlaceholderImage from "../assets/images/PlaceholderImage.svg";
import Step1 from "../assets/images/step1.svg";
import Step2 from "../assets/images/step2.svg";
import Step3 from "../assets/images/step3.svg";
import Step4 from "../assets/images/step4.svg";
import Step5 from "../assets/images/step5.svg";
import Step6 from "../assets/images/step6.svg";
import Step7 from "../assets/images/step7.svg";
import { colors } from "../constants/theme";
import Arrow from "../assets/images/arrowWhite.svg";
import { useNavigate } from "react-router-dom";

const { Step } = Steps;

const Stepper = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const steps = [
    {
      img: Step1,
      title: "Step 1",
      content: "Content of Step 1",
      heading: "Discover & Plan",
      description:
        "In the discovery phase, we collaborate closely with clients to define project objectives, understand requirements, and map out the vision. This phase includes market research, competitor analysis and project feasibility studies to set a clear direction.",
    },
    {
      img: Step2,
      title: "Step 2",
      content: "Content of Step 2",
      heading: "Ideation & Strategy",
      description:
        "Our team ideates and brainstorms solutions to address your needs effectively. Here, we strategize on solution structure, select appropriate tech stacks, and design prototypes, ensuring that each step aligns with your business goals.",
    },
    {
      img: Step3,
      title: "Step 3",
      content: "Content of Step 2",
      heading: "Design & Prototype",
      description:
        "User experience is central to our design process. We develop wireframes and prototypes, focusing on usability, functionality and aesthetics. This stage ensures that you see a preview of the solution and can provide feedback.",
    },
    {
      img: Step4,
      title: "Step 4",
      content: "Content of Step 2",
      heading: "Development & Integration",
      description:
        "Our developers bring the solution to life by coding, testing and integrating it into your current ecosystem. Using agile development practices, we ensure quality and scalability. Regular check-ins keep you informed and involved throughout this critical stage.",
    },
    {
      img: Step5,
      title: "Step 5",
      content: "Content of Step 2",
      heading: "Quality Assurance & Testing",
      description:
        "Every solution undergoes rigorous testing to identify and address potential issues. We conduct functional, usability and security testing, ensuring that the final product meets our standards for performance, quality and reliability.",
    },
    {
      img: Step6,
      title: "Step 6",
      content: "Content of Step 2",
      heading: "Launch & Deployment",
      description:
        "After thorough testing, we prepare for a seamless launch, managing all deployment steps to ensure that the transition is smooth and successful. We offer training to help your team adapt quickly to the new system.",
    },
    {
      img: Step7,
      title: "Step 7",
      content: "Content of Step 2",
      heading: "Ongoing Support & Optimization",
      description:
        "Our work doesn’t end at launch. We offer continuous support, monitoring the solution’s performance and optimizing as needed to keep up with evolving requirements, ensuring sustained success and scalability.",
    },
  ];

  const next = () => {
    setCurrent((prev) => prev + 1);
  };

  const prev = () => {
    setCurrent((prev) => prev - 1);
  };

  const finish = () => {
    // message.success("Process complete!");
    navigate("/contact");
  };

  const [isMobile, setIsMobile] = useState(false);

  const [width, setWidth] = useState(window.innerWidth); // Initialize with current width

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth); // Update state with new width
    };
    // Attach event listener
    window.addEventListener("resize", handleResize);
    if (width <= 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className='z-20 relative'>
      <div className='w-full mx-auto '>
        <Steps
          progressDot
          current={current}
          direction={isMobile ? "vertical" : "horizontal"}
        >
          {steps.map((item, index) => (
            <Step key={index} title={item.title} />
          ))}
        </Steps>

        <div className='flex flex-col flex-1 my-10  md:flex-row items-center md:justify-between justify-around w-full lg:h-[80vh] '>
          {/* <!-- Left Column --> */}
          <div className='w-full md:w-1/2 p-8 flex flex-col justify-center items-start space-y-4'>
            <h1 className='text-xl md:text-8xl font-bold text-gray-200'>
              {steps[current].title}
            </h1>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800'>
              {steps[current].heading}
            </h1>
            <p className='text-gray-600 text-md'>
              {steps[current].description}
            </p>
            <div className='flex space-x-4  mt-4'>
              {current > 0 && (
                <Button
                  // style={{height:4}}
                  className=' w-[100px] !h-[42px] border border-gradient-to-r from-[#3B82F6] to-[#114FD7] '
                  onClick={prev}
                >
                  Previous
                </Button>
              )}
              <Button
                // type="primary"
                style={{
                  background: colors.themeGradient,
                  color: "#F9FAFB",
                }}
                className='text-gray-50  w-[100px] !h-[42px] '
                onClick={current === steps.length - 1 ? finish : next}
              >
                {current === steps.length - 1 ? "Contact Us " : "Next"}
                {current === steps.length - 1 ? (
                  <img src={Arrow} className='' alt='' />
                ) : (
                  ""
                )}
              </Button>
            </div>
          </div>

          {/* <!-- Right Column --> */}

          <div className='w-full md:w-1/2 h-64 md:h-full'>
            <img
              src={steps[current].img}
              alt='Placeholder '
              className='size-full object-cover  rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
