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
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-green-500 font-semibold text-sm uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Products & Services
          </h2>
          <p className="text-slate-600">
            Explore our complete HVAC solutions from design to execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-green-600" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON (IMPORTANT FIX) */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-[#2E3A8C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2a6b] transition"
          >
            View All Products & Services →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;