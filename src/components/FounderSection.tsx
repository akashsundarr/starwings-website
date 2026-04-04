import founder from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section className="section-padding bg-navy">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={founder}
                alt="Mr. Mustafa Kambarnina Ibrahim - Founder"
                className="rounded-2xl w-72 h-80 object-cover shadow-2xl ring-4 ring-accent/20"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-72 h-80 border-2 border-accent/30 rounded-2xl -z-10" />
            </div>
          </div>

          <div className="max-w-lg">
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Founder
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ice mb-2">
              Mr. Mustafa Kambarnina Ibrahim
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
            <p className="text-ice/75 leading-relaxed mb-4">
              Star Wings was founded in 2006 and has its head office situated in Kaloor, Kochi. From the very beginning, the company was built on a foundation of quality, reliability, and a client-focused approach that would define its journey.
            </p>
            <p className="text-ice/75 leading-relaxed">
              Under his visionary leadership, the company has grown steadily into a trusted presence in the HVAC industry, serving clients with integrity, innovation, and an unwavering commitment to excellence. Additionally, Mix Max & Starwings was founded in Qatar, expanding the group's footprint to the Middle East.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
