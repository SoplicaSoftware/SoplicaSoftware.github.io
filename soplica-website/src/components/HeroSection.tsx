import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";

import AnimatedGrid from "./AnimatedGrid";
import ResumeModal from "./ResumeModal";

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-content1/20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Background Animation with softer blending */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl"
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
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            style={{
              paddingBottom: "0.2em",
              lineHeight: "1.15",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Kacper Rogóż
          </motion.h1>

          {/* Tagline Animation */}
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl lg:text-3xl text-foreground-600 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Freelance Software Engineer | SaaS Developer | Automation & Internal
            Tools Specialist
          </motion.p>

          {/* Subtitle Animation */}
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-foreground-500 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Full-stack developer focused on building complete software solutions
            — from idea to production. Specializing in web apps, desktop
            applications, automation, and cloud integrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <Button
              className="font-semibold px-8 py-6 text-lg"
              color="primary"
              size="lg"
              variant="shadow"
              onClick={() => scrollToSection("portfolio")}
            >
              View Portfolio
            </Button>

            <Button
              className="font-semibold px-8 py-6 text-lg"
              size="lg"
              startContent={<Download size={20} />}
              variant="bordered"
              onClick={() => setIsResumeModalOpen(true)}
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

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
