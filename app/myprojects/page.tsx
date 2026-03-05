'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '../lib/constants/index'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import Button from '../components/buttom'

const ProjectsPage = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <div className="container mx-auto px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <Button href="/" variant="secondary" size="sm">
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            All <span className="text-purple-400">Projects</span>
          </h1>
          
          <p className="text-neutral-400 text-center max-w-3xl mx-auto text-lg">
            Explore my complete portfolio of {PROJECTS.length} projects, showcasing my journey in web development from simple templates to complex full-stack applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-neutral-900/50 rounded-xl overflow-hidden border border-neutral-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-6 flex items-center justify-center">
                  <div className="relative w-full max-w-[250px] aspect-square">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="lg:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 ml-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-purple-400 hover:text-purple-300 transition-colors p-2 rounded-full hover:bg-purple-500/10"
                        aria-label="View Live Project"
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                      {project.github && project.github !== '#' && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-purple-400 hover:text-purple-300 transition-colors p-2 rounded-full hover:bg-purple-500/10"
                          aria-label="View Source Code"
                        >
                          <FaGithub size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  <p className="mb-6 text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="bg-neutral-800 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/20 hover:border-purple-500/50 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-neutral-800"
        >
          <p className="text-neutral-400 mb-6">
            Want to work together on your next project?
          </p>
          <Button href="/#contact" variant="primary" size="lg">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage