import React from "react";

// CLIENT LOGOS
import marriott from "@/assets/clients/marriott-logo.webp";
import tamara from "@/assets/clients/tamara-logo.webp";
import radisson from "@/assets/clients/radisson-hotels-logo.webp";
import taj from "@/assets/clients/taj-hotels-logo.webp";
import pearlView from "@/assets/clients/pearl-view-logo.webp";
import hyatt from "@/assets/clients/hyatt-regency-logo.webp";
import clubMahindra from "@/assets/clients/club-mahindra-logo.webp";
import indriya from "@/assets/clients/indriya-resorts-logo.webp";
import coralReef from "@/assets/clients/coral-reef-logo.webp";

import tataElxsi from "@/assets/clients/tata-elxsi-logo.webp";
import ramco from "@/assets/clients/ramco-logo.webp";
import amrita from "@/assets/clients/amrita-hospital-logo.webp";

import max from "@/assets/clients/max-fashion-logo.webp";
import luluHyper from "@/assets/clients/lulu-hypermarket-logo.webp";
import luluRetail from "@/assets/clients/lulu-retail-logo.webp";
import tanishq from "@/assets/clients/tanishq-logo.webp";
import bhima from "@/assets/clients/bhima-jewellers-logo.webp";
import malabar from "@/assets/clients/malabar-gold-logo.webp";
import joyalukkas from "@/assets/clients/joyalukkas-logo.webp";
import allenSolly from "@/assets/clients/allen-solly-logo.webp";
import louisPhilippe from "@/assets/clients/louis-philippe-logo.webp";
import vguard from "@/assets/clients/v-guard-logo.webp";

import amanaToyota from "@/assets/clients/amana-toyota-logo.webp";

import lisie from "@/assets/clients/lisie-hospital-logo.webp";
import ems from "@/assets/clients/ems-hospital-logo.webp";
import ascent from "@/assets/clients/ascent-hospital-logo.webp";
import medicalTrust from "@/assets/clients/medical-trust-hospital-logo.webp";
import amara from "@/assets/clients/amara-hospital-logo.webp";
import meditrina from "@/assets/clients/meditrina-hospital-logo.webp";

import skyline from "@/assets/clients/skyline-builders-logo.webp";
import veegaland from "@/assets/clients/veegaland-homes-logo.webp";

// =====================
// DATA
// =====================
const clients = [
  { name: "Marriott", image: marriott },
  { name: "Tamara", image: tamara },
  { name: "Radisson Hotels", image: radisson },
  { name: "Taj Hotels", image: taj },
  { name: "Pearl View", image: pearlView },
  { name: "Hyatt Regency", image: hyatt },
  { name: "Club Mahindra", image: clubMahindra },
  { name: "Indriya Resorts", image: indriya },
  { name: "Coral Reef", image: coralReef },

  { name: "Tata Elxsi", image: tataElxsi },
  { name: "Ramco", image: ramco },
  { name: "Amrita Hospital", image: amrita },

  { name: "Max Fashion", image: max },
  { name: "LuLu Hypermarket", image: luluHyper },
  { name: "LuLu Retail", image: luluRetail },
  { name: "Tanishq", image: tanishq },
  { name: "Bhima Jewellers", image: bhima },
  { name: "Malabar Gold", image: malabar },
  { name: "Joyalukkas", image: joyalukkas },
  { name: "Allen Solly", image: allenSolly },
  { name: "Louis Philippe", image: louisPhilippe },
  { name: "V-Guard", image: vguard },

  { name: "Amana Toyota", image: amanaToyota },

  { name: "Lisie Hospital", image: lisie },
  { name: "EMS Hospital", image: ems },
  { name: "Ascent Hospital", image: ascent },
  { name: "Medical Trust Hospital", image: medicalTrust },
  { name: "Amara Hospital", image: amara },
  { name: "Meditrina Hospital", image: meditrina },

  { name: "Skyline Builders", image: skyline },
  { name: "Veegaland Homes", image: veegaland },
];

// =====================
// MARQUEE ROW COMPONENT
// =====================
const MarqueeRow = ({
  logos,
  reverse = false,
}: {
  logos: typeof clients;
  reverse?: boolean;
}) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 sm:gap-12 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="h-12 sm:h-16 w-[100px] sm:w-[140px] flex items-center justify-center shrink-0"
          >
            <img
              src={logo.image}
              alt={logo.name}
              loading="lazy"
              className="max-h-8 sm:max-h-12 w-auto object-contain 
                         transition-transform duration-300 
                         hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const midpoint = Math.ceil(clients.length / 2);
  const firstRow = clients.slice(0, midpoint);
  const secondRow = clients.slice(midpoint);

  return (
    <section className="section-padding bg-ice overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-14">
          <p className="text-accent font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
            Trusted By Industry Leaders
          </p>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Completed Projects and Trusted By
          </h2>

          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-accent mb-3 sm:mb-4">
            Our Happy Customers
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-[1.6] max-w-none">
            We are proud to have served top brands across India.
          </p>
        </div>

        {/* Marquee */}
        <div className="py-6 sm:py-10 space-y-6 sm:space-y-8">
          <MarqueeRow logos={firstRow} />
          <MarqueeRow logos={secondRow} reverse />
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;