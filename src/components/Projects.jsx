import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi"; // Importing icons

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center lg:items-start"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-8"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg"
                  style={{ width: "100%", height: "auto", maxHeight: "300px" }}
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3 text-center lg:text-left"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="mb-2 text-2xl font-semibold">{project.title}</h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#915EFF]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
                >
                  <FiExternalLink className="mr-2" /> View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  <FiGithub className="mr-2" /> View Code
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
