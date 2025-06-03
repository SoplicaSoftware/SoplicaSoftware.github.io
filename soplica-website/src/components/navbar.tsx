import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroUINavbar className="fixed top-0 z-50 bg-transparent" maxWidth="full">
      <NavbarContent className="w-full" justify="end">
        {/* Social Links */}
        <NavbarItem>
          <div className="flex items-center gap-2">
            {/* GitHub Link */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                isIconOnly
                aria-label="View GitHub Profile"
                as="a"
                className="text-foreground-600 hover:text-foreground transition-colors"
                href="https://github.com/SoplicaSoftware"
                rel="noopener noreferrer"
                target="_blank"
                variant="light"
              >
                <Github size={20} />
              </Button>
            </motion.div>

            {/* LinkedIn Link */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                isIconOnly
                aria-label="View LinkedIn Profile"
                as="a"
                className="text-foreground-600 hover:text-foreground transition-colors"
                href="https://www.linkedin.com/in/soplica-software"
                rel="noopener noreferrer"
                target="_blank"
                variant="light"
              >
                <Linkedin size={20} />
              </Button>
            </motion.div>

            {/* Email Link */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                isIconOnly
                aria-label="Send Email"
                as="a"
                className="text-foreground-600 hover:text-foreground transition-colors"
                href="mailto:soplicasoftwaresolutions@gmail.com"
                variant="light"
              >
                <Mail size={20} />
              </Button>
            </motion.div>
          </div>
        </NavbarItem>

        {/* Theme Switch */}
        <NavbarItem>
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThemeSwitch />
          </motion.div>
        </NavbarItem>

        {/* Get In Touch Button */}
        <NavbarItem>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="font-medium"
              color="primary"
              variant="shadow"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
