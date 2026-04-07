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
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Our Mission */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </span>
                Our Mission
              </h2>
              <p className="text-slate-200 leading-[1.7] max-w-[700px] mb-4">
                You can rely on STARWINGS for High Quality, Efficiency,
                Integrity, Knowledge, and Dedication to Excellence. The
                STARWINGS crew is happy to support these attributes.
              </p>
              <p className="text-slate-200 leading-[1.7] max-w-[700px] mb-4">
                We are a group of exceptionally skilled people who are dedicated
                to becoming a profitable industry leader.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Recognizing that our purpose is to serve our customers as an extension of their organization, delivering exceptional value.",
                  "Creating for the STARWINGS Team an environment of trust, respect and common values, encouraging teamwork and the achievement of individual growth.",
                  "Contributing to our communities and understanding our responsibility in helping those less privileged.",
                  "Supporting our industry in every way possible for continued growth and improvement.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-200 text-sm leading-[1.6]"
                  >
                    <span className="w-2 h-2 rounded-sm bg-accent flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Commitment */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-white" />
                </span>
                Our Commitment
              </h2>
              <p className="text-slate-200 leading-[1.7] max-w-[700px]">
                Our top goal is to gain your trust and deliver outstanding
                service since we think that a company's value is established by
                honesty and hard effort and that we cannot set a price on our
                values. We recognize that exceeding your expectations will gain
                your confidence and keep your business.
              </p>
            </div>

            {/* Our Constructions Capabilities */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-400/30 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </span>
                Our Constructions Capabilities
              </h2>
              <p className="text-slate-200 leading-[1.7] max-w-[700px] mb-4">
                STARWINGS offers a broad range of services and features that
                enable our clients to get the best possible performance out of
                their air conditioning systems. STARWINGS will offer the skill,
                experience, and understanding you need, whether you're wanting
                to reduce energy expenses, install new equipment, maintain an
                existing system, or totally upgrade your infrastructure.
              </p>
              <ul className="space-y-2.5">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-200 text-sm leading-[1.6]"
                  >
                    <span className="w-2 h-2 rounded-sm bg-accent flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
              Design & Planning of Projects
            </h2>

            {/* Hex Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {hexImages.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-2xl"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4 text-slate-200 leading-relaxed text-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <p>
                We have a design team of our own with qualified and experienced
                personnels for design of major projects & residences without
                disturbing the aesthetics and without compromising
                professionalism.
              </p>
              <p>
                And we are so able to deal with a lot of leading architects and
                consultants across Kerala for creating a co-ordinated design of
                projects.
              </p>
              <p>
                In addition to all of this, we provide our big clients and
                people with direct technical advice and solutions for any kind
                of HVAC-related problem. We also teach students about HVAC
                systems and designs, particularly VRF systems.
              </p>
              <p>
                Our own project team will provide the labor for every project,
                and we have over 35+ permanent project staff members with
                expertise in ducting, piping, and other related fields.
              </p>
              <p>
                In order to achieve high precision and finishing,
                machine-fabricated ducts will be utilized for both small and
                large projects using our own heavy-duty fabrication equipment
                and cutting tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionCapabilitiesSection;
