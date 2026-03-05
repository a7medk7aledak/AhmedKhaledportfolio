'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaLightbulb, FaRocket, FaHeart } from "react-icons/fa";
import { PERSONAL_INFO, ABOUT_TEXT, SKILLS } from "../lib/constants/index";

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable code",
      color: "text-blue-400"
    },
    {
      icon: FaRocket,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      color: "text-green-400"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Creative solutions for complex problems",
      color: "text-yellow-400"
    },
    {
      icon: FaHeart,
      title: "Passion",
      description: "Love for creating amazing digital experiences",
      color: "text-red-400"
    }
  ];

  return (
    <div id="about" className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
      </motion.h2>
      
      <div className="flex flex-wrap lg:flex-nowrap gap-12">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl rotate-6 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 rounded-3xl -rotate-3 scale-110"></div>
            
            {/* Main image container */}
            <div className="relative w-[350px] h-[400px] sm:w-[400px] sm:h-[450px] lg:w-[450px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-2">
                <Image
                  src="https://res.cloudinary.com/dapho0f5c/image/upload/f_auto,q_auto/photo_huffa0"
                  alt={`${PERSONAL_INFO.name} - About`}
                  width={450}
                  height={500}
                  className="rounded-3xl object-cover object-top w-full h-full"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaCode className="text-white text-xl" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <FaRocket className="text-white text-lg" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          {/* About Text */}
          <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-2xl p-6 border border-neutral-700/50">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Story
            </h3>
            <p className="text-neutral-300 leading-relaxed text-lg">{ABOUT_TEXT}</p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-800/50 rounded-xl p-4 border border-neutral-700/30 hover:border-purple-500/30 transition-all duration-300"
              >
                <item.icon className={`text-2xl ${item.color} mb-2`} />
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-neutral-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaCode className="text-purple-400" />
                <span className="text-purple-400">Technical Skills</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.technical.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaLightbulb className="text-pink-400" />
                <span className="text-pink-400">Soft Skills</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.soft.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
