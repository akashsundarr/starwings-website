const clients = [
  "Lulu Group",
  "Marriott International",
  "Grand Hyatt",
  "PVR Cinemas",
  "Max Fashion",
  "Aster Medcity",
  "Hilite Mall",
  "Sobha Developers",
  "Carnival Cinemas",
  "Deira City Centre",
  "V-Guard",
  "Federal Bank",
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-ice">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Trusted By
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Happy Customers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We are proud to have served some of the most prestigious brands and establishments in India and the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-card rounded-xl p-6 flex items-center justify-center border border-border hover:shadow-md hover:border-accent/30 transition-all text-center"
            >
              <span className="font-heading font-semibold text-sm text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
