import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Co-Founder and Software Engineer",
      company: "Edero AI",
      location: "Remote",
      period: "January 2025 - Present",
      description:
        "Leading the technical design, development, and maintenance of a comprehensive web-based system for creating social media content. Responsible for researching technologies, defining the system architecture, and driving implementation.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AI/ML APIs",
        "Cloud Services",
      ],
      achievements: [
        "Architected scalable AI-powered content creation platform",
        "Led technical research and implementation",
        "Established development best practices",
      ],
    },
    {
      title: "Freelance Developer & System Administrator",
      company: "Duende Sounds",
      location: "Remote",
      period: "May 2024 - Present",
      description:
        "Led the end-to-end development of a desktop application for an audio technology company, enabling users to create, manage, and generate sound effects—including AI-powered audio. Built internal tools, implemented workflow automations, and managed supporting infrastructure.",
      technologies: [
        "Desktop Development",
        "AI Audio",
        "Infrastructure",
        "Automation",
        "Cloud",
      ],
      achievements: [
        "Delivered complete desktop application from concept to production",
        "Implemented AI-powered audio generation features",
        "Built internal workflow automation tools",
      ],
    },
    {
      title: "Freelance Developer & System Administrator",
      company: "Actiflow Sp. z o.o.",
      location: "Remote",
      period: "May 2023 - Present",
      description:
        "Led the full development lifecycle of real estate SaaS platforms—from research and design to implementation, testing, deployment, and ongoing support. Created and maintain web scrapers that provide reliable and continuous data collection and processing.",
      technologies: [
        "SaaS Development",
        "Web Scrapers",
        "Real Estate APIs",
        "Cloud Infrastructure",
        "Data Processing",
      ],
      achievements: [
        "Built complete real estate SaaS platform from scratch",
        "Implemented reliable web scraping systems",
        "Managed full deployment and infrastructure",
      ],
    },
    {
      title: "Freelance Software Developer",
      company: "Various Clients",
      location: "Remote",
      period: "January 2023 - Present",
      description:
        "Work closely with clients to turn ideas into working web apps, web scrapers, automations, and APIs. Handle everything from planning and development to deployment and support. Projects include real estate platforms, desktop tools, and internal systems.",
      technologies: [
        "Full-Stack Development",
        "Web Automation",
        "API Development",
        "Cloud Deployment",
      ],
      achievements: [
        "Delivered 20+ successful client projects",
        "Built diverse range of applications and tools",
        "Established long-term client relationships",
      ],
    },
    {
      title: "C# Software Development Intern",
      company: "Sano Centre for Computational Medicine",
      location: "Kraków, Poland",
      period: "April 2023",
      description:
        "Worked on an experimental project developing C# and Unity code to integrate a robotic arm with VR glasses and haptic gloves. The project explored advanced interaction techniques within a company focused on medical technology research.",
      technologies: ["C#", "Unity", "VR", "Haptic Technology", "Medical Tech"],
      achievements: [
        "Developed VR integration with robotic systems",
        "Implemented haptic feedback systems",
        "Contributed to medical technology research",
      ],
    },
    {
      title: "ASP.NET Core Software Development Intern",
      company: "BLOOM Sp.j",
      location: "Niepołomice, Poland",
      period: "August 2022",
      description:
        "Developed web applications using C# and ASP.NET to support billing and invoicing processes. Created features for invoice generation, export functionality, and designed APIs to integrate billing and invoice systems.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "API Development",
        "Billing Systems",
        "SQL",
      ],
      achievements: [
        "Built complete billing and invoicing system",
        "Developed API integrations",
        "Implemented export functionality",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gradient-to-b from-content1 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-success to-primary mx-auto mb-8"></div>
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            My professional journey in software development, from junior
            developer to senior role
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-success via-primary to-secondary"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto"
              }`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background z-10"></div>

              <motion.div
                className="ml-12 md:ml-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-content2/50 border border-divider hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                  <CardBody className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary mb-2">
                          <ExternalLink size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end text-sm text-foreground-500">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-foreground font-medium mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            size="sm"
                            color="primary"
                            variant="bordered"
                          >
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-foreground font-medium mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start text-foreground-600"
                          >
                            <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
