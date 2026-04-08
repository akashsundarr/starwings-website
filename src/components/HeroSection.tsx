import { ArrowRight, Snowflake, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------------- SMOOTH COUNT HOOK ---------------- */
const useSmoothCount = (end: number, duration = 1500) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      const eased = easeOut(progress);
      const value = Math.floor(eased * end);

      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration]);

  return count;
};

/* ---------------- DATA ---------------- */
const stats = [
  { icon: Clock, label: "Years Experience", value: 18, suffix: "+" },
  { icon: Shield, label: "Projects Completed", value: 500, suffix: "+" },
  { icon: Snowflake, label: "Happy Customers", value: 1000, suffix: "+" },
];

/* ---------------- STAT CARD ---------------- */
const StatCard = ({ stat, delay }: any) => {
  const count = useSmoothCount(stat.value);
  const isDone = count === stat.value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.96 }} // ✅ mobile interaction fix
      className="group flex items-center gap-4 bg-white/10 backdrop-blur-md md:backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/20 shadow-lg cursor-pointer"
    >
      {/* ICON */}
      <motion.div
        whileHover={{ rotate: 8, scale: 1.1 }}
        className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-400/20 flex items-center justify-center"
      >
        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
      </motion.div>

      {/* TEXT */}
      <div>
        <motion.div
          className="font-heading text-2xl sm:text-3xl font-bold text-white leading-none"
          animate={isDone ? { scale: [1, 1.25, 1] } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {count}
          {stat.suffix}
        </motion.div>

        <div className="text-slate-200 text-xs sm:text-sm mt-1 font-body">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN HERO ---------------- */
const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <img
        src={heroBg}
        alt="HVAC Systems"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        loading="eager"
      />

      <div className="absolute inset-0 hero-overlay" />

      {/* CONTENT */}
      <div className="relative container mx-auto px-4 pt-16 sm:pt-20 pb-10">
        <div className="max-w-2xl md:max-w-3xl">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-medium mb-5 sm:mb-6 animate-fade-up">
            <Snowflake className="w-4 h-4" />
            Leading HVAC Solutions Since 2006
          </div>

          {/* TITLE */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-5 sm:mb-6 animate-fade-up">
            Generating <span className="text-green-brand">Superior</span>{" "}
            Comfort
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-lg mb-8 sm:mb-10 font-body leading-relaxed animate-fade-up">
            Expert design, installation, and maintenance of air conditioning
            systems for commercial and residential spaces across South India.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold text-sm sm:text-base hover:brightness-110 transition-all shadow-md"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold text-sm sm:text-base hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mt-14 sm:mt-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;