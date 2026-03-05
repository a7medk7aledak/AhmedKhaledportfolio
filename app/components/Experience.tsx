'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { EXPERIENCES } from "../lib/constants/index";

const Experience = () => {
	return (
		<div id="experience" className="border-b border-neutral-900 pb-24">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
			</motion.h2>
			
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 50 }}
				transition={{ duration: 1 }}
				className="mb-16 text-center"
			>
				<p className="text-neutral-400 max-w-2xl mx-auto text-lg">
					My professional journey and work experience in web development, showcasing growth and expertise
				</p>
			</motion.div>

			{/* Timeline Container */}
			<div className="relative">
				{/* Timeline Line */}
				<div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"></div>
				
				<div className="space-y-12">
					{EXPERIENCES.map((experience, index) => (
						<motion.div 
							key={index} 
							whileInView={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 50 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
						>
							{/* Timeline Node */}
							<div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-neutral-900 z-10"></div>
							
							{/* Content Card */}
							<motion.div
								whileHover={{ scale: 1.02, y: -5 }}
								className={`w-full md:w-5/12 ml-16 md:ml-0 bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 rounded-2xl p-8 border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
							>
								{/* Company Header */}
								<div className="flex items-center gap-4 mb-6">
									{experience.companyLogo ? (
										<div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-2 flex items-center justify-center">
											<Image
												src={experience.companyLogo}
												alt={experience.company}
												width={48}
												height={48}
												className="rounded-xl object-contain w-full h-full"
											/>
										</div>
									) : (
										<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
											<FaBriefcase className="text-white text-2xl" />
										</div>
									)}
									
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-white mb-2">
											{experience.role}
										</h3>
										<div className="flex items-center gap-4 text-sm text-neutral-400">
											<div className="flex items-center gap-2">
												<FaBriefcase className="text-purple-400" />
												<span className="text-purple-400 font-medium">{experience.company}</span>
											</div>
											<div className="flex items-center gap-2">
												<FaCalendarAlt className="text-pink-400" />
												<span>{experience.year}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Description */}
								<div className="mb-6">
									<p className="text-neutral-300 leading-relaxed text-lg whitespace-pre-line">
										{experience.description}
									</p>
								</div>

								{/* Technologies */}
								<div>
									<h4 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wider">Technologies Used</h4>
									<div className="flex flex-wrap gap-3">
										{experience.technologies.map((tech, techIndex) => (
											<motion.span
												key={techIndex}
												whileHover={{ scale: 1.1, y: -2 }}
												whileTap={{ scale: 0.95 }}
												className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default"
											>
												{tech}
											</motion.span>
										))}
									</div>
								</div>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Call to Action */}
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 50 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="mt-16 text-center"
			>
				<div className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 rounded-2xl p-8 border border-neutral-700/50">
					<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Ready to Work Together?
					</h3>
					<p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
						I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
					</p>
					<motion.a
						href="#contact"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
					>
						Get In Touch
						<FaExternalLinkAlt className="text-sm" />
					</motion.a>
				</div>
			</motion.div>
		</div>
	);
};

export default Experience;
