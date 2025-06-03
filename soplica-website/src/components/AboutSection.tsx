import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Code, Palette, Smartphone, Globe } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "C#, ASP.NET, React, TypeScript, Python",
    },
    {
      icon: <Globe size={24} />,
      title: "SaaS & Web Platforms",
      description: "Real estate platforms, Web scrapers, APIs",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Desktop Applications",
      description: "Audio technology tools, Internal systems",
    },
    {
      icon: <Palette size={24} />,
      title: "Infrastructure & Automation",
      description: "Cloud services, System administration, Workflow automation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-background to-content1"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 flex justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Avatar
                  src="/prof.jpg"
                  alt="Developer Avatar"
                  className="w-40 h-40 text-large border-4 border-divider shadow-2xl"
                />
              </motion.div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Freelance Software Engineer | Startup Enthusiast
            </h3>

            <p className="text-foreground-600 text-lg leading-relaxed mb-6">
              {`I'm a full-stack developer with a strong focus on building complete software solutions — from idea to production. I work on web apps, desktop applications, automation, and setting up the systems behind them, like APIs, cloud services, and integrations. As a freelancer, I've worked on many real-world projects that are now live and used by clients.`}
            </p>

            <p className="text-foreground-600 text-lg leading-relaxed">
              {`Outside of work, I like to stay active with mountain biking, weightlifting, paddle boarding, running, shooting, and sailing — they help me stay grounded and clear-headed. I’m motivated, reliable, and big on good communication and making things work for the long haul.`}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-content2/50 border border-divider hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                  <CardBody className="p-6">
                    <div className="text-primary mb-4">{skill.icon}</div>
                    <h4 className="text-foreground font-semibold text-lg mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-foreground-500 text-sm">
                      {skill.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: "23+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "12+", label: "Happy Clients" },
            { number: "10+", label: "Technologies" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-content2/30 border border-divider"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-foreground-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
