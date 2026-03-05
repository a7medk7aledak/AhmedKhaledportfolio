'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  external?: boolean;
}

const Button = ({ 
  href, 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  external = false
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  const buttonContent = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </motion.span>
  );
  
  if (href && !disabled) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {buttonContent}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }
  
  return buttonContent;
};

export default Button;