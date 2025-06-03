import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

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
        {/* GitHub Link */}
        <NavbarItem>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {" "}
            <Button
              as="a"
              href="https://github.com/SoplicaSoftware"
              target="_blank"
              rel="noopener noreferrer"
              isIconOnly
              variant="light"
              className="text-foreground-600 hover:text-foreground transition-colors"
              aria-label="View GitHub Profile"
            >
              <Github size={20} />
            </Button>
          </motion.div>
        </NavbarItem>

        {/* Theme Switch */}
        <NavbarItem>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <ThemeSwitch />
          </motion.div>
        </NavbarItem>

        {/* Get In Touch Button */}
        <NavbarItem>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              color="primary"
              variant="shadow"
              className="font-medium"
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
