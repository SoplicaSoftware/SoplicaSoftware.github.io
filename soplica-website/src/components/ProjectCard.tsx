import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { ExternalLink, Star, Target } from "lucide-react";

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
  const mainType = project.technologies[0] || "Project";
  const typeClass =
    typeColor[mainType] ||
    "bg-gradient-to-br from-default-200 to-default-400 text-default-900 border-default-500";

  return (
    <Card className="w-full max-w-[420px] h-[600px] sm:h-[700px] mx-auto rounded-2xl border-4 border-warning-400 shadow-2xl bg-gradient-to-br from-content1 via-content2 to-content1 p-1 pokemon-card relative overflow-hidden">
      {/* Holographic effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-warning-200/20 to-secondary-200/20 opacity-30 rounded-2xl pointer-events-none" />

      <CardBody className="p-0 relative z-10 h-full flex flex-col">
        {/* Header with professional energy symbol */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2 rounded-t-xl bg-gradient-to-r from-secondary/20 via-warning/20 to-secondary/20 border-b border-divider backdrop-blur-sm">
          <div className="flex items-center gap-2">
            {/* Professional circle icon */}
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-warning border-2 border-warning-400 shadow">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
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
            <span className="text-lg font-bold tracking-wide text-foreground drop-shadow-sm truncate">
              {project.title}
            </span>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs font-bold uppercase shadow-lg border-2 ${typeClass}`}
          >
            {mainType}
          </span>
        </div>

        {/* Image with holographic border */}
        <div className="flex justify-center px-4 pt-2 pb-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-warning to-secondary rounded-lg p-1">
              <div className="w-full h-full bg-content1 rounded-lg" />
            </div>
            <img
              alt={project.title}
              className="relative z-10 w-full max-w-80 h-36 sm:h-48 object-cover rounded-lg shadow-lg border-4 border-warning-400"
              src={project.image}
            />
          </div>
        </div>

        {/* Technologies as energy types */}
        <div className="px-4 pb-3 pt-2">
          <div className="flex flex-wrap gap-1 justify-center">
            {project.technologies
              .slice(0, 4)
              .map((tech: string, index: number) => (
                <Chip
                  key={index}
                  className="bg-gradient-to-br from-content2 to-content3 border-divider text-foreground font-semibold text-xs"
                  size="sm"
                  variant="bordered"
                >
                  {tech}
                </Chip>
              ))}
          </div>
        </div>

        {/* Key Features and Project Scope Sections */}
        <div className="px-2 sm:px-4 py-2 space-y-2 flex flex-col items-center justify-center text-center">
          {/* Key Features Section */}
          <div className="bg-content2/50 rounded-lg p-2 sm:p-3 border border-divider w-full max-w-[320px] mx-auto">
            <div className="flex items-center gap-2 mb-2 justify-center">
              {/* Professional star icon */}
              <Star
                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                strokeWidth={2}
              />
              <span className="font-bold text-xs sm:text-sm text-foreground">
                Key Features
              </span>
            </div>
            <ul className="text-xs text-foreground-600 leading-tight space-y-1 text-left mx-auto max-w-[260px]">
              {project.features
                .slice(0, 3)
                .map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    {/* Professional bullet */}
                    <span className="w-2 h-2 bg-gradient-to-br from-secondary to-warning rounded-full mt-1.5 mr-2 flex-shrink-0 border border-warning-400 shadow" />
                    {feature}
                  </li>
                ))}
            </ul>
          </div>

          {/* Project Scope Section */}
          <div className="bg-content2/50 rounded-lg p-2 sm:p-3 border border-divider w-full max-w-[320px] mx-auto">
            <div className="flex items-center gap-2 mb-2 justify-center">
              {/* Professional target icon */}
              <Target
                className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500"
                strokeWidth={2}
              />
              <span className="font-bold text-xs sm:text-sm text-foreground">
                Project Scope
              </span>
            </div>
            <p className="text-xs text-foreground-600 leading-tight">
              {project.description.substring(0, 100)}...
            </p>
          </div>
        </div>

        {/* Actions as attack buttons */}
        <div className="px-2 sm:px-4 pb-4 mt-auto">
          <div className="flex gap-2 mb-2">
            <Button
              as="a"
              className="w-full rounded-lg font-bold shadow-lg bg-gradient-to-r from-secondary to-warning text-white border-2 border-warning-400"
              href={project.liveUrl ? project.liveUrl : "#"}
              size="sm"
              startContent={<ExternalLink size={12} />}
              target={project.liveUrl ? "_blank" : "_self"}
            >
              <span className="hidden sm:inline">Live Demo</span>
            </Button>
          </div>

          {/* Card number/rarity moved here to avoid collision */}
          <div className="flex justify-end pt-2">
            <span className="text-sm font-bold text-foreground-400">
              #{project.id.toString().padStart(3, "0")} ⭐
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
export type { Project };
