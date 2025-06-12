import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { ExternalLink, Star, Target, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface DetailedSection {
  title: string;
  content: string;
}

interface DetailedContent {
  sections: DetailedSection[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  features: string[];
  challenges: string;
  outcome: string;
  detailedContent?: DetailedContent;
}

interface ProjectCardProps {
  project: Project;
}

const typeColor: Record<string, string> = {
  PHP: "bg-gradient-to-br from-warning-200 to-warning-400 text-warning-900 border-warning-500",
  Laravel:
    "bg-gradient-to-br from-danger-200 to-danger-400 text-danger-900 border-danger-500",
  JavaScript:
    "bg-gradient-to-br from-warning-100 to-warning-300 text-warning-800 border-warning-400",
  MySQL:
    "bg-gradient-to-br from-primary-200 to-primary-400 text-primary-900 border-primary-500",
  Bootstrap:
    "bg-gradient-to-br from-secondary-200 to-secondary-400 text-secondary-900 border-secondary-500",
  "Vue.js":
    "bg-gradient-to-br from-success-200 to-success-400 text-success-900 border-success-500",
  API: "bg-gradient-to-br from-primary-300 to-primary-500 text-primary-100 border-primary-600",
  "Cron Jobs":
    "bg-gradient-to-br from-default-200 to-default-400 text-default-900 border-default-500",
  "Electron.js":
    "bg-gradient-to-br from-default-300 to-default-500 text-default-100 border-default-600",
  "Node.js":
    "bg-gradient-to-br from-success-300 to-success-500 text-success-100 border-success-600",
  "WordPress API":
    "bg-gradient-to-br from-primary-200 to-primary-400 text-primary-900 border-primary-500",
  "AI Services":
    "bg-gradient-to-br from-secondary-300 to-warning-400 text-white border-warning-500",
  "Payment Gateway":
    "bg-gradient-to-br from-warning-300 to-warning-500 text-warning-100 border-warning-600",
  "Next.js":
    "bg-gradient-to-br from-blue-400 to-blue-600 text-white border-blue-500",
  TypeScript:
    "bg-gradient-to-br from-primary-300 to-primary-500 text-primary-100 border-primary-600",
  "AI APIs":
    "bg-gradient-to-br from-secondary-300 to-warning-400 text-white border-warning-500",
  PostgreSQL:
    "bg-gradient-to-br from-primary-400 to-primary-600 text-white border-primary-700",
  "Tailwind CSS":
    "bg-gradient-to-br from-primary-200 to-primary-400 text-primary-900 border-primary-500",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const mainType = project.technologies[0] || "Project";
  const typeClass =
    typeColor[mainType] ||
    "bg-gradient-to-br from-default-200 to-default-400 text-default-900 border-default-500";

  const getProjectDetails = () => {
    // Check if project has detailed content
    if (project.detailedContent) {
      return (
        <article className="text-sm space-y-3">
          {project.detailedContent.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-base font-semibold mb-2">{section.title}</h4>
              <p
                className="text-xs leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </article>
      );
    }

    // Default fallback for projects without detailed content
    return (
      <div className="text-sm space-y-3">
        <h4 className="text-base font-semibold mb-2">Project Details</h4>
        <div className="space-y-2">
          <div>
            <h5 className="text-sm font-semibold text-secondary">Challenges:</h5>
            <p className="text-xs leading-relaxed">{project.challenges}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-secondary">Outcome:</h5>
            <p className="text-xs leading-relaxed">{project.outcome}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-secondary">All Features:</h5>
            <ul className="text-xs space-y-1 ml-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[410px] xl:max-w-[440px] mx-auto min-w-[300px]" style={{ perspective: '1000px' }}>
      <div
        className="relative w-full h-[520px] sm:h-[580px] md:h-[608px] lg:h-[656px] xl:h-[704px] min-h-[500px] transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)",
          aspectRatio: "2.5/3.5", // Standard playing card ratio
        }}
      >
        {/* Front Face */}
        <Card
          className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl border-2 md:border-4 border-warning-400 shadow-2xl bg-gradient-to-br from-content1 via-content2 to-content1 p-1 pokemon-card"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(0deg)",
            minWidth: "300px",
            minHeight: "500px",
            aspectRatio: "2.5/3.5",
          }}
        >
          {/* Holographic effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-warning-200/20 to-secondary-200/20 opacity-30 rounded-xl md:rounded-2xl pointer-events-none" />

          <CardBody className="p-0 relative z-10 h-full flex flex-col min-h-[480px]">
            {/* Header with professional energy symbol */}
            <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 pt-1.5 sm:pt-2 md:pt-3 pb-1 md:pb-2 rounded-t-xl bg-gradient-to-r from-secondary/20 via-warning/20 to-secondary/20 border-b border-divider backdrop-blur-sm">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                {/* Professional circle icon */}
                <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-warning border-2 border-warning-400 shadow flex-shrink-0">
                  <svg fill="none" height="10" viewBox="0 0 16 16" width="10" className="sm:w-3 sm:h-3 md:w-4 md:h-4">
                    <circle
                      cx="8"
                      cy="8"
                      fill="url(#grad1)"
                      r="7"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <defs>
                      <radialGradient cx="50%" cy="50%" id="grad1" r="50%">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.7" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-foreground drop-shadow-sm truncate">
                  {project.title}
                </span>
              </div>
              <span
                className={`px-1.5 sm:px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-bold uppercase shadow-lg border-2 flex-shrink-0 ${typeClass}`}
              >
                {mainType}
              </span>
            </div>

            {/* Image with holographic border */}
            <div className="flex justify-center px-1.5 sm:px-2 md:px-3 pt-2 sm:pt-3 md:pt-4 pb-2 sm:pb-3 md:pb-4">
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-warning to-secondary rounded-lg p-1">
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>
                <img
                  alt={project.title}
                  className="relative z-10 w-full h-36 sm:h-40 md:h-48 lg:h-52 object-cover rounded-lg shadow-lg border-2 md:border-4 border-warning-400 bg-white"
                  src={project.image}
                />
              </div>
            </div>

            {/* Technologies as energy types */}
            <div className="px-2 sm:px-3 md:px-4 pb-1.5 sm:pb-2 md:pb-3 pt-1">
              <div className="flex flex-wrap gap-1 md:gap-2 justify-center">
                {project.technologies
                  .slice(0, 4)
                  .map((tech: string, index: number) => (
                    <Chip
                      key={index}
                      className="bg-gradient-to-br from-content2 to-content3 border-divider text-foreground font-semibold text-xs md:text-sm"
                      size="sm"
                      variant="bordered"
                    >
                      {tech}
                    </Chip>
                  ))}
              </div>
            </div>

            {/* Key Features and Project Scope Sections */}
            <div className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 space-y-1.5 sm:space-y-2 md:space-y-3 flex flex-col items-center justify-center text-center flex-1">
              {/* Description Section */}
              <div className="bg-content2/50 rounded-lg p-2 sm:p-2.5 md:p-3 border border-divider w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] mx-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 md:mb-2 justify-center">
                  {/* Professional star icon */}
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-yellow-500" strokeWidth={2} />
                  <span className="font-bold text-xs md:text-sm text-foreground">
                    Description
                  </span>
                </div>
                <p className="text-xs md:text-sm text-foreground-600 leading-tight text-left mx-auto max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[380px]">
                  {project.description}
                </p>
              </div>

              {/* Project Scope Section */}
              <div className="bg-content2/50 rounded-lg p-2 sm:p-2.5 md:p-3 border border-divider w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] mx-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 md:mb-2 justify-center">
                  {/* Professional target icon */}
                  <Target className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-emerald-500" strokeWidth={2} />
                  <span className="font-bold text-xs md:text-sm text-foreground">
                    Key Features
                  </span>
                </div>
                <ul className="text-xs md:text-sm text-foreground-600 leading-tight space-y-0.5 md:space-y-1 text-left mx-auto max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px]">
                  {project.features
                    .slice(0, 3)
                    .map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        {/* Professional bullet */}
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-gradient-to-br from-secondary to-warning rounded-full mt-1.5 md:mt-2 mr-1.5 sm:mr-2 flex-shrink-0 border border-warning-400 shadow" />
                        <span className="text-xs md:text-sm leading-tight">{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4 mt-auto">
              <div className="flex gap-2 mb-1 md:mb-2">
                {project.liveUrl ? (
                  <Button
                    as="a"
                    className="w-full rounded-lg font-bold shadow-lg bg-gradient-to-r from-secondary to-warning text-white border-2 border-warning-400"
                    href={project.liveUrl}
                    size="sm"
                    startContent={<ExternalLink size={8} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />}
                    target="_blank"
                  >
                    <span className="text-xs md:text-sm">Live Demo</span>
                  </Button>
                ) : (
                  <Button
                    className="w-full rounded-lg font-bold shadow-lg bg-gradient-to-r from-secondary to-warning text-white border-2 border-warning-400"
                    size="sm"
                    onClick={() => setIsFlipped(true)}
                  >
                    <span className="text-xs md:text-sm">Learn More</span>
                  </Button>
                )}
              </div>
              {/* Card number/rarity moved here to avoid collision */}
              <div className="flex justify-end pt-0.5 sm:pt-1">
                <span className="text-xs md:text-sm font-bold text-foreground-400">
                  #{project.id.toString().padStart(3, "0")} ⭐
                </span>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Back Face */}
        <Card
          className="absolute inset-0 w-full h-full rounded-xl md:rounded-2xl border-2 md:border-4 border-secondary-400 shadow-2xl bg-gradient-to-br from-content1 via-content2 to-content1 p-1 pokemon-card"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            minWidth: "300px",
            minHeight: "500px",
            aspectRatio: "2.5/3.5",
          }}
        >
          {/* Holographic effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary-200/20 to-warning-200/20 opacity-30 rounded-xl md:rounded-2xl pointer-events-none" />

          <CardBody className="p-0 relative z-10 h-full flex flex-col min-h-[480px]">
            {/* Back Header */}
            <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 pt-1.5 sm:pt-2 md:pt-3 pb-1 md:pb-2 rounded-t-xl bg-gradient-to-r from-secondary/20 via-warning/20 to-secondary/20 border-b border-divider backdrop-blur-sm">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-warning border-2 border-secondary-400 shadow flex-shrink-0">
                  <svg fill="none" height="10" viewBox="0 0 16 16" width="10" className="sm:w-3 sm:h-3 md:w-4 md:h-4">
                    <circle cx="8" cy="8" fill="url(#grad2)" r="7" stroke="#fff" strokeWidth="2" />
                    <defs>
                      <radialGradient cx="50%" cy="50%" id="grad2" r="50%">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.7" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-foreground drop-shadow-sm truncate">
                  {project.title} - Details
                </span>
              </div>
            </div>

            {/* Back Content */}
            <div className="px-2 sm:px-3 md:px-4 py-2 sm:py-4 md:py-5 flex-1 overflow-hidden">
              <div className="bg-content2/50 rounded-lg p-2 sm:p-3 md:p-4 border border-divider h-full overflow-y-auto">
                {getProjectDetails()}
              </div>
            </div>

            {/* Back Actions */}
            <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">
              <div className="flex gap-2 mb-1 md:mb-2">
                <Button
                  className="w-full rounded-lg font-bold shadow-lg bg-gradient-to-r from-secondary to-primary text-white border-2 border-secondary-400"
                  size="sm"
                  onClick={() => setIsFlipped(false)}
                  startContent={<ArrowLeft size={8} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />}
                >
                  <span className="text-xs md:text-sm">Back to Card</span>
                </Button>
                {project.liveUrl && (
                  <Button
                    as="a"
                    className="w-full rounded-lg font-bold shadow-lg bg-gradient-to-r from-warning to-secondary text-white border-2 border-warning-400"
                    href={project.liveUrl}
                    size="sm"
                    startContent={<ExternalLink size={8} className="sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />}
                    target="_blank"
                  >
                    <span className="text-xs md:text-sm">Live Demo</span>
                  </Button>
                )}
              </div>
              <div className="flex justify-end pt-0.5 sm:pt-1">
                <span className="text-xs md:text-sm font-bold text-foreground-400">
                  #{project.id.toString().padStart(3, "0")} ⭐
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
export type { Project };
