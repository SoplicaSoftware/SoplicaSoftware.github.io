import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Github, Linkedin, Mail, Coffee } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/SoplicaSoftware",
      label: "GitHub",
      color: "hover:text-foreground-300",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/soplica-software",
      label: "LinkedIn",
      color: "hover:text-primary",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:soplicasoftwaresolutions@gmail.com",
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kacper Rogóż
            </h3>
            <p className="text-foreground-600 leading-relaxed">
              Full-stack developer focused on building complete software
              solutions — from idea to production. Specializing in SaaS
              platforms, desktop applications, and automation systems.
            </p>
            <div className="flex items-center text-foreground-500">
              <span>Made with</span>
              <Coffee className="w-4 h-4 text-amber-700 mx-2" />
              <span>using React & HeroUI</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="text-foreground-600 hover:text-foreground transition-colors duration-300 hover:underline"
                    onClick={() => scrollToSection(link.href)}
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
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Let&apos;s Connect
            </h4>
            <p className="text-foreground-600 mb-6">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  aria-label={social.label}
                  className={`text-foreground-500 ${social.color} transition-all duration-300`}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
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
        <div className="border-t border-divider my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="text-foreground-500 text-sm flex flex-col space-y-1 md:space-y-0">
            <div>© {new Date().getFullYear()} Kacper Rogóż. All rights reserved.</div>
            <div>
              <a 
                href="https://storyset.com/online" 
                className="hover:text-foreground transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Online illustrations by Storyset
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <motion.button
            className="text-foreground-500 hover:text-foreground transition-colors duration-300 flex items-center space-x-2"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-sm">Back to Top</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 10l7-7m0 0l7 7m-7-7v18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
