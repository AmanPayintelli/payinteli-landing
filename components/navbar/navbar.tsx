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
    <div className="absolute top-0 left-0 w-full z-50 bg-white">
      <Container className="flex items-center justify-between py-3.5  px-4">
        <Logo />

        <div
          className="hidden md:flex items-center gap-1 relative rounded-2xl border border-neutral-200/60  px-2 py-1 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl"
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
                  className="absolute inset-0  rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <Link
                href={link.href}
                className="relative z-10 flex items-center gap-1.5 rounded-xl px-4 py-2 text-[14px] font-medium text-neutral-500 transition-all duration-200 hover:text-neutral-900"
              >
                <span className="flex items-center gap-1.5">
                  {link.title}

                  {link.details && (
                    <DropDownSvg
                      className={cn(
                        "h-3.5 w-3.5 transition-all duration-300",
                        hovered === link.title
                          ? "rotate-180 text-neutral-900"
                          : "text-neutral-400",
                      )}
                    />
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
                    <div className="bg-white border border-neutral-200/70 rounded-md  p-1 h-auto w-fit">
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
                                  className="absolute inset-0 bg-neutral-100/80 rounded-lg"
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
                                    <item.icon className="h-4 w-4 text-foreground" />
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
      src="/Logo/Pi-Logo.png"
      alt="Payintelli"
      className={cn("md:h-9 h-5 w-auto object-contain", className)}
    />
  );
};
