"use client";

import ProductsDashboard from "./products-dashboard";
import { motion } from "motion/react";

const ProductsShowCase = () => {
  return (
    <motion.div className="relative h-[520px] w-full sm:h-[580px] lg:h-[650px]">
      {/* Glow */}
      <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Dashboard */}
      <div className="relative z-10 h-full w-full">
        <ProductsDashboard />
      </div>
    </motion.div>
  );
};

export default ProductsShowCase;
