import founder from "@/assets/founder.webp";

const FounderSection = () => {
  return (
    <section className="section-padding bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative flex justify-center">
              <div className="p-[2px] sm:p-[3px] rounded-3xl bg-gradient-to-br from-accent/60 via-accent/20 to-transparent shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                
                <div className="relative w-[220px] sm:w-64 aspect-[7/9] rounded-xl sm:rounded-2xl overflow-hidden bg-navy">
                  <img
                    src={founder}
                    alt="Mr. Mustafa Kambarnina Ibrahim - Founder"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* overlays (lightened for mobile perf) */}
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                  <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-accent/20 blur-xl sm:blur-2xl" />
                </div>

              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-accent font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
              Our Founder
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Mr. Mustafa Kambarnina Ibrahim
            </h2>

            <div className="w-12 sm:w-16 h-1 bg-accent rounded-full mb-4 sm:mb-6 mx-auto lg:mx-0" />

            <p className="text-slate-200 text-sm sm:text-base leading-[1.6] mb-3 sm:mb-4 max-w-none">
              Star Wings was founded in 2006 and has its head office situated in
              Kaloor, Kochi. The company was built on a foundation of quality,
              reliability, and a client-focused approach.
            </p>

            <p className="text-slate-200 text-sm sm:text-base leading-[1.6] max-w-none">
              Under his leadership, the company has grown into a trusted HVAC
              brand, expanding to the Middle East with Mix Max & Starwings in
              Qatar.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;