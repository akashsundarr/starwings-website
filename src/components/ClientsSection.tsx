import React from "react";

// imports same...

const MarqueeRow = ({
  logos,
  reverse = false,
}: {
  logos: typeof clients;
  reverse?: boolean;
}) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 sm:gap-12 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="h-12 sm:h-16 w-[100px] sm:w-[140px] flex items-center justify-center shrink-0"
          >
            <img
              src={logo.image}
              alt={logo.name}
              loading="lazy"
              className="max-h-8 sm:max-h-12 w-auto object-contain 
                         transition-transform duration-300 
                         hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const midpoint = Math.ceil(clients.length / 2);
  const firstRow = clients.slice(0, midpoint);
  const secondRow = clients.slice(midpoint);

  return (
    <section className="section-padding bg-ice overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-14">
          <p className="text-accent font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
            Trusted By Industry Leaders
          </p>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Completed Projects and Trusted By
          </h2>

          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-accent mb-3 sm:mb-4">
            Our Happy Customers
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-[1.6] max-w-none">
            We are proud to have served top brands across India.
          </p>
        </div>

        {/* Marquee */}
        <div className="py-6 sm:py-10 space-y-6 sm:space-y-8">
          <MarqueeRow logos={firstRow} />
          <MarqueeRow logos={secondRow} reverse />
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;