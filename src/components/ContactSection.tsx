import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    city: "Cochin (Head Office)",
    address: "SF Complex, Gandhinagar Road, Kaloor, Kochi - 681763",
    phone: "+91 9846 001 702",
  },
  {
    city: "Calicut",
    address: "3/2208-A, Open Sky Mall's Infront, Bilathikulam, Calicut",
    phone: "+91 9846 001 702",
  },
  {
    city: "Palakkad",
    address: "Opp. Municipal Office, Palakkad",
    phone: "+91 9846 001 702",
  },
  {
    city: "Coimbatore",
    address: "Coimbatore, Tamil Nadu",
    phone: "+91 9846 001 702",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-[1.7] max-w-[700px] mb-8">
              Ready to discuss your HVAC needs? Reach out to us and our team will get back to you promptly.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-heading font-semibold text-base hover:brightness-110 transition-all shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Offices */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Our Offices
            </h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-card rounded-xl p-5 border border-border hover:shadow-md transition-shadow"
                >
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {office.city}
                  </h4>
                  <div className="flex items-start gap-2 text-muted-foreground text-sm mb-1">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                    {office.address}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                    {office.phone}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-navy rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-accent" />
                <h4 className="font-heading font-semibold text-ice">
                  Working Hours
                </h4>
              </div>
              <p className="text-white text-sm">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-white text-sm">
                Emergency Services: 24/7 Available
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white text-sm">starwings@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
