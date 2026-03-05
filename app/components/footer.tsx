'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram, FaHeart } from 'react-icons/fa6'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../lib/constants/index'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialIcons = [
    { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaGithub, href: SOCIAL_LINKS.github, label: "GitHub", color: "hover:text-gray-300" },
    { icon: FaWhatsapp, href: `https://wa.me/${PERSONAL_INFO.phone.replace(/\s/g, '')}`, label: "WhatsApp", color: "hover:text-green-400" },
    { icon: FaTelegram, href: `https://t.me/${PERSONAL_INFO.phone.replace(/\s/g, '')}`, label: "Telegram", color: "hover:text-blue-500" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Full-Stack Development",
    "React & Next.js",
    "Node.js & Express",
    "Database Design",
    "API Development",
    "UI/UX Implementation"
  ]

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-lg text-purple-400 font-medium mb-4">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-neutral-400 leading-relaxed max-w-md">
                Passionate Full-Stack Developer creating modern, scalable web solutions. 
                Transforming ideas into digital reality with clean code and innovative design.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {socialIcons.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-neutral-800 hover:bg-neutral-700 rounded-xl flex items-center justify-center text-neutral-400 ${color} transition-all duration-300 group`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-neutral-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <span>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <span>Made by Ahmed Khaled</span>
            <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer