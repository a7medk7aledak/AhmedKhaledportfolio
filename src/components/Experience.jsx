import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";


const Experience = () => {
  return (
    <section className="py-16 relative">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Experience
      </motion.h1>

      <div className="max-w-6xl mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-12 bg-neutral-900/50 rounded-lg p-6 hover:bg-neutral-900/70 transition-all"
          >
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Company Logo/Image */}
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/4"
              >
                <div className="w-24 h-24 rounded-full bg-white p-2 mx-auto lg:mx-0">
                  <img
                    src={experience.companyLogo || "/api/placeholder/96/96"}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <p className="text-center lg:text-left mt-4 text-neutral-400 font-medium">
                  {experience.year}
                </p>
              </motion.div>

              {/* Experience Details */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.7 }}
                className="flex-1"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-[#915EFF] text-lg font-medium">
                    {experience.company}
                  </p>
                </div>

                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 rounded-full bg-[#915EFF]/20 text-[#915EFF] text-sm font-medium hover:bg-[#915EFF]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
