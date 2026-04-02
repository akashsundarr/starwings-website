import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import MaintenanceSection from "@/components/MaintenanceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-navy section-padding text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-ice mb-4">Products & Services</h1>
        <p className="text-ice/60 max-w-xl mx-auto">Comprehensive HVAC solutions tailored to your needs.</p>
      </div>
      <ServicesSection />
      <MaintenanceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
