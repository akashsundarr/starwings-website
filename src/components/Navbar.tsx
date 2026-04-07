import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logoDark from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

// Animation Variants for the Mobile Menu
const menuVars = {
  initial: { opacity: 0, originY: 0, scaleY: 0.95 },
  animate: { 
    opacity: 1, 
    scaleY: 1, 
    transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0], staggerChildren: 0.05, delayChildren: 0.1 } 
  },
  exit: { 
    opacity: 0, 
    scaleY: 0.95, 
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } 
  },
};

const linkVars = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b
      ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-gray-200/50 shadow-sm"
          : "bg-white border-transparent"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300
        ${isScrolled ? "h-16" : "h-20"}`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logoDark}
            alt="StarWings"
            className={`object-contain transition-all duration-300 group-hover:opacity-80
            ${isScrolled ? "h-12 lg:h-14" : "h-14 lg:h-16"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-300
                ${isActive ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
              >
                {link.label}

                {/* Framer Motion Layout ID for sliding underline */}
                {isActive && (
                  <motion.div
                    layoutId="desktop-nav-underline"
                    className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-green-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="tel:+919846001702"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold
            bg-green-500 text-white shadow-sm hover:shadow-lg hover:shadow-green-500/30 transition-shadow duration-300"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
            </motion.div>
            Call Now
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative z-50 text-gray-800 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.div animate={open ? "open" : "closed"} className="relative w-6 h-6">
            <motion.div
              variants={{ closed: { opacity: 1, rotate: 0 }, open: { opacity: 0, rotate: 90 } }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Menu className="w-6 h-6" />
            </motion.div>
            <motion.div
              variants={{ closed: { opacity: 0, rotate: -90 }, open: { opacity: 1, rotate: 0 } }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl origin-top"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <motion.div key={link.path} variants={linkVars}>
                    <Link
                      to={link.path}
                      className={`block text-lg font-medium tracking-wide transition-colors
                      ${isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={linkVars} className="mt-4 pt-6 border-t border-gray-100">
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919846001702"
                  className="flex items-center justify-center gap-2 w-full
                  bg-green-500 text-white px-5 py-3.5 rounded-xl font-semibold shadow-md"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  Call Now
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;