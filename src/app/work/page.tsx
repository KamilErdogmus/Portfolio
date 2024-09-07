"use client";

import { motion } from "framer-motion";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import SwiperCore from "swiper";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Project } from "../types";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "Kicks-Shoe App",
    description:
      "A stylish and functional shoe shopping web application built with React and Vite. It features a modern design with dynamic functionality for browsing and purchasing shoes.",
    link: "https://github.com/KamilErdogmus/Kicks",
    image: "/assets/work/Shoe-App.png",
    live: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "HotelHUB",
    description:
      "A hotel booking application built with React Vite and TypeScript. It allows users to browse, search, and book hotels, providing a smooth and interactive experience.",
    link: "https://github.com/KamilErdogmus/HotelHUB",
    image: "/assets/work/HotelHUB.png",
    live: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "MovieHUB",
    description:
      "A modern movie application built with Next.js. It allows users to browse, search, and view details of movies with a sleek and responsive interface.",
    link: "https://github.com/KamilErdogmus/MovieHUB",
    image: "/assets/work/MovieHUB.png",
    live: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Note it",
    description:
      "A simple and user-friendly notes application built with React Vite and TypeScript. The app allows users to create, edit, delete, and organize notes efficiently, offering a clean interface and dynamic features for a seamless note-taking experience.",
    link: "https://github.com/KamilErdogmus/Note-It",
    image: "/assets/work/Note-App.png",
    live: "https://note-it-blond.vercel.app/",
  },
  {
    num: "05",
    category: "frontend",
    title: "Car Rental",
    description:
      "A modern car rental application built with React Vite and TypeScript. This app allows users to search for, filter, and rent cars from a variety of options. It provides a seamless user experience with dynamic content and animations.",
    link: "https://github.com/KamilErdogmus/Car-Rental-App",
    image: "/assets/work/Car-Rental.png",
    live: "https://car-rental-h8amcpslp-quadriceps-projects.vercel.app/",
  },
];

const Work = () => {
  const [project, setProject] = useState<Project>(projects[0]);
  const handleSlideChange = (swiper: SwiperCore) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="capitalize text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.category} Project
              </h2>
              <h2 className="capitalize text-[50px] font-bold leading-none text-accent group-hover:text-accent-hover transition-all duration-500">
                {project.title}
              </h2>
              <p className="text-white/60">
                {project.description}
              </p>

              <div className="border border-white/20 my-4" />

              <div className="flex gap-6">
                {project.live !== "" && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((items) => (
                <SwiperSlide key={items.num} className="w-full">
                  <div className="h-[480px] relative group flex justify-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-fill"
                        alt="project-image  rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                containerStyles="flex gap-2 absolute right-0 max-md:bottom-0 bottom-10 z-20 w-full justify-berween xl:w-max xl:justify-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
