import { Shield, Clock, Zap, HeadphonesIcon } from "lucide-react";
import maintenance1 from "@/assets/maintenance-1.jpg";

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Round-the-clock support for urgent breakdowns and emergency repairs.",
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Scheduled inspections and servicing to prevent costly breakdowns.",
  },
  {
    icon: Zap,
    title: "Energy Optimization",
    description: "Enhancing energy efficiency and reducing operational costs.",
  },
  {
    icon: HeadphonesIcon,
    title: "Annual Contracts (AMC)",
    description: "Comprehensive maintenance contracts with priority service access.",
  },
];

const MaintenanceSection = () => {
  return (
    <section id="maintenance" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Service & Maintenance
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Reliable Support,{" "}
              <span className="text-gradient">Always Available</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              StarWings provides comprehensive maintenance and 24/7 after-sales service for all air conditioning systems. Our strategically positioned service teams are fully prepared to handle every service need in any environment.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-ice border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={maintenance1}
              alt="Service & Maintenance"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <div className="font-heading text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
