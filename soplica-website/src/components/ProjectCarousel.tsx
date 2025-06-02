import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { Chip } from "@heroui/chip";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  challenges: string;
  outcome: string;
}

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      githubUrl: "https://github.com/johndeveloper/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      features: [
        "User authentication and authorization",
        "Real-time inventory management",
        "Stripe payment integration",
        "Admin dashboard with analytics",
        "Responsive design for all devices",
      ],
      challenges:
        "Implemented real-time inventory updates using WebSockets and optimized database queries for handling large product catalogs.",
      outcome: "Increased client sales by 35% and reduced cart abandonment by 25%.",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, file sharing, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
      githubUrl: "https://github.com/johndeveloper/task-manager",
      liveUrl: "https://taskmanager-demo.com",
      features: [
        "Real-time collaboration",
        "File attachment system",
        "Project timeline visualization",
        "Team member management",
        "Mobile-responsive design",
      ],
      challenges:
        "Built a complex real-time synchronization system to handle multiple users editing tasks simultaneously.",
      outcome: "Improved team productivity by 40% and reduced project delivery time by 30%.",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with detailed forecasts, interactive maps, and location-based recommendations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Tailwind"],
      githubUrl: "https://github.com/johndeveloper/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
      features: [
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based recommendations",
        "Historical weather data",
        "Dark/light theme toggle",
      ],
      challenges:
        "Integrated multiple weather APIs and created custom data visualization components for weather patterns.",
      outcome: "Featured in local tech blog and gained 1000+ active users in first month.",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics platform for social media managers with AI-powered insights and automated reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/johndeveloper/social-analytics",
      liveUrl: "https://social-analytics-demo.com",
      features: [
        "Multi-platform data aggregation",
        "AI-powered content recommendations",
        "Automated report generation",
        "Real-time engagement tracking",
        "Custom dashboard widgets",
      ],
      challenges:
        "Developed machine learning models for content performance prediction and handled large-scale data processing.",
      outcome:
        "Helped marketing teams increase engagement rates by 50% and save 10 hours per week on reporting.",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-background to-content1">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-warning mx-auto mb-8"></div>
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;m passionate about
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mb-8">
          <AnimatePresence mode="wait" custom={currentProject}>
            <motion.div
              key={currentProject}
              custom={currentProject}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3, ease: "easeInOut" },
              }}
              className="w-full"
            >
              <Card className="bg-content2/50 border border-divider overflow-hidden">
                <CardBody className="p-0">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="relative group">
                      <img
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm text-white"
                          startContent={<Eye size={16} />}
                          onClick={() => openProjectModal(projects[currentProject])}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {projects[currentProject].title}
                      </h3>

                      <p className="text-foreground-600 mb-6 leading-relaxed">
                        {projects[currentProject].description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-foreground font-medium mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[currentProject].technologies.map((tech, index) => (
                            <Chip
                              key={index}
                              size="sm"
                              color="secondary"
                              variant="bordered"
                            >
                              {tech}
                            </Chip>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          color="secondary"
                          variant="shadow"
                          startContent={<ExternalLink size={16} />}
                          as="a"
                          href={projects[currentProject].liveUrl}
                          target="_blank"
                        >
                          Live Demo
                        </Button>

                        <Button
                          variant="bordered"
                          startContent={<Github size={16} />}
                          as="a"
                          href={projects[currentProject].githubUrl}
                          target="_blank"
                        >
                          View Code
                        </Button>

                        <Button
                          variant="light"
                          onClick={() => openProjectModal(projects[currentProject])}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button
            isIconOnly
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-content2/80 hover:bg-content3 z-10"
            onClick={prevProject}
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            isIconOnly
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-content2/80 hover:bg-content3 z-10"
            onClick={nextProject}
          >
            <ChevronRight size={24} />
          </Button>
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

        {/* Project Detail Modal */}
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="3xl"
          classNames={{
            body: "py-6",
            backdrop: "bg-black/50 backdrop-opacity-40",
            base: "border-divider bg-content1",
            header: "border-b-1 border-divider",
            footer: "border-t-1 border-divider",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold">{selectedProject?.title}</h3>
                  <p className="text-foreground-500">{selectedProject?.description}</p>
                </ModalHeader>
                <ModalBody>
                  {selectedProject && (
                    <div className="space-y-6">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-foreground-600">
                              <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Technical Challenges:</h4>
                        <p className="text-foreground-600">{selectedProject.challenges}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Outcome:</h4>
                        <p className="text-foreground-600">{selectedProject.outcome}</p>
                      </div>
                    </div>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="secondary"
                    startContent={<ExternalLink size={16} />}
                    as="a"
                    href={selectedProject?.liveUrl}
                    target="_blank"
                  >
                    Visit Project
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default ProjectCarousel;
