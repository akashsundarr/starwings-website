import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-navy section-padding text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-ice mb-4">About StarWings</h1>
        <p className="text-ice/60 max-w-xl mx-auto">Learn about our journey, our values, and the people behind our success.</p>
      </div>
      <AboutSection />
      <FounderSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
