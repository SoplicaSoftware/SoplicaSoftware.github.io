import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  Phone,
  Linkedin,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  projectType: string;
  timeline: string;
  services: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  subject?: string;
  projectType?: string;
  timeline?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    projectType: "",
    timeline: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data for FormSubmit
      const formSubmitData = new FormData();

      // Add form fields
      formSubmitData.append("name", formData.name);
      formSubmitData.append("email", formData.email);
      formSubmitData.append("company", formData.company || "Not provided");
      formSubmitData.append("phone", formData.phone || "Not provided");
      formSubmitData.append("subject", formData.subject);
      formSubmitData.append(
        "projectType",
        formData.projectType || "Not specified",
      );
      formSubmitData.append("timeline", formData.timeline || "Not specified");
      formSubmitData.append(
        "services",
        formData.services.length > 0
          ? formData.services.join(", ")
          : "None selected",
      );
      formSubmitData.append("message", formData.message);

      // Add FormSubmit configuration
      formSubmitData.append(
        "_subject",
        `New Contact Form Submission: ${formData.subject}`,
      );
      formSubmitData.append("_captcha", "false"); // Disable captcha for better UX
      formSubmitData.append("_template", "table"); // Use table template for better formatting
      formSubmitData.append("_next", window.location.href); // Redirect back to current page

      // Submit to FormSubmit
      const response = await fetch(
        "https://formsubmit.co/soplicasoftwaresolutions@gmail.com",
        {
          method: "POST",
          body: formSubmitData,
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          projectType: "",
          timeline: "",
          services: [],
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch {
      // Handle error silently or show user-friendly error message
      // You could add error state management here
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="py-20 px-4 bg-gradient-to-b from-content1 to-background"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-danger to-warning mx-auto mb-6" />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you!
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch min-h-[600px]"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true }}
          whileInView="visible"
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-5 flex flex-col justify-between"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-foreground-600 leading-relaxed mb-4">
                  I&apos;m always interested in new opportunities, challenging
                  projects, and meaningful collaborations. Whether you have a
                  question about my work or want to discuss a potential project,
                  don&apos;t hesitate to reach out.
                </p>
                <p className="text-foreground-600 leading-relaxed">
                  I typically respond within 24 hours and would be happy to
                  schedule a call to discuss your needs in detail.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center text-foreground-600">
                  <Mail className="w-5 h-5 text-danger mr-4" />
                  <a
                    className="hover:text-danger transition-colors duration-200"
                    href="mailto:soplicasoftwaresolutions@gmail.com"
                  >
                    soplicasoftwaresolutions@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-foreground-600">
                  <Phone className="w-5 h-5 text-danger mr-4" />
                  <a
                    className="hover:text-danger transition-colors duration-200"
                    href="tel:+48730017338"
                  >
                    +48 730 017 338
                  </a>
                </div>
                <div className="flex items-center text-foreground-600">
                  <Linkedin className="w-5 h-5 text-danger mr-4" />
                  <a
                    className="hover:text-danger transition-colors duration-200"
                    href="https://www.linkedin.com/in/soplica-software"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center text-foreground-600">
                  <MessageSquare className="w-5 h-5 text-danger mr-4" />
                  <span>Available for freelance & full-time opportunities</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-4 bg-content2/30 rounded-lg border border-divider">
              <h4 className="text-foreground font-semibold mb-3">
                What I Can Help With:
              </h4>
              <ul className="space-y-1.5 text-foreground-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0" />
                  Full stack web and desktop application development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0" />
                  Web scraping, automation, and custom tool creation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0" />
                  Cloud infrastructure, server setup, and hosting solutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0" />
                  Application design, technical leadership, and project planning
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0" />
                  Technology consulting and guidance
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="flex" variants={itemVariants}>
            <Card className="bg-content2/50 border border-divider backdrop-blur-sm w-full flex flex-col">
              <CardBody className="p-4 lg:p-5 flex flex-col h-full">
                {isSubmitted ? (
                  <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 flex flex-col justify-center flex-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-foreground-600">
                      Thank you for reaching out. I&apos;ll get back to you
                      soon!
                    </p>
                  </motion.div>
                ) : (
                  <form
                    className="space-y-3 flex flex-col h-full"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <Input
                            className="w-full"
                            classNames={{
                              input: "text-sm",
                              inputWrapper: "h-10",
                            }}
                            errorMessage={errors.name}
                            isInvalid={!!errors.name}
                            name="name"
                            placeholder="Your Name *"
                            startContent={
                              <User className="w-4 h-4 text-foreground-400" />
                            }
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <Input
                            className="w-full"
                            classNames={{
                              input: "text-sm",
                              inputWrapper: "h-10",
                            }}
                            errorMessage={errors.email}
                            isInvalid={!!errors.email}
                            name="email"
                            placeholder="Your Email *"
                            startContent={
                              <Mail className="w-4 h-4 text-foreground-400" />
                            }
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <Input
                            className="w-full"
                            classNames={{
                              input: "text-sm",
                              inputWrapper: "h-10",
                            }}
                            name="company"
                            placeholder="Company (Optional)"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <Input
                            className="w-full"
                            classNames={{
                              input: "text-sm",
                              inputWrapper: "h-10",
                            }}
                            name="phone"
                            placeholder="Phone (Optional)"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <Input
                        className="w-full"
                        classNames={{
                          input: "text-sm",
                          inputWrapper: "h-10",
                        }}
                        errorMessage={errors.subject}
                        isInvalid={!!errors.subject}
                        name="subject"
                        placeholder="Subject *"
                        startContent={
                          <MessageSquare className="w-4 h-4 text-foreground-400" />
                        }
                        value={formData.subject}
                        onChange={handleChange}
                      />

                      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <select
                            className="w-full h-10 px-3 text-sm bg-content2 border border-divider rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                          >
                            <option value="">Project Type</option>
                            <option value="web-app">Web Application</option>
                            <option value="desktop-app">
                              Desktop Application
                            </option>
                            <option value="mobile-app">
                              Mobile Application
                            </option>
                            <option value="automation">
                              Automation/Scripting
                            </option>
                            <option value="consulting">Consulting</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <select
                            className="w-full h-10 px-3 text-sm bg-content2 border border-divider rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                          >
                            <option value="">Project Timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-3-months">1-3 Months</option>
                            <option value="3-6-months">3-6 Months</option>
                            <option value="6-plus-months">6+ Months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>

                      <div className="hidden sm:block">
                        <h5 className="text-xs font-medium text-foreground mb-2">
                          Services of Interest (Optional):
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            "Web Development",
                            "Web Scraping",
                            "Cloud Infrastructure",
                            "Desktop Applications",
                            "Automation Tools",
                            "Technical Consulting",
                          ].map((service) => (
                            <label
                              key={service}
                              className="flex items-center space-x-2 text-xs cursor-pointer"
                            >
                              <input
                                checked={formData.services.includes(service)}
                                className="w-4 h-4 rounded border-divider text-danger focus:ring-danger focus:ring-1"
                                type="checkbox"
                                onChange={() => handleServiceChange(service)}
                              />
                              <span className="text-foreground-600 text-xs leading-tight">
                                {service}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col min-h-0">
                        <textarea
                          className={`w-full px-3 py-2 text-sm bg-content2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary flex-1 min-h-[120px] sm:max-h-[200px] ${
                            errors.message ? "border-danger" : "border-divider"
                          }`}
                          name="message"
                          placeholder="Tell me about your project, goals, and any specific requirements... *"
                          value={formData.message}
                          onChange={(e) => handleChange(e as any)}
                        />
                        {errors.message && (
                          <p className="text-danger text-xs mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      className="w-full font-semibold py-2 h-10 text-sm mt-3"
                      color="danger"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      startContent={
                        !isSubmitting && <Send className="w-4 h-4" />
                      }
                      type="submit"
                      variant="shadow"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
