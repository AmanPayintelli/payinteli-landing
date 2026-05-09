"use client";
import Link from "next/link";
import Container from "../container";
import { cn } from "@/lib/utils";
import { DropDownSvg } from "../icons/icons";
import { ButtonPrimary, ButtonSecondary } from "../buttonPrimary";
import { motion } from "motion/react";
import { useState } from "react";
import { NavLinks } from "./navLinks";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [productHovered, setProductHovered] = useState<string | null>(null);

  return (
    <div className="border-b border-neutral-200/70">
      <Container className="flex items-center justify-between py-2 px-4">
        <Logo />

        <div
          className="md:flex items-center justify-between gap-2 hidden relative"
          onMouseLeave={() => setHovered(null)}
        >
          {NavLinks.map((link) => (
            <div
              key={link.title}
              onMouseEnter={() => setHovered(link.title)}
              className="relative"
            >
              {" "}
              {hovered === link.title && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-neutral-200/80 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <Link
                href={link.href}
                className="relative z-10 flex items-center gap-1 px-4 py-2 text-black/60 hover:text-black"
              >
                <span className="group text-sm flex items-center gap-1 transition-colors">
                  {link.title}
                  {link.details && (
                    <DropDownSvg className="h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </span>
              </Link>
              {link.details && hovered === link.title && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="absolute top-full left-0 mt-1 z-50 border rounded-lg bg-white border-neutral-200 shadow-sm p-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-white border border-neutral-200 rounded-md  p-1 h-auto w-fit">
                      <div className="flex flex-col items-start justify-start">
                        <p className="text-xs text-neutral-400 px-2 py-1">
                          Our Products
                        </p>

                        <div
                          className="flex flex-col items-start justify-start"
                          onMouseLeave={() => setProductHovered(null)}
                        >
                          {link.subLinks.map((item) => (
                            <div
                              key={item.title}
                              className="relative"
                              onMouseEnter={() => setProductHovered(item.title)}
                            >
                              {productHovered === item.title && (
                                <motion.div
                                  layoutId="product-hover"
                                  className="absolute inset-0 bg-neutral-200/80 rounded-lg"
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                  }}
                                />
                              )}

                              <div className="relative z-10 flex items-center gap-3 mb-1 rounded-lg py-1 px-2">
                                <div className="min-h-9 min-w-9 border border-neutral-200 rounded-sm bg-neutral-50 flex items-center justify-center shrink-0">
                                  {item.icon && (
                                    <item.icon className="h-4 w-4 text-blue-500" />
                                  )}
                                </div>

                                <Link href={item.href}>
                                  <span className="text-sm font-heading font-medium">
                                    {item.title}
                                  </span>

                                  <p className="text-[10px] truncate w-40 text-neutral-500 tracking-wide">
                                    {item.description}
                                  </p>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="md:flex hidden items-center justify-between gap-3">
          <ButtonPrimary
            textSize="text-sm"
            title="Book a Demo"
            height="h-[35px]"
          />
          <ButtonSecondary
            title="Get Started"
            textSize="text-sm"
            height="h-[35px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/Logo/Pi-Logo.svg"
      alt="Payintelli"
      className={cn("md:h-15 h-10 w-auto object-contain", className)}
    />
  );
};
