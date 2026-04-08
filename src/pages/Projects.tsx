import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

// IMPORT ALL IMAGES
import lulu from "@/assets/projects/lulu-shopping-mall-tirur.webp";
import maratt from "@/assets/projects/maratt-it-park-kakkanad.webp";
import lisie from "@/assets/projects/lisie-hospital-ernakulam.webp";
import aptiv from "@/assets/projects/aptiv-cochin-kakkanad.webp";
import pan from "@/assets/projects/pan-cinemas-maradu.webp";
import veegaland from "@/assets/projects/veegaland-apartments-kakkanad.webp";
import hycinth from "@/assets/projects/hycinth-hotels-trivandrum.webp";
import khayal from "@/assets/projects/cochin-khayal-hotels-kakkanad.webp";
import pearl from "@/assets/projects/pearlview-hotels-thalassery.webp";
import galaxy from "@/assets/projects/galaxy-homes-golden-dale-kadavanthra.webp";
import hilite from "@/assets/projects/hilite-mall-kozhikode.webp";
import indriya from "@/assets/projects/indriya-beach-resort-cherai.webp";
import joyalukkas from "@/assets/projects/joyalukkas-gold-tower-kochi.webp";
import skyline from "@/assets/projects/skyline-ranch-villas-thripunithura.webp";
import hiton from "@/assets/projects/hotel-hiton-tower-perinthalmanna.webp";
import metro from "@/assets/projects/lulu-metro-tunnel-kakkanad.webp";
import park from "@/assets/projects/park-resort-kumarakom.webp";
import emke from "@/assets/projects/emke-mansion-thrissur.webp";
import karuna from "@/assets/projects/karuna-hospital-thodupuzha.webp";
import hyatt from "@/assets/projects/lulu-hyatt-trivandrum.webp";
import aster from "@/assets/projects/aster-mims-hospital-kottakkal.webp";
import ems from "@/assets/projects/ems-hospital-perinthalmanna.webp";
import chinmaya from "@/assets/projects/chinmaya-viswa-vidyapeeth-piravom.webp";
import amrita from "@/assets/projects/amrita-university-campus-amaravati.webp";

const projects = [
  { title: "LULU SHOPPING MALL", location: "Tirur", category: "Commercial", capacity: "1260 TR", system: "Chiller", image: lulu },
  { title: "MARATT IT PARK", location: "Kakkanad", category: "IT Park", capacity: "1650 TR", system: "Chiller + VRF", image: maratt },
  { title: "LISIE HOSPITAL", location: "Ernakulam", category: "Healthcare", capacity: "336 HP", system: "VRF", image: lisie },
  { title: "APTIV COCHIN", location: "Kakkanad", category: "Corporate", capacity: "350 TR", system: "Chiller", image: aptiv },
  { title: "PAN CINEMAS", location: "Maradu", category: "Entertainment", capacity: "40 TR + 16 HP", system: "AHU + VRF", image: pan },
  { title: "VEEGALAND APARTMENTS", location: "Kakkanad", category: "Residential", capacity: "16 HP", system: "VRF", image: veegaland },
  { title: "HYCINTH HOTELS", location: "Trivandrum", category: "Hospitality", capacity: "300 TR", system: "VRF", image: hycinth },
  { title: "COCHIN KHAYAL HOTELS", location: "Kakkanad", category: "Hospitality", capacity: "330 TR", system: "VRF", image: khayal },
  { title: "PEARLVIEW HOTELS", location: "Thalassery", category: "Hospitality", capacity: "240 TR", system: "VRF", image: pearl },
  { title: "GALAXY HOMES", location: "Kadavanthra", category: "Residential", capacity: "780 TR", system: "VRF", image: galaxy },
  { title: "HILITE MALL", location: "Kozhikode", category: "Commercial", capacity: "85 TR", system: "Chilled Water", image: hilite },
  { title: "INDRIYA BEACH RESORT", location: "Cherai", category: "Hospitality", capacity: "120 TR", system: "VRF", image: indriya },
  { title: "JOYALUKKAS GOLD TOWER", location: "Kochi", category: "Commercial", capacity: "1800 HP", system: "VRF", image: joyalukkas },
  { title: "SKYLINE RANCH VILLAS", location: "Thripunithura", category: "Residential", capacity: "180 TR", system: "VRF", image: skyline },
  { title: "HOTEL HITON TOWER", location: "Malappuram", category: "Hospitality", capacity: "280 TR", system: "VRF", image: hiton },
  { title: "LULU METRO TUNNEL", location: "Kakkanad", category: "Infrastructure", capacity: "330 TR", system: "VRF", image: metro },
  { title: "PARK RESORT", location: "Kumarakom", category: "Hospitality", capacity: "84 HP", system: "VRF", image: park },
  { title: "EMKE MANSION", location: "Thrissur", category: "Residential", capacity: "386 HP", system: "VRF", image: emke },
  { title: "KARUNA HOSPITAL", location: "Thodupuzha", category: "Healthcare", capacity: "DX", system: "AHU", image: karuna },
  { title: "LULU HYATT", location: "Trivandrum", category: "Hospitality", capacity: "300 HP", system: "VRF", image: hyatt },
  { title: "ASTER MIMS HOSPITAL", location: "Kottakkal", category: "Healthcare", capacity: "400 HP", system: "VRF", image: aster },
  { title: "EMS HOSPITAL", location: "Perinthalmanna", category: "Healthcare", capacity: "690 TR", system: "Chiller", image: ems },
  { title: "CHINMAYA VISWA VIDYAPEETH", location: "Piravom", category: "Institutional", capacity: "1350 HP", system: "VRF", image: chinmaya },
  { title: "AMRITA UNIVERSITY", location: "Amaravati", category: "Institutional", capacity: "986 HP", system: "VRF", image: amrita },
];

const categories = ["All", ...new Set(projects.map(p => p.category))];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-navy-deep pt-16 sm:pt-20">

      {/* HERO */}
      <div className="text-center py-10 sm:py-16 px-4">
        <h1 className="text-2xl sm:text-4xl text-white font-bold">
          Our Projects
        </h1>

        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Complete HVAC portfolio across sectors
        </p>
      </div>

      {/* FILTER */}
      <div className="container mx-auto px-4 mb-6 sm:mb-10 overflow-x-auto">
        <div className="flex gap-2 sm:gap-3 w-max mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-accent text-white"
                  : "bg-white/10 text-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-4 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow transition duration-300 group active:scale-[0.98]"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-sm sm:text-base">
                  {p.title}
                </h3>

                <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {p.location}
                </div>

                <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                  <span className="bg-accent/10 text-accent px-2 py-0.5 sm:py-1 rounded font-medium">
                    {p.category}
                  </span>

                  <span className="bg-gray-100 px-2 py-0.5 sm:py-1 rounded">
                    {p.capacity}
                  </span>

                  <span className="bg-gray-100 px-2 py-0.5 sm:py-1 rounded">
                    {p.system}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-slate-400 mt-8 sm:mt-10 text-sm">
            No projects found.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;