import React from "react";
import Seperator from "./seperator";
import Container from "./container";

import {
  Checkout,
  DeepSearch,
  Recon,
  Shield,
  Symphony,
} from "./icons/product-icons";

const Products = () => {
  const productOptions = [
    { title: "Shield", icon: <Shield className="text-black" /> },
    { title: "Symphony", icon: <Symphony className="text-black" /> },
    { title: "Recon", icon: <Recon className="text-black" /> },
    { title: "DeepSearch", icon: <DeepSearch className="text-black" /> },
    { title: "Checkout", icon: <Checkout className="text-black" /> },
  ];

  return (
    <Seperator>
      <Container className="relative flex h-full w-full flex-col items-center justify-center border-x border-neutral-200/70 px-4 py-8 sm:px-6 md:px-10">
        {/* Corner Boxes */}
        <div className="absolute -top-1 -left-1 size-2 border border-neutral-200 bg-gray-50 rounded-full" />
        <div className="absolute -top-1 -right-1 size-2 border border-neutral-200 bg-gray-50 rounded-full" />
        <div className="absolute -bottom-1 -left-1 size-2 border border-neutral-200 bg-gray-50 rounded-full" />
        <div className="absolute -bottom-1 -right-1 size-2 border border-neutral-200 bg-gray-50 rounded-full" />

        {/* Products */}
        {/* <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {productOptions.map((option) => (
            <ButtonRounded
              key={option.title}
              title={option.title}
              icon={option.icon}
              className="
        px-4
        sm:px-6
        font-medium
        tracking-tight
      "
              textSize="text-xs sm:text-sm"
            />
          ))}
        </div> */}
      </Container>
    </Seperator>
  );
};

export default Products;
