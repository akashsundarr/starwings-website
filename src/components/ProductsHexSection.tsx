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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-gray-600 mt-3">
            Explore our complete HVAC solutions
          </p>
        </div>

        {/* APPLE-STYLE CATEGORY TABS */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {["All", ...categories.map((c) => c.title)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#2E3A8C] text-white shadow"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#2E3A8C] hover:text-[#2E3A8C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition cursor-pointer"
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
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.desc}
                  </p>

                  <p className="mt-4 text-sm font-medium text-[#2E3A8C] group-hover:text-[#8CC63F] transition">
                    View Details →
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* PRODUCT DETAIL MODAL */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
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
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.desc}
                  </p>

                  <button
                    className="mt-6 px-6 py-3 bg-[#2E3A8C] text-white rounded-lg hover:bg-[#1f2a6b] transition"
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