import clientLogos from "@/assets/client-logos.png";

const ClientsSection = () => {
  return (
    <section className="section-padding bg-ice">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Trusted By Industry Leaders
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Completed Projects and Trusted By
          </h2>
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-accent mb-4">
            Our Happy Customers
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We are proud to have served some of the most prestigious brands and establishments across India.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow">
          <img
            src={clientLogos}
            alt="Our trusted clients including Marriott, Tamara, Radisson, Max, Lulu, Taj, Tata Elxsi, Amrita, Hyatt Regency, Club Mahindra, V-Guard, Joyalukkas, and many more"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
