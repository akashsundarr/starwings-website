import { CheckCircle2 } from "lucide-react";
import about1 from "@/assets/about-1.webp";
import about2 from "@/assets/about-2.webp";

const capabilities = [
  "HVAC systems design & installation",
  "Duct fabrication & erection",
  "Chilled water piping",
  "BMS & automation integration",
  "Energy-efficient solutions",
  "AMC & maintenance contracts",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={about1}
                alt="StarWings HVAC Equipment"
                className="rounded-xl sm:rounded-2xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <img
                src={about2}
                alt="StarWings Installation"
                className="rounded-xl sm:rounded-2xl w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg font-heading font-bold text-center">
              <div className="text-2xl sm:text-3xl">18+</div>
              <div className="text-xs sm:text-sm font-normal opacity-80">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
              About Us
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-gradient">Climate Solutions</span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-[1.6] mb-4 sm:mb-6 max-w-none">
              Star Wings was founded in 2006 and has successfully completed over
              18 years serving clients across South India. Headquartered in Kochi
              with offices in Calicut, Palakkad, and Coimbatore.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-[1.6] mb-6 sm:mb-8 max-w-none">
              Our team of experienced engineers ensures every project meets the
              highest standards of quality, efficiency, and comfort across
              commercial and residential spaces.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;