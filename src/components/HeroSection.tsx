import { ArrowRight, Snowflake, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <img
        src={heroBg}
        alt="HVAC Systems"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-ice px-4 py-2 rounded-full text-sm font-heading font-medium mb-6 animate-fade-up">
            <Snowflake className="w-4 h-4" />
            Leading HVAC Solutions Since 2006
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-ice leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Generating{" "}
            <span className="text-sky-custom">Superior</span>{" "}
            Comfort
          </h1>

          <p className="text-lg md:text-xl text-ice/80 max-w-xl mb-10 font-body leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Expert design, installation, and maintenance of air conditioning systems for commercial and residential spaces across South India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold text-base hover:brightness-110 transition-all shadow-lg"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-ice/30 text-ice px-8 py-4 rounded-lg font-heading font-semibold text-base hover:bg-ice/10 transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          {[
            { icon: Clock, label: "Years Experience", value: "18+" },
            { icon: Shield, label: "Projects Completed", value: "500+" },
            { icon: Snowflake, label: "Happy Customers", value: "1000+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 bg-ice/10 backdrop-blur-md rounded-xl p-5 border border-ice/10"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-sky-custom" />
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-ice">{stat.value}</div>
                <div className="text-ice/60 text-sm font-body">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
