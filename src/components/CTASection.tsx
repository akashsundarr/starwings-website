import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <img
        src={servicesBg}
        alt="Modern building"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
      />

      {/* Slightly stronger overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-4 text-center">
        
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Ready to Experience Superior Comfort?
        </h2>

        <p className="text-slate-200 text-sm sm:text-lg max-w-lg mx-auto mb-6 sm:mb-10 leading-[1.6]">
          Let our experts design the perfect climate solution for your space. Get a free consultation today.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-heading font-semibold text-sm sm:text-base hover:brightness-110 active:scale-[0.97] transition-all shadow-md"
        >
          Get Started
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>

      </div>
    </section>
  );
};

export default CTASection;