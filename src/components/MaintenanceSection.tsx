import { Shield, Clock, Zap, HeadphonesIcon } from "lucide-react";
import maintenance1 from "@/assets/maintenance-1.webp";

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
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <p className="text-accent font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
              Service & Maintenance
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Reliable Support,{" "}
              <span className="text-gradient">Always Available</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-[1.6] mb-6 sm:mb-10 max-w-none">
              StarWings provides comprehensive maintenance and 24/7 after-sales service for all air conditioning systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-ice border border-border transition-shadow hover:shadow-md active:scale-[0.98]"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>

                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-xs sm:text-sm mb-1">
                      {feature.title}
                    </h4>

                    <p className="text-muted-foreground text-xs leading-[1.5]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src={maintenance1}
              alt="Service & Maintenance"
              className="rounded-xl sm:rounded-2xl shadow-xl w-full h-[260px] sm:h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />

            {/* Badge */}
            <div className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-md">
              <div className="font-heading text-xl sm:text-3xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm opacity-80">
                Emergency Support
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;