import { Link } from "react-router-dom";
import {
  Wind,
  Thermometer,
  Wrench,
  Building2,
  Fan,
  Cog,
} from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Central Air Conditioning",
    description:
      "Complete design, supply, and installation of central AC systems.",
  },
  {
    icon: Thermometer,
    title: "Split & Cassette AC",
    description:
      "Wall-mounted, cassette and floor-standing AC solutions.",
  },
  {
    icon: Fan,
    title: "Ventilation & AHU",
    description:
      "Fresh air, exhaust systems and air handling units.",
  },
  {
    icon: Building2,
    title: "Ducting & Fabrication",
    description:
      "GI ducts, spiral ducts, insulation and full installation.",
  },
  {
    icon: Cog,
    title: "Chiller & Cooling",
    description:
      "Chillers, cooling towers and large-scale cooling systems.",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    description:
      "24/7 support, AMC, preventive maintenance and audits.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <p className="text-green-500 font-semibold text-xs sm:text-sm uppercase mb-2 sm:mb-3">
            What We Do
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Products & Services
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Explore our complete HVAC solutions from design to execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border transition transform hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 flex items-center justify-center mb-3 sm:mb-4">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>

              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-[1.5]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-[#2E3A8C] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#1f2a6b] active:scale-[0.97] transition"
          >
            View All Products & Services →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;