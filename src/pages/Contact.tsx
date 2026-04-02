import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-navy section-padding text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-ice mb-4">Contact Us</h1>
        <p className="text-ice/60 max-w-xl mx-auto">Get in touch with our team for your HVAC requirements.</p>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
