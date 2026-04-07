import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="StarWings" className="h-14 mb-5 brightness-200" />
            <p className="text-slate-200 text-sm leading-[1.7] max-w-[700px] mb-4">
              Generating Superior Comfort since 2006. Your trusted HVAC partner across South India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-slate-200 hover:text-accent transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-200">
              <span>Central Air Conditioning</span>
              <span>Ducting & Fabrication</span>
              <span>Chiller Installation</span>
              <span>AMC & Maintenance</span>
              <span>Energy Audits</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                Kaloor, Kochi - 681763
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                +91 9846 001 702
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                starwings@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ice/10 mt-12 pt-8 text-center text-ice/40 text-sm">
          © {new Date().getFullYear()} StarWings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
