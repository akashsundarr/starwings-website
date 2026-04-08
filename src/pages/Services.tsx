import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ProductsHexSection from "@/components/ProductsHexSection";


import ceilingCassetteAC from "@/assets/products/ceiling-cassette-ac.webp";
import oneWayCassetteAC from "@/assets/products/one-way-cassette-ac.webp";
import hiWallSplitAC from "@/assets/products/hi-wall-split-ac.webp";
import ductableSplitAC from "@/assets/products/ductable-split-ac.webp";
import highStaticDuctableAC from "@/assets/products/high-static-ductable-ac.webp";
import towerAC from "@/assets/products/tower-ac.webp";

import outdoorUnit from "@/assets/products/outdoor-unit.webp";
import topDischargeOutdoorUnit from "@/assets/products/top-discharge-outdoor-unit.webp";

import coolingTower from "@/assets/products/cooling-tower.webp";
import waterCooledChiller from "@/assets/products/water-cooled-chiller.webp";

import axialFan from "@/assets/products/axial-fan.webp";
import centrifugalFlowFan from "@/assets/products/centrifugal-flow-fan.webp";
import centrifugalDuctFan from "@/assets/products/centrifugal-duct-fan.webp";
import jetFan from "@/assets/products/jet-fan.webp";

import spiralFlatOvalDuct from "@/assets/products/spiral-flat-oval-duct.webp";
import roundDuct from "@/assets/products/round-duct.webp";
import rectangularDuct from "@/assets/products/rectangular-duct.webp";

import airHandlingUnit from "@/assets/products/air-handling-unit.webp";
import diffuser from "@/assets/products/diffuser.webp";
import volumeControlDamper from "@/assets/products/volume-control-damper.webp";

import lockFormerMachine from "@/assets/products/lock-former-machine.webp";
import sheetCutterFoldingMachine from "@/assets/products/sheet-cutter-folding-machine.webp";


