import { HERO_CONTENT } from "../constants";
import profile from "../assets/AhmedKhaledProfile.png";
import { motion } from "framer-motion";

const cvLink = "https://drive.google.com/file/d/1BBJAAfX_csqHPWmTq64wA-tYCECXzI7R/view?usp=sharing";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8x1"
            >
              Ahmed Khaled
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-center md:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>

          <div className="flex flex-wrap items-center justify-between w-[350px] sm:mx-0 mx-[20px] mt-[10px] mb-[40px]">
            <a href="https://www.linkedin.com/in/%E2%80%AAahmed-khaled-a3852b21a/"
              target="_blank"
              className=" inline-block px-[45px] py-[12px] font-bold border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
              LinkedIn
            </a>
            <a href={cvLink}
              target="_blank"
              rel="noopener noreferrer" className="inline-block px-[45px] py-[12px] font-bold border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
              View CV
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              src={profile}
              alt="Ahmed Khaled"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
