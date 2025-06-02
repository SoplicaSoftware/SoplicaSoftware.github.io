import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      <HeroUINavbar
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-divider"
            : "bg-transparent"
        }`}
        maxWidth="full"
      >
        <NavbarContent justify="end">
          <NavbarItem>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                isExternal
                href="https://github.com/johndeveloper"
                title="GitHub"
              >
                <GithubIcon
                  className="text-foreground hover:text-primary transition-colors"
                  size={24}
                />
              </Link>
            </motion.div>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem>
            <Button
              color="primary"
              variant={isScrolled ? "flat" : "bordered"}
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </NavbarItem>
        </NavbarContent>
      </HeroUINavbar>
    </motion.div>
  );
};
