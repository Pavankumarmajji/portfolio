import { Award, Download } from "lucide-react";

const certifications = [
  {
    title: "Blockchain and its Applications",
    issuer: "NPTEL",
    date: "Jan - Apr 2025",
    certificate: "/certificates/Blockchain_and_its_Applications.pdf",
  },
  {
    title: "AI-ML-DS",
    issuer: "IIDT BLACK BUCKS",
    date: "May - Jun 2024",
    certificate: "/certificates/Ai-ml-ds.pdf",
  },
  {
    title: "Full Stack Development",
    issuer: "Data Valley",
    date: "May - Jun 2024",
    certificate: "/certificates/full_stack_development.pdf",
  },
  {
    title: "Full Stack Development - Python",
    issuer: "Data Valley",
    date: "May - Jul 2025",
    certificate: "/certificates/full_stack_development_python.jpeg",
  },
  {
    title: "Geodata Processing using Python and ML",
    issuer: "ISRO",
    date: "Completed",
    certificate: "/certificates/Geodata_Processing_using_Python_and_ML.pdf",
  },
  {
    title: "AI-Driven Policy Compliance & Intelligence System",
    issuer: "Industry Project",
    date: "Completed",
    certificate: "/certificates/MAJJI_PAVAN_KUMAR_Industry_Project.pdf",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient opacity-30" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 card-shadow hover:glow-effect"
            >
              {/* Certificate Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {cert.issuer}
              </p>
              <p className="text-xs text-primary font-medium mb-4">
                {cert.date}
              </p>
              
              {/* View Certificate Button */}
              <a
                href={cert.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Download className="w-4 h-4" />
                View Certificate
              </a>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
