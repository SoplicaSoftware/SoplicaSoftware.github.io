import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ProjectCard, { type Project } from "./ProjectCard";

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects: Project[] = [
    {
      id: 1,
      title: "edero.ai",
      description:
        "Work in progress. A suite of tools for modern and automated social media content creation using artificial intelligence.",
      image: "/edero.png",
      technologies: [
        "Next.js",
        "Python",
        "AI APIs",
        "AWS Cloud",
        "Tailwind CSS",
      ],
      liveUrl: "https://edero.ai/",
      features: [
        "Automatic content generation",
        "AI-driven image and video creation",
        "Social media management tools",
      ],
      challenges:
        "Integration with various AI APIs and creating an intuitive interface for content management.",
      outcome:
        "Project in development phase - goal is to revolutionize the way social media content is created.",
    },
    {
      id: 2,
      title: "rezerwacje.masujmnie",
      description:
        "Massage reservation system with client visits, role-based permissions with custom role creation, service area definition (interactive map), and PDF voucher generation.",
      image: "/rezerwacje.png",
      technologies: ["Laravel", "PHP", "JavaScript", "MySQL", "BulmaCss"],
      liveUrl: "https://rezerwacje.masujmnie.pl/",
      features: [
        "Reservation system",
        "CRM and Employee management",
        "PDF voucher generation",
      ],
      challenges:
        "Implementation of role-based permission system and integration with interactive map for service area definition.",
      outcome:
        "Increased efficiency in reservation management and improved customer service process.",
    },
    {
      id: 3,
      title: "masazbiurowy.eu",
      description:
        "Corporate massage reservation system. Platform enabling companies to easily manage massage reservations for their employees.",
      image: "/masazbuiurowy.png",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "BulmaCss"],
      liveUrl: "https://masazbiurowy.eu",
      features: [
        "Corporate reservations",
        "Employee management",
        "Availability calendar",
      ],
      challenges:
        "Creating a system that handles both individual clients and companies with multiple employees.",
      outcome:
        "Streamlined massage reservation process in companies and increased employee satisfaction.",
    },
    {
      id: 4,
      title: "Zbadaj Księgę",
      description:
        "System allowing monitoring of property ownership changes in land registers. Automatic tracking and notifications of ownership changes.",
      image: "/zbadajksiege.png",
      technologies: ["PHP", "TailWindCSS", "MySQL", "API", "Cron Jobs"],
      liveUrl: "https://zbadajksiege.pl/",
      features: [
        "Land register monitoring",
        "Automatic notifications",
        "Ownership change history",
      ],
      challenges:
        "Integration with external land register data sources and ensuring information accuracy.",
      outcome:
        "Increased real estate market transparency and simplified ownership change monitoring.",
    },
    {
      id: 5,
      title: "Duende Sounds",
      description:
        "Multiplatform desktop application built with Electron.js for browsing, purchasing, and downloading sound library from web service. Integrated with WordPress, API, and external AI service providers.",
      image: "/duende.png",
      technologies: [
        "Electron.js",
        "Python",
        "AI Services",
        "MS Azure"
      ],
      liveUrl: "https://duendesounds.com/",
      features: [
        "Sound library browsing, with advanced filters",
        "File download and management",
        "AI services for sound analysis",
      ],
      challenges:
        "Integration with multiple external APIs and ensuring smooth synchronization between desktop application and web service.",
      outcome:
        "Created complete ecosystem for sound library management with advanced AI features.",
    },
    {
      id: 6,
      title: "Swiadectwo.energy",
      description:
        "System for ordering energy performance certificates. Connects clients, auditors and real estate agents in one platform.",
      image: "/swiadectwo.png",
      technologies: ["PHP", "Laravel", "MySQL", "TailWindCSS", "Payment Gateway"],
      liveUrl: "https://swiadectwo.energy/",
      features: [
        "Platform connecting all process participants",
        "Order and payment system with referal program",
        "Order tracking, Client and Auditor management",
      ],
      challenges:
        "Creating a system connecting different user groups with different needs and work processes.",
      outcome:
        "Streamlined energy certificate issuance process and increased market transparency.",
    },
  ];

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
      x: -480,
      scale: 0.8,
      zIndex: 3,
      opacity: 0.7,
      rotateY: 15,
    },
    right: {
      x: 480,
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
        <div className="relative mb-8 perspective-1000">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-warning/5 to-secondary/5 rounded-3xl blur-3xl" />
          
          <div className="relative h-[680px] sm:h-[700px] flex items-center justify-center overflow-hidden">
            {getVisibleCards().map(({ project, position, index }) => (
              <motion.div
                key={index}
                animate={getCardVariant(position)}
                className="absolute cursor-pointer"
                initial={getCardVariant(position)}
                onClick={() => position !== 0 && setCurrentProject(index)}
                style={{
                  transformStyle: "preserve-3d",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
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
                <ProjectCard
                  project={project}
                />
                
                {/* Overlay for non-center cards */}
                {position !== 0 && (
                  <motion.div
                    className="absolute inset-0 bg-black/20 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
            
            {/* Center card spotlight effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-warning/10 to-transparent rounded-full pointer-events-none z-0"></div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <Button
            isIconOnly
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-content2/90 hover:bg-content3 z-20 shadow-lg backdrop-blur-sm border-2 border-divider hover:border-warning-400 transition-all duration-300"
            onClick={prevProject}
            size="lg"
          >
            <ChevronLeft size={28} />
          </Button>

          <Button
            isIconOnly
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-content2/90 hover:bg-content3 z-20 shadow-lg backdrop-blur-sm border-2 border-divider hover:border-warning-400 transition-all duration-300"
            onClick={nextProject}
            size="lg"
          >
            <ChevronRight size={28} />
          </Button>

          {/* Enhanced floating control overlay */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <div className="flex items-center px-3 py-2 bg-content2/80 backdrop-blur-sm rounded-lg border border-divider">
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
