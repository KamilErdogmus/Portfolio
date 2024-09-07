import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <section className="h-full">
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              <Typewriter
                words={[
                  "MERN Stack",
                  "Full Stack",
                  "Mobile",
                  "Software",
                ]}
                loop={5}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={5000}
              />
              &nbsp;Developer
            </span>
            <h1 className="h1 mb-6">
              Hi I'm <br />{" "}
              <span className="text-accent">Kâmil ERDOĞMUŞ</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80">
              I'm passionate about building seamless and
              innovative digital solutions, with expertise across
              a range of programming languages and cutting-edge
              technologies.
            </p>

            <div className="flex flex-col items-center xl:flex-row gap-8">
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  Contact me!
                  <MdEmail className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