const productCategories = [
  {
    title: "Air Conditioning",
    items: [
      {
        name: "Ceiling Cassette AC",
        desc: "Designed to blend seamlessly into ceilings with only a sleek grille visible, this system distributes conditioned air uniformly in multiple directions, eliminating hot spots and ensuring consistent comfort in large open spaces.",
        img: ceilingCassetteAC,
      },
      {
        name: "One-Way Cassette AC",
        desc: "Ideal for compact spaces, this unit delivers focused, uniform airflow in a single direction. Its ceiling-mounted design ensures quiet operation while maintaining efficient cooling without occupying wall space.",
        img: oneWayCassetteAC,
      },
      {
        name: "Hi-Wall Split AC",
        desc: "A high-performance wall-mounted system featuring advanced filtration and energy-efficient inverter technology, providing consistent cooling and improved indoor air quality.",
        img: hiWallSplitAC
        ,
      },
      {
        name: "Ductable Split AC",
        desc: "Provides high-capacity cooling with flexible duct design, ensuring uniform airflow, low noise levels, and optimal comfort for commercial and large residential applications.",
        img: ductableSplitAC,
      },
      {
        name: "High Static Ductable AC",
        desc: "Engineered for large and complex layouts, this system delivers strong external static pressure, enabling efficient air distribution through extensive duct networks with silent operation.",
      img: highStaticDuctableAC,
      },
      {
        name: "Tower AC",
        desc: "A sleek floor-standing air conditioning unit designed for powerful cooling in large rooms or commercial spaces, combining high performance with a compact vertical design.",
        img: towerAC,
      },
    ],
  },
  {
    title: "Outdoor Units",
    items: [
      {
        name: "Outdoor Unit",
        desc: "Built for durability and high performance, this unit efficiently manages heat exchange and powers the cooling cycle, ensuring reliable and energy-efficient operation.",
        img: outdoorUnit,
      },
      {
        name: "Top Discharge Outdoor Unit",
        desc: "Designed with upward airflow for superior cooling efficiency, this compact unit enhances heat exchange performance and is ideal for commercial and multi-zone HVAC applications.",
        img: topDischargeOutdoorUnit,
      },
    ],
  },
  {
    title: "Cooling Systems",
    items: [
      {
        name: "Cooling Tower",
        desc: "A specialized heat rejection system that works with water-cooled chillers to remove heat through evaporation, ensuring efficient cooling in large industrial and commercial setups.",
        img: coolingTower,
      },
      {
        name: "Water Cooled Chiller",
        desc: "Delivers high-performance cooling through a closed-loop water system integrated with cooling towers, offering energy efficiency, stable operation, and long service life.",
        img: waterCooledChiller,
      },
    ],
  },
  {
    title: "Ventilation & Fans",
    items: [
      {
        name: "Axial Fan",
        desc: "Provides efficient linear airflow with high volume capacity, making it suitable for ventilation, industrial cooling, and HVAC applications requiring consistent air movement.",
        img: axialFan,
      },
      {
        name: "Centrifugal Flow Fan",
        desc: "Moves air by accelerating it outward through a rotating impeller, delivering high pressure and stable airflow ideal for ducts and industrial ventilation systems.",
        img: centrifugalFlowFan,
      },
      {
        name: "Centrifugal Duct Fan",
        desc: "Designed for long duct runs, this fan ensures powerful and stable airflow using advanced impeller designs, making it suitable for high static pressure environments.",
        img: centrifugalDuctFan,
      },
      {
        name: "Jet Fan",
        desc: "Creates high-velocity air streams to remove contaminated air, commonly used for ventilation and smoke extraction in tunnels, basements, and underground parking areas.",
        img: jetFan,
      },
    ],
  },
  {
    title: "Ducting Systems",
    items: [
      {
        name: "Spiral Flat Oval Duct",
        desc: "Combines the space-saving advantages of oval ducts with the strength of spiral construction, offering low pressure loss, reduced noise, and a sleek profile for tight ceiling spaces.",
        img: spiralFlatOvalDuct,
      },
      {
        name: "Round Duct",
        desc: "Designed for efficient airflow with minimal resistance, its smooth circular structure reduces friction, improves performance, and ensures long-term durability.",
        img: roundDuct,
      },
      {
        name: "Rectangular Duct",
        desc: "Offers high air-carrying capacity and easy installation, making it ideal for commercial HVAC systems where space constraints and efficient airflow distribution are critical.",
        img: rectangularDuct,
      },
    ],
  },
  {
    title: "HVAC Components",
    items: [
      {
        name: "Air Handling Unit (AHU)",
        desc: "A central HVAC component that cools, filters, and distributes conditioned air, ensuring efficient airflow, temperature control, and superior indoor air quality.",
        img: airHandlingUnit,
      },
      {
        name: "Diffuser",
        desc: "Delivers controlled and uniform air distribution, minimizing drafts while enhancing comfort and improving overall HVAC system efficiency.",
        img: diffuser,
      },
      {
        name: "Volume Control Damper (VCD)",
        desc: "Enables precise airflow adjustment within duct systems, ensuring proper air balancing and optimized system performance.",
        img: volumeControlDamper,
      },
    ],
  },
  {
    title: "Fabrication Equipment",
    items: [
      {
        name: "Lock Former Machine",
        desc: "Used for forming Pittsburgh locks and duct seams with high precision, ensuring fast, consistent, and durable duct fabrication.",
        img: lockFormerMachine,
      },
      {
        name: "Sheet Cutter & Folding Machine",
        desc: "Provides clean, accurate cutting and bending of metal sheets, improving productivity and precision in HVAC duct manufacturing processes.",
        img: sheetCutterFoldingMachine,
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      


      {/* PRODUCTS SECTION */}
      <div className="pt-24">
        <ProductsHexSection categories={productCategories} />
      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;