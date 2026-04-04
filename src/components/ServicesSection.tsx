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
      "Complete design, supply, and installation of central AC systems including chilled water systems, VRF/VRV, and package units for commercial spaces.",
  },
  {
    icon: Thermometer,
    title: "Split & Cassette AC",
    description:
      "Wall-mounted splits, ceiling cassettes, and floor-standing units from leading brands with expert installation and commissioning.",
  },
  {
    icon: Fan,
    title: "Ventilation & AHU",
    description:
      "Air handling units, fresh air systems, exhaust ventilation, and air distribution for healthy indoor air quality.",
  },
  {
    icon: Building2,
    title: "Ducting & Fabrication",
    description:
      "GI duct fabrication, spiral ducts, rectangular ducts, flexible ducts, and complete erection with insulation works.",
  },
  {
    icon: Cog,
    title: "Chiller & Cooling Tower",
    description:
      "Chiller plant installation, cooling tower setup, chilled water piping, and automation for large-scale cooling needs.",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance",
    description:
      "24/7 emergency support, annual maintenance contracts, preventive maintenance, and energy audits for all HVAC systems.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-ice">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products & Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Comprehensive HVAC solutions from design to maintenance, ensuring optimal comfort and energy efficiency for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
