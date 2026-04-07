import founder from "@/assets/founder.webp";

const FounderSection = () => {
  return (
    <section className="section-padding bg-navy">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative flex justify-center">
              <div className="p-[3px] rounded-3xl bg-gradient-to-br from-accent/60 via-accent/20 to-transparent shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <div className="relative w-64 aspect-[7/9] rounded-2xl overflow-hidden bg-navy">
                  <img
                    src={founder}
                    alt="Mr. Mustafa Kambarnina Ibrahim - Founder"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* accent glow */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-accent/20 blur-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Our Founder
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
              Mr. Mustafa Kambarnina Ibrahim
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
            <p className="text-slate-200 leading-[1.7] max-w-[700px] mb-4">
              Star Wings was founded in 2006 and has its head office situated in
              Kaloor, Kochi. From the very beginning, the company was built on a
              foundation of quality, reliability, and a client-focused approach
              that would define its journey.
            </p>
            <p className="text-slate-200 leading-[1.7] max-w-[700px]">
              Under his visionary leadership, the company has grown steadily
              into a trusted presence in the HVAC industry, serving clients with
              integrity, innovation, and an unwavering commitment to excellence.
              Additionally, Mix Max & Starwings was founded in Qatar, expanding
              the group's footprint to the Middle East.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
