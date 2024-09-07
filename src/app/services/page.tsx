"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Building dynamic and responsive user interfaces with React, leveraging modern JavaScript features and best practices for optimal performance.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Developing secure and scalable backend solutions using Node.js and Django, offering RESTful APIs, real-time capabilities, and efficient database management.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Creating high-quality mobile applications with React Native, ensuring cross-platform compatibility and a seamless user experience on both iOS and Android devices.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimizing websites for better visibility on search engines through advanced SEO techniques, including keyword analysis, on-page optimization and technical SEO.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h3 className="text-[42px] font-bold leading-none transition-all duration-500 text-white group-hover:text-accent">
                {service.title}
              </h3>
              <p className="text-white/60">
                {service.description}
              </p>
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
