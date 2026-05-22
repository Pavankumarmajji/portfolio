import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech CSE",
    institution: "A.M Reddy Memorial College of Engineering & Technology",
    period: "2022 - 2026",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Intermediate",
    institution: "Srinivasa Junior College",
    period: "2020 - 2022",
    icon: School,
    current: false,
  },
  {
    degree: "SSC",
    institution: "Saint Joseph's English Medium High School",
    period: "2020",
    icon: BookOpen,
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {education.map((edu, index) => (
            <div key={edu.degree} className="relative pl-20 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${
                edu.current 
                  ? 'bg-gradient-primary animate-pulse-glow' 
                  : 'bg-secondary border border-border'
              }`}>
                <edu.icon className={`w-7 h-7 ${edu.current ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
              </div>

              {/* Content */}
              <div className={`bg-gradient-card rounded-xl p-6 border ${
                edu.current ? 'border-primary/50 glow-effect' : 'border-border'
              } transition-all duration-300 hover:border-primary/30`}>
                {edu.current && (
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-3">
                    Current
                  </span>
                )}
                <h3 className="text-xl font-bold font-display text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-primary font-medium">
                  {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
