'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { HERO_CONTENT, PERSONAL_INFO, SOCIAL_LINKS } from "../lib/constants/index";

const Hero = () => {
  const socialIcons = [
    { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { icon: FaGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
    { icon: FaWhatsapp, href: `https://wa.me/${PERSONAL_INFO.phone.replace(/\s/g, '')}`, label: "WhatsApp" },
    { icon: FaTelegram, href: `https://t.me/${PERSONAL_INFO.phone.replace(/\s/g, '')}`, label: "Telegram" },
  ];

  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-300 text-lg leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
            
            {/* Social Media Icons */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 mt-6"
            >
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              
              {socialIcons.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-purple-500 p-3 rounded-lg text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="relative"
            >
              {/* Animated Spinner */}
              <div className="absolute inset-0 w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, #a855f7 90deg, transparent 180deg, #a855f7 270deg, transparent 360deg)',
                    padding: '4px'
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </motion.div>
                
                {/* Random floating elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear",
                    scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    rotate: [360, 0],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ 
                    rotate: [0, -360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 18, 
                    repeat: Infinity, 
                    ease: "linear",
                    scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                  }}
                  className="absolute top-1/4 -left-4 w-3 h-8 bg-purple-500 rounded-full transform rotate-45"
                />
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    x: [0, -15, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 14, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/3 -right-6 w-5 h-5 border-2 border-purple-500 transform rotate-45"
                />
              </div>
              
              {/* Profile Image */}
              <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] z-10">
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dapho0f5c/image/upload/f_auto,q_auto/AhmedKhaledProfile_tqjfyd"
                    alt="Ahmed Khaled"
                    width={550}
                    height={550}
                    className="object-cover object-top scale-100 w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
