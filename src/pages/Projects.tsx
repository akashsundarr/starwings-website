import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-navy section-padding text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-ice mb-4">Our Projects</h1>
        <p className="text-ice/60 max-w-xl mx-auto">Explore our portfolio of completed HVAC installations.</p>
      </div>
      <ProjectsSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
