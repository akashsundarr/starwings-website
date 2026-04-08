import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductsHexSection = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const allItems = useMemo(
    () => categories.flatMap((c) => c.items),
    [categories]
  );

  const filteredItems =
    activeCategory === "All"
      ? allItems
      : categories.find((c) => c.title === activeCategory)?.items || [];

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
            Explore our complete HVAC solutions
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 mb-8 sm:mb-14 pb-2">
          {["All", ...categories.map((c) => c.title)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-[#2E3A8C] text-white shadow"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition active:scale-[0.98] cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                {/* IMAGE */}
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                    {item.desc}
                  </p>

                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-[#2E3A8C]">
                    View Details →
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-2 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="bg-white rounded-t-2xl sm:rounded-2xl max-w-lg sm:max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ y: 100, scale: 1 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* IMAGE */}
                <div className="aspect-video bg-gray-100">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="p-4 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {selectedProduct.desc}
                  </p>

                  <button
                    className="mt-5 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2E3A8C] text-white rounded-lg active:scale-[0.97] transition"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProductsHexSection;