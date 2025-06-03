import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { ChevronDown, Download } from "lucide-react";

import AnimatedGrid from "./AnimatedGrid";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-content1 relative overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGrid />
      
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content + Scroll Indicator Wrapper */}
      <div className="relative flex flex-col items-center w-full z-10 px-4 max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="text-center w-full">
          {/* Name Animation */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight"
            style={{
              paddingBottom: "0.2em",
              lineHeight: "1.15",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Kacper Rogóż
          </motion.h1>

          {/* Tagline Animation */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-foreground-600 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Freelance Software Engineer | SaaS Developer | Automation & Internal
            Tools Specialist
          </motion.p>

          {/* Subtitle Animation */}
          <motion.p
            className="text-lg md:text-xl text-foreground-500 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Full-stack developer focused on building complete software solutions —
            from idea to production. Specializing in web apps, desktop
            applications, automation, and cloud integrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <Button
              size="lg"
              color="primary"
              variant="shadow"
              className="font-semibold px-8 py-6 text-lg"
              onClick={() => scrollToSection("portfolio")}
            >
              View Portfolio
            </Button>

            <Button
              size="lg"
              variant="bordered"
              className="font-semibold px-8 py-6 text-lg"
              startContent={<Download size={20} />}
            >
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-16" // Adjust this margin as needed for vertical position
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            className="text-foreground-400 hover:text-foreground transition-colors duration-300 flex flex-col items-center"
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => scrollToSection("about")}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
