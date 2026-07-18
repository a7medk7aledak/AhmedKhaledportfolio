'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '../../lib/constants/index'
import { PROJECT_DETAILS, ProjectDetail } from '../../lib/constants/projectDetails'
import { 
  FaArrowLeft, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaPlay, 
  FaServer, 
  FaDatabase, 
  FaRoute, 
  FaRegLightbulb,
  FaCogs, 
  FaCalendarAlt,
  FaCheckCircle
} from 'react-icons/fa'
import Button from '../../components/buttom'

interface ProjectDetailClientProps {
  slug: string
}

const ProjectDetailClient = ({ slug }: ProjectDetailClientProps) => {
  const projectSummary = PROJECTS.find((p) => p.slug === slug);
  const details: ProjectDetail | undefined = PROJECT_DETAILS[slug];

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(
    details?.architectureNodes?.[0]?.id || null
  );

  if (!projectSummary) {
    return (
      <div className="bg-neutral-950 text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Button href="/myprojects" variant="primary">Back to Projects</Button>
      </div>
    );
  }

  // Fallback if detail data is missing (e.g. template pages)
  const displayDetails: ProjectDetail = details || {
    slug: slug,
    title: projectSummary.title,
    subtitle: "A professional development showcase project.",
    overview: projectSummary.description,
    features: projectSummary.technologies.map(tech => ({
      title: tech,
      description: `Implemented core functionalities and configurations utilizing ${tech}.`
    })),
    challenges: [
      {
        issue: "Optimizing code quality and structuring component flows.",
        solution: "Adhered to solid software engineering design patterns, reusable layout trees, and standard naming conventions."
      }
    ],
    timeline: [
      {
        phase: "Phase 1: Conceptualization",
        title: "Project Scope Definition",
        description: "Mapped user requirements, visual style schemes, and technical stack compatibility."
      },
      {
        phase: "Phase 2: Development",
        title: "Coding & Styling",
        description: "Implemented components, connected application routing, and integrated style files."
      }
    ],
    architectureNodes: [
      { id: "fe", label: "Frontend UI", details: "Client-side page views built to display project features.", status: "client" },
      { id: "assets", label: "Assets Registry", details: "Static files, scripts, and layouts that compose the site.", status: "external" }
    ]
  };

  const selectedNode = displayDetails.architectureNodes.find(node => node.id === selectedNodeId);

  return (
    <div className="bg-neutral-950 text-neutral-300 min-h-screen selection:bg-purple-500/30 selection:text-white">
      {/* Background Gradients */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-0 z-[-2] h-96 w-96 rounded-full bg-purple-900/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link href="/myprojects">
            <span className="inline-flex items-center gap-2 text-neutral-400 hover:text-purple-400 transition-colors cursor-pointer text-sm font-semibold">
              <FaArrowLeft size={14} /> Back to Projects
            </span>
          </Link>
          <div className="flex gap-4">
            <motion.a
              href={projectSummary.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-purple-500/20"
            >
              <FaExternalLinkAlt size={12} /> Live Site
            </motion.a>
            {projectSummary.github && projectSummary.github !== '#' && (
              <motion.a
                href={projectSummary.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-neutral-700 hover:border-purple-500/40"
              >
                <FaGithub size={12} /> Source Code
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="border-b border-neutral-800/60 pb-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {projectSummary.status && (
              <span className="inline-block bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 border border-purple-500/40 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                {projectSummary.status}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {projectSummary.title.split(" — ")[0]}{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent block md:inline">
                {projectSummary.title.includes(" — ") ? `— ${projectSummary.title.split(" — ")[1]}` : ''}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-medium max-w-4xl leading-relaxed">
              {displayDetails.subtitle}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {projectSummary.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-neutral-900/80 text-purple-300 px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-neutral-800 hover:border-purple-500/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Video Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Video Demonstration Showcase
          </h2>
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl hover:border-purple-500/30 transition-all duration-500 group">
            {displayDetails.videoUrl ? (
              <iframe
                src={displayDetails.videoUrl}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
                {/* Background design accents */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Custom glowing play button */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative cursor-pointer w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/35 mb-6 group-hover:shadow-purple-500/50 transition-shadow duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></div>
                  <FaPlay size={24} className="ml-1.5 text-white" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  Interactive Video Showcase Coming Soon
                </h3>
                <p className="text-neutral-400 max-w-lg leading-relaxed text-sm md:text-base">
                  We are recording a voice-over walk-through of {projectSummary.title.split(" — ")[0]}'s primary features, dashboard modules, and server operations. In the meantime, explore the complete system architecture details below!
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Grid Layout: Overview & Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Project Overview
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-4 text-base md:text-lg whitespace-pre-line bg-neutral-900/30 p-6 rounded-2xl border border-neutral-800/40 backdrop-blur-sm">
              {displayDetails.overview}
            </div>
          </motion.div>

          {/* Key Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Key Capabilities
            </h2>
            <div className="space-y-4">
              {displayDetails.features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800 hover:border-purple-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    {feature.badge && (
                      <span className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Subdomains & Custom Domains Showcase (Special Roshd Highlight) */}
        {slug === 'roshd' && displayDetails.subdomainFeature && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-gradient-to-br from-neutral-900/80 to-purple-950/20 border border-purple-500/20 p-8 rounded-3xl relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <FaRoute className="text-purple-400" />
                {displayDetails.subdomainFeature.title}
              </h2>
              <p className="text-neutral-300 mb-6 text-base md:text-lg">
                {displayDetails.subdomainFeature.description}
              </p>
            </div>

            {/* Workflow steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {displayDetails.subdomainFeature.flow.map((step, idx) => {
                const title = step.split(": ")[0];
                const desc = step.split(": ")[1];
                return (
                  <div key={idx} className="relative bg-neutral-950/80 p-5 rounded-2xl border border-neutral-800 shadow-md flex flex-col justify-between">
                    <div>
                      <span className="text-purple-500 font-extrabold text-2xl block mb-2 opacity-50">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 className="font-bold text-white text-sm mb-1.5">{title}</h4>
                      <p className="text-neutral-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Sketching & System Architecture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Architecture interactive panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Interactive Architecture Flow
            </h2>
            <p className="text-neutral-400">
              Hover or click on the system modules to inspect their dynamic interactions and roles within the product stack:
            </p>

            {/* Node flow diagram map */}
            <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl grid grid-cols-2 md:grid-cols-3 gap-3">
              {displayDetails.architectureNodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                
                // Color configuration based on category
                let statusColor = "border-blue-500/20 text-blue-300 bg-blue-500/5 hover:border-blue-500/40";
                if (node.status === "api") statusColor = "border-purple-500/20 text-purple-300 bg-purple-500/5 hover:border-purple-500/40";
                if (node.status === "queue") statusColor = "border-orange-500/20 text-orange-300 bg-orange-500/5 hover:border-orange-500/40";
                if (node.status === "db") statusColor = "border-green-500/20 text-green-300 bg-green-500/5 hover:border-green-500/40";
                if (node.status === "external") statusColor = "border-pink-500/20 text-pink-300 bg-pink-500/5 hover:border-pink-500/40";

                const activeStyle = isSelected 
                  ? "ring-2 ring-purple-500 scale-105 border-purple-500/80 bg-purple-500/10 shadow-lg shadow-purple-500/10 text-white" 
                  : statusColor;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 font-semibold cursor-pointer text-sm flex flex-col justify-between h-24 ${activeStyle}`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">
                      {node.status}
                    </span>
                    <span className="block truncate text-sm">
                      {node.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Explainer card below */}
            <div className="min-h-[140px] bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500/10 to-transparent w-24 h-full pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                {selectedNode ? (
                  <motion.div
                    key={selectedNode.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase font-extrabold tracking-widest px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        {selectedNode.status}
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {selectedNode.label}
                      </h4>
                    </div>
                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                      {selectedNode.details}
                    </p>
                  </motion.div>
                ) : (
                  <div className="text-neutral-400 flex items-center gap-3">
                    <FaRegLightbulb className="text-yellow-500" /> Click a system node to view detail analysis.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Architecture sketch image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Blueprint Sketch
            </h2>
            
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-xl group cursor-zoom-in">
              {displayDetails.sketchImage ? (
                <>
                  <Image
                    src={displayDetails.sketchImage}
                    fill
                    alt="System Architecture Diagram Sketch"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-neutral-950/80 border border-neutral-700 text-xs px-3 py-1.5 rounded-lg text-white font-medium shadow-md">
                      System Design Blueprint
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-neutral-500 bg-neutral-950">
                  <FaServer size={48} className="mb-4 text-neutral-700" />
                  <p className="text-sm">Architecture mapping diagram is currently loaded in the interactive matrix viewer on the left.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Technical Challenges & Resolutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayDetails.challenges.map((challenge, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-900/30 rounded-2xl border border-neutral-800/80 hover:border-purple-500/25 transition-all overflow-hidden flex flex-col"
              >
                {/* Challenge Header */}
                <div className="bg-red-500/5 border-b border-neutral-800 p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                      Problem
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base leading-snug">
                    {challenge.issue}
                  </h4>
                </div>

                {/* Solution Block */}
                <div className="bg-green-500/5 p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs uppercase font-extrabold tracking-widest text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                        Resolution
                      </span>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Timeline & Phases */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            Development timeline & Story
          </h2>

          <div className="relative border-l border-neutral-800 ml-4 md:ml-6 pl-6 space-y-12">
            {displayDetails.timeline.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[33px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border border-neutral-700 group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-purple-400"></div>
                </div>

                {/* Timeline content */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase font-bold text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      {step.phase}
                    </span>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 group-hover:text-purple-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-sm max-w-3xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 pt-12 text-center"
        >
          <p className="text-neutral-400 mb-6">Interested in discussing similar system integrations?</p>
          <div className="flex gap-4 justify-center">
            <Button href="/#contact" variant="primary" size="lg">Get In Touch</Button>
            <Button href="/myprojects" variant="secondary" size="lg">All Projects</Button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default ProjectDetailClient;
