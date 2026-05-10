"use client";
import Container from "./container";
import ProductsDashboard from "./products-dashboard";
import { motion } from "motion/react";

const ProductsShowCase = () => {
  return (
    <Container className="border-x border-neutral-200/70 w-full h-[60vh] p-1 overflow-hidden">
      <div className="border h-full w-full rounded-[3px] border-neutral-200/70 relative overflow-hidden">
        <img
          src="/products-bg.png"
          alt="Products Background"
          className="h-full w-full rounded-[3px] object-cover"
        />

        {/* Dashboard Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-end justify-center"
        >
          <div className="h-[90%] w-[90%] rounded-t-sm overflow-hidden shadow-2xl">
            <ProductsDashboard />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default ProductsShowCase;
