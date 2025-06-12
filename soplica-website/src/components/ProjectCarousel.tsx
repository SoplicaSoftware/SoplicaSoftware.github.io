import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ProjectCard, { type Project } from "./ProjectCard";
import projectsData from "../data/projects.json";

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects: Project[] = projectsData;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get the cards to display in the carousel view
  const getVisibleCards = () => {
    const visibleCards = [];
    const totalCards = projects.length;
    
    // Show 3 cards: previous, current, next
    for (let i = -1; i <= 1; i++) {
      const index = (currentProject + i + totalCards) % totalCards;
      visibleCards.push({
        project: projects[index],
        position: i,
        index,
      });
    }
    
    return visibleCards;
  };

  const cardVariants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 5,
      opacity: 1,
      rotateY: 0,
    },
    left: {
      x: -520, // Adjusted for proper card proportions
      scale: 0.8,
      zIndex: 3,
      opacity: 0.7,
      rotateY: 15,
    },
    right: {
      x: 520, // Adjusted for proper card proportions
      scale: 0.8,
      zIndex: 3,
      opacity: 0.7,
      rotateY: -15,
    },
  };

  const getCardVariant = (position: number) => {
    if (position === 0) return "center";
    if (position === -1) return "left";
    if (position === 1) return "right";
    return "center";
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-background to-content1"
      id="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-warning mx-auto mb-8" />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;m
            passionate about
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative mb-8" style={{ perspective: '1200px' }}>
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-warning/5 to-secondary/5 rounded-3xl blur-3xl" />
          
          <div className="relative h-[560px] sm:h-[620px] md:h-[648px] lg:h-[696px] xl:h-[744px] flex items-center justify-center overflow-visible px-2 sm:px-4">
            {getVisibleCards().map(({ project, position, index }) => (
              <motion.div
                key={index}
                animate={getCardVariant(position)}
                className="absolute"
                initial={getCardVariant(position)}
                onClick={() => position !== 0 && setCurrentProject(index)}
                style={{
                  transformStyle: "preserve-3d",
                  cursor: position !== 0 ? "pointer" : "default",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                variants={cardVariants}
                whileHover={
                  position === 0 
                    ? { 
                        scale: 1.02, 
                        y: -10,
                        transition: { duration: 0.3 }
                      } 
                    : { 
                        scale: 0.85, 
                        y: -5,
                        transition: { duration: 0.3 }
                      }
                }
                whileTap={
                  position !== 0 
                    ? { scale: 0.75 }
                    : {}
                }
              >
                <ProjectCard project={project} />
                
                {/* Overlay for non-center cards */}
                {position !== 0 && (
                  <motion.div
                    className="absolute inset-0 bg-black/20 rounded-xl md:rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
            
            {/* Center card spotlight effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-radial from-warning/10 to-transparent rounded-full pointer-events-none z-0"></div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <Button
            isIconOnly
            className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 bg-content2/90 hover:bg-content3 z-20 shadow-lg backdrop-blur-sm border-2 border-divider hover:border-warning-400 transition-all duration-300"
            onClick={prevProject}
            size="sm"
          >
            <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
          </Button>

          <Button
            isIconOnly
            className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 bg-content2/90 hover:bg-content3 z-20 shadow-lg backdrop-blur-sm border-2 border-divider hover:border-warning-400 transition-all duration-300"
            onClick={nextProject}
            size="sm"
          >
            <ChevronRight size={20} className="sm:w-7 sm:h-7" />
          </Button>

          {/* Enhanced floating control overlay */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 flex gap-2">
            <div className="flex items-center px-2 sm:px-3 py-1 sm:py-2 bg-content2/80 backdrop-blur-sm rounded-lg border border-divider">
              <span className="text-xs font-medium text-foreground-600">
                {currentProject + 1} / {projects.length}
              </span>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? "bg-gradient-to-r from-secondary to-warning"
                  : "bg-content3 hover:bg-content4"
              }`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
