'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTrophy, FaUsers, FaStar, FaClock } from "react-icons/fa";
import { MY_NUMBERS } from "../lib/constants/index";

interface NumberCardProps {
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const NumberCard = ({ number, label, suffix = "", delay = 0 }: NumberCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Icon mapping for different stats
  const getIcon = (label: string) => {
    if (label.includes('Years') || label.includes('Coding')) return FaClock;
    if (label.includes('Projects') || label.includes('Completed')) return FaTrophy;
    if (label.includes('Technologies') || label.includes('Mastered')) return FaStar;
    if (label.includes('Frameworks') || label.includes('Libraries')) return FaUsers;
    return FaTrophy;
  };

  const getGradient = (index: number) => {
    const gradients = [
      'from-purple-400 to-pink-400',
      'from-blue-400 to-cyan-400',
      'from-green-400 to-emerald-400',
      'from-orange-400 to-red-400'
    ];
    return gradients[index % gradients.length];
  };

  useEffect(() => {
    if (isVisible) {
      const duration = 2500; // 2.5 seconds
      const steps = 80;
      const increment = number / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  const IconComponent = getIcon(label);
  const gradientClass = getGradient(Math.floor(delay * 5)); // Convert delay to index

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { duration: 0.8, delay, type: "spring", bounce: 0.4 }
      }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.08, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-2xl p-8 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="relative z-10"
        >
          <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center shadow-lg`}>
            <IconComponent className="text-white text-2xl" />
          </div>
        </motion.div>
        
        {/* Number */}
        <motion.div
          className={`relative z-10 text-5xl md:text-6xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent mb-4`}
        >
          {count}{suffix}
        </motion.div>
        
        {/* Label */}
        <div className="relative z-10 text-neutral-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
          {label}
        </div>
        
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          whileHover={{
            borderColor: "rgba(168, 85, 247, 0.5)",
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const MyNumbers = () => {
  return (
    <div id="numbers" className="border-b border-neutral-900 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span> in Numbers
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Here are some key metrics that showcase my growth and achievements in web development
        </p>
      </motion.div>

      {/* Numbers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MY_NUMBERS.map((stat, index) => (
          <NumberCard
            key={index}
            number={stat.number}
            label={stat.label}
            suffix={stat.suffix}
            delay={index * 0.15}
          />
        ))}
      </div>
      
      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 rounded-full px-8 py-4 border border-neutral-700/50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
          >
            <FaStar className="text-white text-sm" />
          </motion.div>
          <span className="text-neutral-300 font-medium">Continuously Growing & Learning</span>
        </div>
      </motion.div>
    </div>
  );
};

export default MyNumbers;