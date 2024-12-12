/** @format */

import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { colors } from "../constants/theme";
import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  contacts: ContactProps[];
};

export type Contact24Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactComponent = (props: Contact24Props) => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, message, acceptTerms });
  };
  const { tagline, heading, description, contacts } = {
    ...Contact24Defaults,
    ...props,
  } as Props;
  return (
    <section
      id='relume'
      className='px-[5%] py-16 md:py-16 lg:py-16'
      style={{
        background: colors.themeGradient,
      }}
    >
      <div className='container mb-16'>
        <div className='mx-auto w-full text-center mb-10'>
          <p className='mb-3 font-semibold md:mb-4 text-blue-200'>{tagline}</p>
          <h2 className='rb-5 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl text-blue-50'>
            {heading}
          </h2>
          <p className='md:text-md text-blue-200'>{description}</p>
        </div>
        <div className='grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:mt-20 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3'>
          {contacts.map((contact, index) => (
            <div key={index} className='w-full'>
              <div className='rb-5 mb-5 md:mb-6 text-blue-50 flex justify-center '>
                {contact.icon}
              </div>
              <h3 className='mb-3 text-center text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl text-blue-50'>
                {contact.title}
              </h3>
              <p className='mb-5 md:mb-6 text-blue-200'>
                {contact.description}
              </p>
              <a
                className='underline w-full inline-block text-center bg-blue-50 p-3 rounded-3xl text-blue-600'
                href={contact.link.url}
              >
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* SECOND SECTION  */}

      <div className='container py-16 grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20'>
        <div className=''>
          <div className='rb-6 mb-6 md:mb-8'>
            <h2 className='rb-5 mb-5 text-blue-50 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
              Get In touch
            </h2>
            <p className='md:text-md text-blue-50'>{description}</p>
          </div>
          <form className='grid grid-cols-1 gap-6' onSubmit={handleSubmit}>
            <div className='grid w-full items-center'>
              <Label htmlFor='name' className='mb-2 text-gray-50 text-[16px]'>
                Name <span className='text-gray-50'> *</span>
              </Label>
              <Input
                type='text'
                className='w-full p-4 text-white placeholder-gray-200 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                id='name'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='grid w-full items-center'>
              <Label
                htmlFor='company'
                className='mb-2 text-gray-50 text-[16px]'
              >
                Company Name <span className='text-gray-50'> *</span>
              </Label>
              <Input
                type='text'
                className='w-full p-4 text-white placeholder-gray-200 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                id='company'
                placeholder='Enter your company name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            {/* Responsive Row for Email and Phone */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
              <div className='grid w-full items-center'>
                <Label
                  htmlFor='email'
                  className='mb-2 text-gray-50 text-[16px]'
                >
                  Email<span className='text-gray-50'> *</span>
                </Label>
                <Input
                  type='email'
                  className='w-full p-4 text-white placeholder-gray-200 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  id='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='grid w-full items-center'>
                <Label
                  htmlFor='phone'
                  className='mb-2 text-gray-50 text-[16px]'
                >
                  Phone <span className='text-gray-50'> *</span>
                </Label>
                <Input
                  type='tel'
                  className='w-full p-4 text-white placeholder-gray-200 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  id='phone'
                  placeholder='Enter mobile number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className='grid w-full items-center'>
              <Label
                htmlFor='message'
                className='mb-2 text-gray-50 text-[16px]'
              >
                Message <span className='text-gray-50'> *</span>
              </Label>
              <Textarea
                id='message'
                placeholder='Type your message...'
                className='w-full !h-[200px] text-white placeholder-gray-200 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className='mb-3 flex items-center space-x-2 text-sm md:mb-4'>
              <Checkbox
                id='terms'
                className='text-white placeholder-gray-200 bg-white/10 backdrop-blur-lg border border-white/20 rounded-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                checked={acceptTerms}
                onCheckedChange={setAcceptTerms}
              />
              <Label htmlFor='terms' className='cursor-pointer text-blue-50'>
                I accept the{" "}
                <a className='text-blue-50 underline' href='/'>
                  Terms
                </a>
              </Label>
            </div>

            <div>
              <Button className='px-5 bg-blue-50 text-blue-500 border border-transparent rounded-lg'>
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div>
          <iframe
            className='h-full object-contain w-full'
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0788713026727!2d73.89363677423623!3d18.480086282605633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb2b61311dd3%3A0x245af094e46ffc3f!2sMajestique%20Biznow!5e0!3m2!1sen!2sin!4v1732187317857!5m2!1sen!2sin'
            width='600'
            height='450'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </section>
  );
};

export const Contact24Defaults: Contact24Props = {
  image: {
    src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg",
    alt: "Relume placeholder image",
  },
  tagline: "CONTACT US",
  heading: "Ready to Grow with LCS?",
  description:
    "We’re here to help! Reach out to us via email, phone, or visit our office. Whether you have questions or need support, our team is ready to assist.",
  contacts: [
    {
      icon: <BiEnvelope className='size-12' />,
      title: "Email",
      description:
        "For general inquiries, partnerships and customer support, reach out to us at our official email.",
      link: {
        label: "info@lowcosys.com",
        url: "#",
      },
    },
    {
      icon: <BiPhone className='size-12 ' />,
      title: "Phone",
      description:
        "Prefer to speak with someone directly? Give us a call for quick answers and personalized support.",
      link: {
        label: "+91 92094 64600",
        url: "#",
      },
    },
    {
      icon: <BiMap className='size-12' />,
      title: "Office",
      description:
        "Visit us at our headquarters. We’re open from Monday to Friday, 10 AM to 6 PM.",
      link: {
        label: "301-A, Majestique Biznow, NIBM Road, Pune - 48",
        url: "#",
      },
    },
  ],
};
