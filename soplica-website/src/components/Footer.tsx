import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/johndeveloper",
      label: "GitHub",
      color: "hover:text-foreground-300",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/johndeveloper",
      label: "LinkedIn",
      color: "hover:text-primary",
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com/johndeveloper",
      label: "Twitter",
      color: "hover:text-secondary",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:john.developer@email.com",
      label: "Email",
      color: "hover:text-success",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-t from-content1 to-background text-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              John Developer
            </h3>
            <p className="text-foreground-600 leading-relaxed">
              Passionate full-stack developer creating beautiful, functional web applications
              with modern technologies and clean code.
            </p>
            <div className="flex items-center text-foreground-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-danger mx-2" />
              <span>using React & HeroUI</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-foreground-600 hover:text-foreground transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Let&apos;s Connect</h4>
            <p className="text-foreground-600 mb-6">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-foreground-500 ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                color="primary"
                variant="shadow"
                onClick={() => scrollToSection("#contact")}
              >
                Start a Project
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-divider my-8"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-foreground-500 text-sm">
            © {new Date().getFullYear()} John Developer. All rights reserved.
          </div>

          <div className="flex space-x-6 text-sm text-foreground-500">
            <button
              className="hover:text-foreground transition-colors duration-300"
              onClick={() => window.open("/privacy-policy", "_blank")}
            >
              Privacy Policy
            </button>
            <button
              className="hover:text-foreground transition-colors duration-300"
              onClick={() => window.open("/terms-of-service", "_blank")}
            >
              Terms of Service
            </button>
          </div>

          {/* Back to Top Button */}
          <motion.button
            className="text-foreground-500 hover:text-foreground transition-colors duration-300 flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="text-sm">Back to Top</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
