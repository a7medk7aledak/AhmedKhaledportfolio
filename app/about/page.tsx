'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaDownload, FaCode, FaGraduationCap, FaTrophy } from 'react-icons/fa'
import { PERSONAL_INFO, ABOUT_TEXT, EXPERIENCES, SKILLS, MY_NUMBERS } from '../lib/constants/index'

const AboutPage = () => {
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
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-500 px-4 py-2 rounded-lg text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <FaArrowLeft />
                Back to Home
              </motion.button>
            </Link>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">
              Hi, I'm {PERSONAL_INFO.name}
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              {ABOUT_TEXT}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload />
                Download CV
              </a>
              <Link href="/#contact">
                <button className="border border-purple-500 px-6 py-3 rounded-lg text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Get In Touch
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-6"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dapho0f5c/image/upload/f_auto,q_auto/photo_huffa0"
                  alt="Ahmed Khaled"
                  width={320}
                  height={320}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {MY_NUMBERS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <FaCode className="text-purple-400" />
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-neutral-800 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-neutral-800 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/20 hover:border-pink-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <FaTrophy className="text-purple-400" />
            Experience
          </h2>
          
          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-neutral-400 text-sm mt-2 md:mt-0">{exp.year}</span>
                </div>
                
                <p className="text-neutral-300 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-neutral-800 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <FaGraduationCap className="text-purple-400" />
              Education
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-white">Communications Engineering</h4>
                <p className="text-purple-400">Student</p>
                <p className="text-neutral-400 text-sm">Currently pursuing my degree</p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <FaTrophy className="text-pink-400" />
              Achievements
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-white">ECPC Participant</h4>
                <p className="text-pink-400">Competitive Programming</p>
                <p className="text-neutral-400 text-sm">Participated in Egyptian Collegiate Programming Contest</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center pt-8 border-t border-neutral-800"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <Link href="/#contact">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Get In Touch
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage