import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24">
      <img
        src={servicesBg}
        alt="Modern building"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Experience Superior Comfort?
        </h2>
        <p className="text-slate-200 text-lg max-w-xl mx-auto mb-10">
          Let our experts design the perfect climate solution for your space. Get a free consultation today.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-lg font-heading font-semibold text-base hover:brightness-110 transition-all shadow-lg"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
