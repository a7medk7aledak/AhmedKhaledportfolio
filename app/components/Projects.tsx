'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '../lib/constants/index'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  // Show only first 4 projects on home page
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold"
      >
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="mb-16 text-center"
      >
        <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore my latest work showcasing innovative solutions, modern technologies, and exceptional user experiences
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/95 to-neutral-800/60 border border-neutral-700/30 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 backdrop-blur-lg hover:-translate-y-2"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent" />
            
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent group-hover:from-neutral-900/60 transition-all duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Status Badge */}
                {project.status && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </div>
                )}
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 relative z-10">
              <div className="space-y-4">
                {/* Title */}
                <motion.h3 
                  className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 line-clamp-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                
                {/* Description */}
                <p className="text-neutral-300 leading-relaxed text-sm lg:text-base line-clamp-3 group-hover:text-neutral-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 px-3 py-1.5 rounded-full text-xs font-medium border border-purple-500/40 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-neutral-400 text-xs px-2 py-1.5 bg-neutral-800/50 rounded-full border border-neutral-600/50">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-3">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/40"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </motion.a>
                  
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 bg-neutral-800/80 backdrop-blur-sm text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-neutral-700/80 transition-all duration-300 border border-neutral-600/50 hover:border-purple-500/60 shadow-lg hover:shadow-neutral-900/40"
                    >
                      <FaGithub size={14} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link href="/myprojects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-3 mx-auto group"
          >
            View All Projects ({PROJECTS.length})
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Projects
