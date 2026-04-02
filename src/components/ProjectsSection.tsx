import { MapPin } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Lulu International Shopping Mall",
    location: "Kochi, Kerala",
    type: "Commercial",
  },
  {
    image: project2,
    title: "Grand Hyatt Hotel",
    location: "Kochi, Kerala",
    type: "Hospitality",
  },
  {
    image: project3,
    title: "Hilite Business Park",
    location: "Calicut, Kerala",
    type: "Commercial",
  },
  {
    image: project4,
    title: "PVR Cinemas",
    location: "Multiple Locations",
    type: "Entertainment",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-navy-deep">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sky-custom font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ice mb-4">
            Completed Projects
          </h2>
          <p className="text-ice/60 leading-relaxed">
            We have successfully delivered HVAC solutions for major commercial, hospitality, and entertainment projects across South India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-heading font-semibold px-3 py-1 rounded-full mb-3">
                  {project.type}
                </span>
                <h3 className="font-heading text-xl font-bold text-ice mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-ice/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
