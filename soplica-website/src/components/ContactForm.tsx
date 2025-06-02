import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-content1 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-danger to-warning mx-auto mb-8"></div>
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-foreground-600 leading-relaxed mb-6">
                I&apos;m always interested in new opportunities, challenging projects, and
                meaningful collaborations. Whether you have a question about my work or want
                to discuss a potential project, don&apos;t hesitate to reach out.
              </p>
              <p className="text-foreground-600 leading-relaxed">
                I typically respond within 24 hours and would be happy to schedule a call to
                discuss your needs in detail.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center text-foreground-600">
                <Mail className="w-5 h-5 text-danger mr-4" />
                <span>john.developer@email.com</span>
              </div>
              <div className="flex items-center text-foreground-600">
                <MessageSquare className="w-5 h-5 text-danger mr-4" />
                <span>Available for freelance & full-time opportunities</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-content2/30 rounded-lg border border-divider">
              <h4 className="text-foreground font-semibold mb-3">What I Can Help With:</h4>
              <ul className="space-y-2 text-foreground-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full-stack web application development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UI/UX design and implementation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Code review and optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-danger rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Technical consulting and mentoring
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-content2/50 border border-divider backdrop-blur-sm">
              <CardBody className="p-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-foreground-600">
                      Thank you for reaching out. I&apos;ll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          startContent={<User className="w-4 h-4 text-foreground-400" />}
                          className="w-full"
                          isInvalid={!!errors.name}
                          errorMessage={errors.name}
                        />
                      </div>

                      <div>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          startContent={<Mail className="w-4 h-4 text-foreground-400" />}
                          className="w-full"
                          isInvalid={!!errors.email}
                          errorMessage={errors.email}
                        />
                      </div>
                    </div>

                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      startContent={<MessageSquare className="w-4 h-4 text-foreground-400" />}
                      className="w-full"
                      isInvalid={!!errors.subject}
                      errorMessage={errors.subject}
                    />

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleChange(e as any)}
                        placeholder="Your message..."
                        rows={5}
                        className={`w-full px-3 py-2 bg-content2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary ${
                          errors.message ? "border-danger" : "border-divider"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-danger text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      color="danger"
                      variant="shadow"
                      className="w-full font-semibold py-6 text-lg"
                      startContent={!isSubmitting && <Send className="w-5 h-5" />}
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
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
