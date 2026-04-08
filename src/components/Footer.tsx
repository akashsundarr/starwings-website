import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="StarWings"
              className="h-10 sm:h-14 mb-4 sm:mb-5 brightness-200"
            />

            <p className="text-slate-200 text-xs sm:text-sm leading-[1.6] mb-4 max-w-none">
              Generating Superior Comfort since 2006. Your trusted HVAC partner across South India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-slate-200 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Services
            </h4>

            <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-200">
              <span>Central Air Conditioning</span>
              <span>Ducting & Fabrication</span>
              <span>Chiller Installation</span>
              <span>AMC & Maintenance</span>
              <span>Energy Audits</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
              
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

        {/* Bottom */}
        <div className="border-t border-ice/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-ice/40 text-xs sm:text-sm">
          © {new Date().getFullYear()} StarWings. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;