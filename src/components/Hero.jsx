import { HERO_CONTENT } from "../constants";
import profile from "../assets/AhmedKhaledProfile.png";
import { motion } from "framer-motion";
import { FiLinkedin, FiFileText } from "react-icons/fi";

const cvLink = "https://www.canva.com/design/DAGWiqWXWo8/LQ-RkcFn5Xc8ez-EMsWJPg/edit?utm_content=DAGWiqWXWo8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

const slideIn = (direction, delay) => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-16 border-b border-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={slideIn("left", 0)}
              className="relative mb-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-white">
                Ahmed Khaled
              </h1>
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"></div>
            </motion.div>

            <motion.h2
              variants={slideIn("left", 0.2)}
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={slideIn("left", 0.4)}
              className="max-w-xl text-lg text-neutral-300 leading-relaxed mb-12"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={slideIn("up", 0.6)}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/%E2%80%AAahmed-khaled-a3852b21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                <FiLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-3 bg-transparent hover:bg-violet-600/10 border-2 border-violet-600 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                <FiFileText className="text-xl" />
                <span>View CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={slideIn("right", 0.3)}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 via-slate-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <motion.img
                src={profile}
                alt="Ahmed Khaled"
                className="relative w-full h-full object-cover rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;