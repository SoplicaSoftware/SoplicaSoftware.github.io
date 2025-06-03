import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard, { type Project } from "./ProjectCard";

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects: Project[] = [
    {
      id: 1,
      title: "rezerwacje.masujmnie.pl",
      description:
        "System rezerwacji masażu z dojazdem do klienta, podział na role wraz z możliwością ich tworzenia w oparciu o uprawnienia, definiowanie obszarów działania systemu (mapa interaktywna), generowanie voucherów pdf.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "Bootstrap"],
      features: [
        "System ról i uprawnień użytkowników",
        "Interaktywna mapa obszarów działania",
        "Generowanie voucherów PDF",
        "Rezerwacja z dojazdem do klienta",
        "Panel administracyjny",
      ],
      challenges:
        "Implementacja systemu uprawnień opartego na rolach i integracja z mapą interaktywną do definiowania obszarów obsługi.",
      outcome:
        "Zwiększenie efektywności zarządzania rezerwacjami i usprawnienie procesu obsługi klientów.",
    },
    {
      id: 2,
      title: "masazbiurowy.eu",
      description:
        "System rezerwacji masaży dla firm. Platforma umożliwiająca firmom łatwe zarządzanie rezerwacjami masaży dla swoich pracowników.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap"],
      liveUrl: "https://masazbiurowy.eu",
      features: [
        "Rezerwacje dla firm",
        "Zarządzanie pracownikami",
        "System płatności",
        "Kalendarz dostępności",
        "Raportowanie i statystyki",
      ],
      challenges:
        "Stworzenie systemu, który obsługuje zarówno indywidualnych klientów jak i firmy z wieloma pracownikami.",
      outcome:
        "Usprawnienie procesu rezerwacji masaży w firmach i zwiększenie zadowolenia pracowników.",
    },
    {
      id: 3,
      title: "Zbadaj Księgę",
      description:
        "System pozwalający monitorować zmiany właścicieli w księgach wieczystych. Automatyczne śledzenie i powiadomienia o zmianach własnościowych.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "Laravel", "MySQL", "API", "Cron Jobs"],
      features: [
        "Monitoring ksiąg wieczystych",
        "Automatyczne powiadomienia",
        "Historia zmian właścicieli",
        "Dashboard analityczny",
        "Export danych do PDF/Excel",
      ],
      challenges:
        "Integracja z zewnętrznymi źródłami danych ksiąg wieczystych i zapewnienie aktualności informacji.",
      outcome:
        "Zwiększenie transparentności rynku nieruchomości i ułatwienie monitoringu zmian własnościowych.",
    },
    {
      id: 4,
      title: "Duende Sounds Desktop",
      description:
        "Aplikacja desktopowa stworzona w Electron.js, służąca do przeglądania, kupowania i pobierania biblioteki dźwięków z serwisu internetowego. Zintegrowany ze stroną Wordpress, API i zewnętrznymi providerami usług AI.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "Electron.js",
        "JavaScript",
        "Node.js",
        "WordPress API",
        "AI Services",
      ],
      features: [
        "Przeglądanie biblioteki dźwięków",
        "System zakupów i płatności",
        "Pobieranie i zarządzanie plikami",
        "Integracja z WordPress",
        "Usługi AI do analizy dźwięku",
      ],
      challenges:
        "Integracja z wieloma zewnętrznymi API i zapewnienie płynnej synchronizacji między aplikacją desktopową a serwisem webowym.",
      outcome:
        "Stworzenie kompletnego ekosystemu do zarządzania biblioteką dźwięków z zaawansowanymi funkcjami AI.",
    },
    {
      id: 5,
      title: "Swiadectwo.energy",
      description:
        "System do zamawiania certyfikatów charakterystyki energetycznej. Łączy klientów, audytorów i pośredników nieruchomości w jednej platformie.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Payment Gateway"],
      features: [
        "Platforma łącząca wszystkich uczestników procesu",
        "System zleceń i płatności",
        "Generowanie certyfikatów",
        "Kalendarz audytorów",
        "Zarządzanie dokumentacją",
      ],
      challenges:
        "Stworzenie systemu łączącego różne grupy użytkowników z odmiennymi potrzebami i procesami pracy.",
      outcome:
        "Usprawnienie procesu wydawania certyfikatów energetycznych i zwiększenie transparentności rynku.",
    },
    {
      id: 6,
      title: "edero.ai",
      description:
        "Work in progress. Zestaw narzędzi do nowoczesnego i zautomatyzowanego tworzenia contentu na social media z wykorzystaniem sztucznej inteligencji.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "Next.js",
        "TypeScript",
        "AI APIs",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      features: [
        "Automatyczne generowanie treści",
        "Analiza wydajności postów",
        "Planowanie publikacji",
        "Integracja z social media",
        "AI-powered content optimization",
      ],
      challenges:
        "Integracja z różnymi API sztucznej inteligencji i stworzenie intuicyjnego interfejsu do zarządzania treścią.",
      outcome:
        "Projekt w fazie rozwoju - cel to zrewolucjonizowanie sposobu tworzenia treści na social media.",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getProjectSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-background to-content1"
      id="portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-warning mx-auto mb-8" />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;m
            passionate about
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mb-8">
          <AnimatePresence custom={currentProject} mode="wait">
            <motion.div
              key={currentProject}
              animate="center"
              className="w-full"
              custom={currentProject}
              exit="exit"
              initial="enter"
              transition={{
                opacity: { duration: 0.3 },
                scale: { duration: 0.3, ease: "easeInOut" },
              }}
              variants={slideVariants}
            >
              <ProjectCard
                project={projects[currentProject]}
                getProjectSlug={getProjectSlug}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button
            isIconOnly
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-content2/80 hover:bg-content3 z-10"
            onClick={prevProject}
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            isIconOnly
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-content2/80 hover:bg-content3 z-10"
            onClick={nextProject}
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? "bg-gradient-to-r from-secondary to-warning"
                  : "bg-content3 hover:bg-content4"
              }`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
