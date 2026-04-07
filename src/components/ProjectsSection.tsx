import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import lulu from "@/assets/projects/lulu-shopping-mall-tirur.webp";
import maratt from "@/assets/projects/maratt-it-park-kakkanad.webp";
import joyalukkas from "@/assets/projects/joyalukkas-gold-tower-kochi.webp";
import hyatt from "@/assets/projects/lulu-hyatt-trivandrum.webp";
import aster from "@/assets/projects/aster-mims-hospital-kottakkal.webp";
import ems from "@/assets/projects/ems-hospital-perinthalmanna.webp";

const featuredProjects = [
  {
    title: "LULU SHOPPING MALL",
    location: "Tirur, Kerala",
    category: "Commercial",
    capacity: "1260 TR",
    system: "Chiller",
    image: lulu,
  },
  {
    title: "MARATT IT PARK",
    location: "Kakkanad, Kerala",
    category: "IT Park",
    image: maratt,
  },
  {
    title: "JOYALUKKAS GOLD TOWER",
    location: "Kochi, Kerala",
    category: "Commercial",
    image: joyalukkas,
  },
  {
    title: "LULU HYATT",
    location: "Trivandrum, Kerala",
    category: "Hospitality",
    image: hyatt,
  },
  {
    title: "ASTER MIMS HOSPITAL",
    location: "Kottakkal, Kerala",
    category: "Healthcare",
    image: aster,
  },
  {
    title: "EMS HOSPITAL",
    location: "Perinthalmanna, Kerala",
    category: "Healthcare",
    image: ems,
  },
];

const ProjectsSection = () => {
  const [main, ...others] = featuredProjects;

  return (
    <section className="section-padding bg-navy-deep">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-widest">
            Our Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Completed Projects
          </h2>

          <p className="text-slate-300 mt-3">
            25+ Projects Delivered Across South India
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* BIG CARD */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-accent/20 transition duration-500">
            <img
              src={main.image}
              alt={main.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 p-6 transform transition-all duration-500 group-hover:-translate-y-2">
              <h3 className="text-white text-2xl font-bold">{main.title}</h3>

              <div className="flex items-center text-sm text-slate-200 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                {main.location}
              </div>

              <p className="text-sm text-slate-300 mt-1">
                {main.capacity} • {main.system}
              </p>
            </div>
          </div>

          {/* SMALL CARDS */}
          {others.map((p) => (
            <div
              key={p.title}
              className="relative rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-accent/10 transition duration-500"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 p-4 transform transition-all duration-500 group-hover:-translate-y-1">
                <h3 className="text-white text-sm font-semibold">{p.title}</h3>

                <div className="flex items-center text-xs text-slate-200 mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {p.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-accent px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
