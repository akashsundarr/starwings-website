import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
    
      <div className="bg-navy section-padding text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-200 max-w-xl mx-auto">Get in touch with our team for your HVAC requirements.</p>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
