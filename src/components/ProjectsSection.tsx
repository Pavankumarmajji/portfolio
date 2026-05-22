import { Github, Hand, ClipboardList, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hand Mouse Controller",
    subtitle: "Hand Gesture Mouse Controller",
    description: "Built a contactless mouse control system using computer vision and hand tracking. Implemented 8+ gesture controls (click, scroll, drag, zoom, etc.) with 95% accuracy.",
    highlights: [
      "Reduced physical contact needs by 100%",
      "Virtual drawing & volume control",
      "Presentation navigation",
      "Automation tasks"
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    icon: Hand,
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    github: "https://github.com/Pavankumarmajji/hand_mouse_controller",
  },
  {
    title: "SurveyMaker",
    subtitle: "Survey Maker Platform",
    description: "Built a complete survey creation and analysis platform serving 500+ users. Created real-time analytics dashboard with interactive charts.",
    highlights: [
      "10+ question types with drag-drop builder",
      "Logic branching functionality",
      "Excel/PDF export capability",
      "Multi-language support"
    ],
    tech: ["MERN Stack", "Chart.js", "Redux"],
    icon: ClipboardList,
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    github: "https://github.com/Pavankumarmajji/SURVEY_MAKER",
  },
  {
    title: "AI-Driven Policy Compliance & Intelligence System",
    subtitle: "Industry Project",
    description: "Developed an AI-powered system that analyzes organizational policies and ensures regulatory compliance through intelligent document processing and NLP-driven insights.",
    highlights: [
      "Automated policy document analysis",
      "Compliance risk detection",
      "NLP-based intelligence engine",
      "Real-time reporting dashboard"
    ],
    tech: ["Python", "NLP", "Machine Learning", "AI"],
    icon: ShieldCheck,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    github: "https://github.com/Pavankumarmajji/AI-driven-policy-Compilance-intelligence-system",
  },
  {
    title: "Secure File Sharing using Blockchain & IPFS",
    subtitle: "Decentralized File Sharing System",
    description: "Built a decentralized file sharing platform leveraging blockchain for access control and IPFS for distributed storage, ensuring tamper-proof, secure, and private file exchange.",
    highlights: [
      "End-to-end encrypted file transfers",
      "Immutable access logs on blockchain",
      "Decentralized IPFS storage",
      "Smart contract-based permissions"
    ],
    tech: ["Solidity", "Ethereum", "IPFS", "React", "Web3.js"],
    icon: Lock,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    github: "https://github.com/Pavankumarmajji/Secure-file-sharing-using-BLOCKCHAIN-and-IPFS.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 card-shadow hover:glow-effect h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold font-display mb-1 text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>

                {/* Decorative gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
