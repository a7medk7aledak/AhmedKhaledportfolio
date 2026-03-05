'use client'

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiDjango, SiVercel, SiCloudinary, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiPython, SiNuxtdotjs, SiRender, SiGithubactions, SiSocketdotio, SiJsonwebtokens } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaGitAlt, FaDocker, FaAws, FaDatabase, FaCode, FaTools, FaCloud } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const techCategories = {
    frontend: {
      title: "Frontend",
      icon: FaCode,
      color: "text-blue-400",
      technologies: [
        { Icon: RiReactjsLine, color: "text-cyan-400", name: "React", duration: 2.5 },
        { Icon: TbBrandNextjs, color: "text-white", name: "Next.js", duration: 3 },
        { Icon: SiNuxtdotjs, color: "text-green-400", name: "Nuxt.js", duration: 2.7 },
        { Icon: SiTypescript, color: "text-blue-400", name: "TypeScript", duration: 2.8 },
        { Icon: SiJavascript, color: "text-yellow-400", name: "JavaScript", duration: 3.2 },
        { Icon: SiTailwindcss, color: "text-cyan-500", name: "Tailwind CSS", duration: 2.2 },
        { Icon: SiBootstrap, color: "text-purple-500", name: "Bootstrap", duration: 2.9 },
        { Icon: SiHtml5, color: "text-orange-500", name: "HTML5", duration: 3.1 },
        { Icon: SiCss3, color: "text-blue-500", name: "CSS3", duration: 2.6 }
      ]
    },
    backend: {
      title: "Backend",
      icon: FaDatabase,
      color: "text-green-400",
      technologies: [
        { Icon: FaNodeJs, color: "text-green-500", name: "Node.js", duration: 6 },
        { Icon: SiExpress, color: "text-gray-400", name: "Express.js", duration: 3.5 },
        { Icon: SiDjango, color: "text-green-600", name: "Django", duration: 4.2 },
        { Icon: SiPython, color: "text-yellow-500", name: "Python", duration: 3.8 },
        { Icon: SiSocketdotio, color: "text-white", name: "Socket.io", duration: 3.3 },
        { Icon: SiJsonwebtokens, color: "text-purple-400", name: "JWT", duration: 2.4 }
      ]
    },
    database: {
      title: "Database",
      icon: FaDatabase,
      color: "text-purple-400",
      technologies: [
        { Icon: SiMongodb, color: "text-green-500", name: "MongoDB", duration: 5 },
        { Icon: BiLogoPostgresql, color: "text-sky-700", name: "PostgreSQL", duration: 4 },
        { Icon: DiRedis, color: "text-red-700", name: "Redis", duration: 2 }
      ]
    },
    tools: {
      title: "DevOps & Tools",
      icon: FaTools,
      color: "text-orange-400",
      technologies: [
        { Icon: FaGitAlt, color: "text-orange-500", name: "Git", duration: 3.8 },
        { Icon: FaDocker, color: "text-blue-500", name: "Docker", duration: 4.5 },
        { Icon: SiGithubactions, color: "text-gray-300", name: "GitHub Actions", duration: 3.7 },
        { Icon: SiVercel, color: "text-white", name: "Vercel", duration: 2.8 },
        { Icon: SiRender, color: "text-green-400", name: "Render", duration: 3.4 }
      ]
    },
  };

  const getAllTechnologies = () => {
    return Object.values(techCategories).flatMap(category => category.technologies);
  };

  const getFilteredTechnologies = () => {
    if (activeCategory === 'all') {
      return getAllTechnologies();
    }
    return techCategories[activeCategory as keyof typeof techCategories]?.technologies || [];
  };

  const categories = [
    { key: 'all', name: 'All Technologies', icon: FaCode, count: getAllTechnologies().length },
    { key: 'frontend', name: techCategories.frontend.title, icon: techCategories.frontend.icon, count: techCategories.frontend.technologies.length },
    { key: 'backend', name: techCategories.backend.title, icon: techCategories.backend.icon, count: techCategories.backend.technologies.length },
    { key: 'database', name: techCategories.database.title, icon: techCategories.database.icon, count: techCategories.database.technologies.length },
    { key: 'tools', name: techCategories.tools.title, icon: techCategories.tools.icon, count: techCategories.tools.technologies.length },
  ];

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
          A comprehensive overview of the technologies, frameworks, and tools I use to build modern, scalable, and efficient web applications
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-wrap justify-center gap-4"
      >
        {categories.map(({ key, name, icon: Icon, count }) => (
          <motion.button
            key={key}
            onClick={() => setActiveCategory(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 px-7 py-3 rounded-full border transition-all duration-300 ${
              activeCategory === key
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500'
                : 'bg-neutral-800/50 text-neutral-300 border-neutral-700 hover:border-purple-500/50 hover:text-white'
            }`}
          >
            <Icon className="text-lg" />
            <span className="font-medium flex items-center gap-2">
              {name}
              <span className={`text-xs px-2 py-0.5 rounded-full border ${
                activeCategory === key
                  ? 'border-white/40 text-white/90'
                  : 'border-neutral-600 text-neutral-400'
              }`}>
                {count}+
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Technologies Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
      >
        {getFilteredTechnologies().map(({ Icon, color, name, duration }, index) => (
          <motion.div
            key={`${activeCategory}-${name}`}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-2xl border border-neutral-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <Icon className={`text-5xl md:text-6xl ${color} group-hover:scale-110 transition-transform duration-300 mb-3`} />
              <span className="text-neutral-300 group-hover:text-white text-sm font-medium text-center transition-colors duration-300">
                {name}
              </span>
            </div>
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              whileHover={{
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Technologies;
