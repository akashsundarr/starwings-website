import hex1 from "@/assets/hex-1.jpg";
import hex2 from "@/assets/hex-2.jpg";
import hex3 from "@/assets/hex-3.jpg";
import hex4 from "@/assets/hex-4.jpg";
import hex5 from "@/assets/hex-5.jpg";
import hex6 from "@/assets/hex-6.jpg";
import { Target, Handshake, Settings } from "lucide-react";

const hexImages = [
  { src: hex1, alt: "HVAC Ductwork Installation" },
  { src: hex2, alt: "Ceiling Cassette AC Unit" },
  { src: hex3, alt: "Air Handling Unit" },
  { src: hex4, alt: "Copper Piping System" },
  { src: hex5, alt: "VRF Outdoor Unit" },
  { src: hex6, alt: "Ventilation System" },
];

const capabilities = [
  "Design and execution of VRF system, other Commercial / Industrial and residential HVAC projects",
  "Production & installation of machines fabricated GI ducts, PUF ducts etc",
  "Copper and MS piping",
  "Exhaust and Fresh air systems",
  "24/7 Service support and maintenance",
  "Providing Technical supports and solutions for HVAC related things",
  "Conducting training programme for students on VRF systems",
];

const MissionCapabilitiesSection = () => {
  return (
    <section id="mission" className="section-padding bg-navy-deep">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* LEFT */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Mission */}
            <div className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </span>
                Our Mission
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-[1.6] mb-3 max-w-none">
                You can rely on STARWINGS for High Quality, Efficiency,
                Integrity, Knowledge, and Dedication to Excellence.
              </p>

              <p className="text-slate-200 text-sm sm:text-base leading-[1.6] mb-3 max-w-none">
                We are a group of exceptionally skilled people dedicated to
                becoming a profitable industry leader.
              </p>

              <ul className="space-y-2">
                {[
                  "Delivering exceptional value as an extension of our customers.",
                  "Building a culture of trust, respect, and teamwork.",
                  "Supporting communities and social responsibility.",
                  "Contributing to industry growth and improvement.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-200 text-xs sm:text-sm leading-[1.5]"
                  >
                    <span className="w-2 h-2 rounded-sm bg-accent mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Commitment */}
            <div className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </span>
                Our Commitment
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-[1.6] max-w-none">
                Our goal is to gain your trust through honest work and
                consistent quality, ensuring long-term relationships.
              </p>
            </div>

            {/* Capabilities */}
            <div className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </span>
                Capabilities
              </h2>

              <ul className="space-y-2">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-200 text-xs sm:text-sm leading-[1.5]"
                  >
                    <span className="w-2 h-2 rounded-sm bg-accent mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 sm:mb-6">
              Design & Planning
            </h2>

            {/* HEX GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
              {hexImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4 text-slate-200 text-xs sm:text-sm leading-[1.6] bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20">
              <p>
                We have an experienced design team ensuring high-quality HVAC
                planning without compromising aesthetics.
              </p>
              <p>
                We collaborate with leading architects and consultants across Kerala.
              </p>
              <p>
                We provide direct technical solutions and training in HVAC systems.
              </p>
              <p>
                Our team includes 35+ skilled professionals in ducting and piping.
              </p>
              <p>
                Precision fabrication ensures high-quality finishing in all projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionCapabilitiesSection;