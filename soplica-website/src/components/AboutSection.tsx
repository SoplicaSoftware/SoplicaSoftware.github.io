import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import {
  Code,
  User,
  Mountain,
  Dumbbell,
  Target,
  Waves,
  Database,
  Cloud,
  Monitor,
} from "lucide-react";
import { useState, useEffect } from "react";

// Counter animation component
const AnimatedCounter = ({
  value,
  duration,
}: {
  value: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Handle special case for "24/7"
  const isSpecialFormat = value === "24/7";

  // Extract number from string (e.g., "23+" -> 23, "4x" -> 4, "24/7" -> 24)
  const numericValue = isSpecialFormat
    ? 24
    : parseInt(value.replace(/[^0-9]/g, "")) || 0;

  // Get suffix (e.g., "+", "x", "/7")
  const suffix = isSpecialFormat ? "/7" : value.replace(/[0-9]/g, "");

  // Dynamic duration based on value size - smaller values animate faster
  const dynamicDuration =
    duration || Math.max(800, Math.min(2500, numericValue * 80));

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / dynamicDuration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOutCubic * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue, dynamicDuration]);

  return (
    <motion.div
      className="text-3xl font-bold text-foreground mb-2"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {count}
      {suffix}
    </motion.div>
  );
};

const AboutSection = () => {
  const [isPersonal, setIsPersonal] = useState(false);
  const [direction, setDirection] = useState(1);

  const professionalSkills = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "C#, ASP.NET, React, Python, TypeScript",
    },
    {
      icon: <Database size={24} />,
      title: "SaaS & Web Platforms",
      description: "Custom platforms, APIs, web scraping tools",
    },
    {
      icon: <Monitor size={24} />,
      title: "Desktop Applications",
      description: "Audio tools, utilities, internal applications",
    },
    {
      icon: <Cloud size={24} />,
      title: "Infrastructure & Automation",
      description: "Cloud systems, scripting, DevOps workflows",
    },
  ];

  const personalInterests = [
    {
      icon: <Mountain size={24} />,
      title: "Mountain Biking",
      description: "Freeride, trails & jumps, bike maintenance",
    },
    {
      icon: <Dumbbell size={24} />,
      title: "Weightlifting",
      description: "Strength training, bodybuilding, fitness goals",
    },
    {
      icon: <Waves size={24} />,
      title: "Water Sports",
      description: "Paddle boarding, sailing, water adventures",
    },
    {
      icon: <Target size={24} />,
      title: "Outdoor Activities",
      description: "Running, shooting sports, nature exploration",
    },
  ];

  const switchVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      rotateY: direction > 0 ? 25 : -25, // 3D flip effect
      scale: 0.9,
      filter: "blur(4px)",
    }),
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 50 : -50,
      rotateY: direction < 0 ? 25 : -25,
      scale: 0.9,
      filter: "blur(4px)",
      transition: {
        duration: 0.4,
        ease: [0.55, 0.06, 0.68, 0.19],
      },
    }),
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3 + index * 0.08, // Delay after main transition completes
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="about">
      {/* Seamless background blend that extends beyond section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />

      {/* Extended blended background that goes beyond the section */}
      <div className="absolute -inset-y-32 inset-x-0 bg-gradient-to-b from-transparent via-content1/10 to-transparent blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div
          className="text-center mb-16 relative z-30"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />

          {/* Toggle Button */}
          <div className="mb-8 relative z-40 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 20px 8px rgba(59, 130, 246, 0.2)",
                  "0 0 0 0 rgba(59, 130, 246, 0.4)",
                ],
                backgroundColor: [
                  "rgba(59, 130, 246, 0.1)",
                  "rgba(59, 130, 246, 0.2)",
                  "rgba(59, 130, 246, 0.1)",
                ],
              }}
              className="rounded-full p-1"
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button
                className="relative overflow-hidden"
                color="primary"
                startContent={
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {isPersonal ? <Code size={18} /> : <User size={18} />}
                  </motion.div>
                }
                variant={isPersonal ? "solid" : "bordered"}
                onPress={() => {
                  setDirection(isPersonal ? -1 : 1);
                  setIsPersonal(!isPersonal);
                }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  {isPersonal ? "View Professional" : "View Personal"}
                </motion.span>

                {/* Animated light effect overlay */}
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 0.6, 0],
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                  }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Subtle background that extends beyond section */}
          <div className="absolute -inset-x-96 -inset-y-24 bg-gradient-to-b from-transparent via-content1/4 to-transparent blur-2xl" />

          {/* Dynamic background gradient with soft blending */}
          <motion.div
            animate={{
              background: isPersonal
                ? "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 0%, #f59e0b 25%, transparent 60%)"
                : "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 0%, #3b82f6 25%, transparent 60%)",
            }}
            className="absolute -inset-x-24 -inset-y-24 opacity-[0.08] pointer-events-none blur-3xl"
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Subtle ambient glow */}
          <motion.div
            animate={{
              background: isPersonal
                ? "radial-gradient(circle at 30% 70%, #f59e0b 0%, transparent 35%), radial-gradient(circle at 70% 30%, #ef4444 0%, transparent 35%)"
                : "radial-gradient(circle at 30% 70%, #3b82f6 0%, transparent 35%), radial-gradient(circle at 70% 30%, #8b5cf6 0%, transparent 35%)",
            }}
            className="absolute -inset-x-32 -inset-y-32 opacity-[0.04] pointer-events-none blur-[80px]"
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={isPersonal ? "personal" : "professional"}
              animate="animate"
              className="w-full relative z-10"
              custom={direction}
              exit="exit"
              initial="initial"
              style={{
                willChange: "opacity, transform",
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
              variants={switchVariants}
            >
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  {/* Profile Section */}
                  <div className="text-center lg:text-left">
                    <div className="mb-8 flex justify-center lg:justify-start">
                      <motion.div
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Avatar
                          alt="Developer Avatar"
                          className="w-40 h-40 text-large border-4 border-divider shadow-2xl object-cover object-center"
                          imgProps={{
                            className:
                              "object-cover object-center w-full h-full",
                          }}
                          src={!isPersonal ? "/prof_2.png" : "/bike.JPG"}
                        />
                      </motion.div>
                    </div>
                    <div>
                      {!isPersonal ? (
                        <>
                          <h3 className="text-2xl font-semibold text-foreground mb-4">
                            Freelance Software Engineer | Startup Enthusiast
                          </h3>
                          <p className="text-foreground-600 text-lg leading-relaxed mb-6">
                            {`I'm a full-stack developer with a strong focus on building complete software solutions — from idea to production. I work on web apps, desktop applications, automation, and setting up the systems behind them, like APIs, cloud services, and integrations. As a freelancer, I've worked on many real-world projects that are now live and used by clients.`}
                          </p>
                          <p className="text-foreground-600 text-lg leading-relaxed">
                            {`I'm motivated, reliable, and big on good communication and making things work for the long haul. I love turning complex problems into elegant solutions that actually make a difference.`}
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-2xl font-semibold text-foreground mb-4">
                            Adventure Seeker | Fitness Enthusiast | Nature Lover
                          </h3>
                          <p className="text-foreground-600 text-lg leading-relaxed mb-6">
                            {`When I'm not coding, you'll find me pushing my limits outdoors. I'm passionate about mountain biking through challenging trails, hitting personal records in the gym, and exploring waterways on my paddle board. These activities aren't just hobbies — they're essential for keeping my mind sharp and creativity flowing.`}
                          </p>
                          <p className="text-foreground-600 text-lg leading-relaxed">
                            {`I believe in living an active, balanced life. Whether it's a long run to clear my head, a sailing adventure on the weekend, or precision shooting at the range, I find that physical challenges complement mental ones perfectly.`}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Skills/Interests Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatePresence mode="wait">
                      {(isPersonal
                        ? personalInterests
                        : professionalSkills
                      ).map((item, index) => (
                        <motion.div
                          key={`${isPersonal ? "personal" : "professional"}-${item.title}-${index}`}
                          animate="animate"
                          custom={index}
                          exit="exit"
                          initial="initial"
                          variants={cardVariants}
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <Card className="bg-content2/50 border border-divider hover:border-primary/50 transition-all duration-300 backdrop-blur-sm h-full">
                            <CardBody className="p-6 flex flex-col h-full">
                              <div className="text-primary mb-4">
                                {item.icon}
                              </div>
                              <h4 className="text-foreground font-semibold text-lg mb-2">
                                {item.title}
                              </h4>
                              <p className="text-foreground-500 text-sm flex-grow">
                                {item.description}
                              </p>
                            </CardBody>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {(!isPersonal
                    ? [
                        { number: "23+", label: "Projects Completed" },
                        { number: "2+", label: "Years Experience" },
                        { number: "12+", label: "Happy Clients" },
                        { number: "10+", label: "Technologies" },
                      ]
                    : [
                        { number: "6+", label: "Years Mountain Biking" },
                        { number: "4x", label: "Weekly Workouts" },
                        { number: "50+", label: "Trails Explored" },
                        { number: "24/7", label: "Adventure Ready" },
                      ]
                  ).map((stat, index) => (
                    <motion.div
                      key={index}
                      className="p-6 rounded-lg bg-content2/30 border border-divider"
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <AnimatedCounter value={stat.number} />
                      <div className="text-foreground-500 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
