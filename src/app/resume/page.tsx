"use client";
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaFigma,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const about = [
  {
    title: "About me",
    description:
      "I am a passionate frontend developer with over 2 years of experience in creating responsive and visually appealing web applications. I am currently available for freelance projects and enjoy working on innovative solutions.",

    info: [
      {
        fieldName: "Name",
        fieldValue: "Kâmil ERDOĞMUŞ",
      },
      {
        fieldName: "Email",
        fieldValue: "kamilerdogmus96@gmail.com",
      },
      {
        fieldName: "Experience",
        fieldValue: "2+ Years",
      },
      {
        fieldName: "Github",
        fieldValue: "KamilErdogmus",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Turkish",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Turkish, English",
      },
    ],
  },
];

const experience = [
  {
    icon: "/public/assets/resume/badge.svg",
    title: "My Experiences",
    description:
      "I have worked as a Junior Frontend Developer at EmaarTechs Software and gained experience as an intern at Udemig Software. During these roles, I have honed my skills in various frontend technologies and developed a strong foundation in building dynamic and user-friendly web applications.",
    items: [
      {
        company: "EmaarTechs Software",
        position: "Junior Frontend Developer",
        duration: "2022-2024",
      },
      {
        company: "Udemig Software",
        position: "Frontend Developer Intern",
        duration: "Summer 2021",
      },
    ],
  },
];

const education = [
  {
    icon: "/public/assets/resume/cap.svg",
    title: "My Education",
    description:
      "My educational background includes an Associate degree in Computer Programming, a Master's degree in Occupational Safety, and a Bachelor's degree in Topographical Engineering. This diverse academic journey has equipped me with a unique blend of technical and analytical skills, enhancing my approach to problem-solving in software development.",
    items: [
      {
        institution: "Anadolu University",
        department: "Computer Programming",
        degree: "Associate",
        duration: "2022-2024",
      },
      {
        institution: "Afyon Kocatepe University",
        department: "Occupational Safety",
        degree: "Msc.",
        duration: "2019-2021",
      },
      {
        institution: "Afyon Kocatepe University",
        department: "Topographical Engineering",
        degree: "Bachelor",
        duration: "2014-2019",
      },
    ],
  },
];

const skills = [
  {
    title: "My Skills",
    description:
      "Proficient in a wide range of modern web technologies and frameworks, I specialize in creating responsive and high-performance web applications. My skill set includes both frontend and backend technologies, along with experience in mobile development.",
    skillist: [
      { icon: <FaHtml5 />, name: "HTML 5" },
      { icon: <FaCss3Alt />, name: "CSS 5" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaReact />, name: "React Native" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <FaFigma />, name: "Figma" },
    ],
  },
];

const Resume = () => {
  return (
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6 xl:mx-0">
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70px] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience[0].description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center justify-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education[0].description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[194px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <h3 className="text-lg max-w-[270px] my-2 text-center lg:text-left ">
                          {item.institution}
                        </h3>
                        <p>{item.department}</p>
                        <div className="flex items-center justify-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <span className="text-accent">
                            {item.duration}
                          </span>
                        </div>
                        <span>{item.degree} Degree </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] xl:text-left">
                <h3 className="text-4xl font-bold">
                  {skills[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills[0].description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xl:gap-[30px]">
                  {skills[0].skillist.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] xl:h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">
                              {skill.name}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] xl:text-left">
                <h3 className="text-4xl font-bold">
                  {about[0].title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about[0].description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about[0].info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">
                        {item.fieldName}
                      </span>
                      <span className="text-xl ">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
