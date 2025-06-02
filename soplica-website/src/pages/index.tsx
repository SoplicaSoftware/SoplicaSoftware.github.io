
import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectCarousel />
        <ContactForm />
        <Footer />
      </div>
    </DefaultLayout>
  );
}
