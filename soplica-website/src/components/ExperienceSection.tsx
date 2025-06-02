import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"],
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Reduced deployment time by 60%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      location: "Austin, TX",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and mobile-first designs. Collaborated with UX designers to implement pixel-perfect interfaces with smooth animations.",
      technologies: ["React", "Vue.js", "Sass", "Webpack", "Jest"],
      achievements: [
        "Built 15+ responsive web applications",
        "Implemented design system used across company",
        "Increased user engagement by 25%",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description:
        "Started my career building dynamic websites and learning modern web development practices. Gained experience in both frontend and backend technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Developed company website from scratch",
        "Learned 5+ new technologies",
        "Delivered projects 20% ahead of schedule",
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
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-content1 to-background">
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
            My professional journey in software development, from junior developer to senior
            role
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
                      <h4 className="text-foreground font-medium mb-3">Technologies Used:</h4>
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
                      <h4 className="text-foreground font-medium mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-foreground-600">
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
