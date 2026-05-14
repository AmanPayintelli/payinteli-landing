"use client";

import Link from "next/link";
import Container from "../container";
import { cn } from "@/lib/utils";
import { DropDownSvg } from "../ui/icons/icons";
import { ButtonPrimary, ButtonSecondary } from "../ui/buttonPrimary";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { NavLinks } from "./navLinks";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [productHovered, setProductHovered] = useState<string | null>(null);
  const [isBigScreen, setIsBigScreen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const navWidthMotion = useTransform(scrollY, [0, 100], ["100%", "65%"]);
  const navTopMotion = useTransform(scrollY, [0, 100], ["0px", "10px"]);
  const navRadiusMotion = useTransform(scrollY, [0, 20], ["0px", "16px"]);
  const navShadowMotion = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px rgba(0,0,0,0.08)"],
  );

  useEffect(() => {
    const checkScreen = () => {
      setIsBigScreen(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-1/2 z-50 w-full overflow-visible bg-white border-b border-border "
      style={{
        width: isBigScreen ? navWidthMotion : "100%",
        top: isBigScreen ? navTopMotion : "0px",
        borderRadius: isBigScreen ? navRadiusMotion : "0px",
        boxShadow: isBigScreen ? navShadowMotion : "none",
        x: "-50%",
      }}
    >
      <Container className="flex items-center justify-between px-4 py-3">
        <Logo />

        <div
          className="relative hidden items-center gap-1 rounded-2xl border border-border/60 px-2 py-1 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {NavLinks.map((link) => (
            <div
              key={link.title}
              onMouseEnter={() => setHovered(link.title)}
              className="relative"
            >
              {hovered === link.title && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 -z-10 rounded-lg bg-primary-soft"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              <Link
                href={link.href}
                className="relative z-10 flex items-center gap-1 rounded-xl px-3 py-1.5 text-[13px] font-medium text-neutral-500 transition-all duration-200 hover:text-neutral-900"
              >
                <span className="flex items-center gap-1">
                  {link.title}

                  {link.details && (
                    <DropDownSvg
                      className={cn(
                        "h-3 w-3 transition-all duration-300",
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
                  className="absolute top-full left-0 z-50 mt-1 rounded-lg border border-border bg-white p-1 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-auto w-fit rounded-md border border-border bg-white p-1">
                        <div className="flex flex-col items-start justify-start">
                          {link.subTitle && (
                            <p className="px-2 py-1 text-[11px] text-neutral-400">
                              {link.subTitle}
                            </p>
                          )}
                          <div>
                            <div
                              className="flex flex-col items-start justify-start"
                              onMouseLeave={() => setProductHovered(null)}
                            >
                              {link.subLinks.map((item) => (
                                <div
                                  key={item.title}
                                  className="relative"
                                  onMouseEnter={() =>
                                    setProductHovered(item.title)
                                  }
                                >
                                  {productHovered === item.title && (
                                    <motion.div
                                      layoutId="product-hover"
                                      className="absolute inset-0 rounded-lg bg-[#E5E5FF]"
                                      transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                      }}
                                    />
                                  )}

                                  <div className="relative z-10 mb-1 flex items-center gap-2 rounded-lg px-2 py-1">
                                    <div className="flex min-h-8 min-w-8 shrink-0 items-center justify-center rounded-sm border border-border bg-neutral-50">
                                      {item.icon && (
                                        <item.icon className="h-3.5 w-3.5 text-[#5B61D1]" />
                                      )}
                                    </div>

                                    <Link href={item.href}>
                                      <span className="font-heading text-[13px] font-medium">
                                        {item.title}
                                      </span>

                                      <p className="w-40 truncate text-[10px] tracking-wide text-neutral-500">
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
                    </div>

                    {link.case_studies && link.case_studies.length > 0 && (
                      <div className="flex gap-2">
                        {link.case_studies.map((study) => (
                          <Link
                            key={study.title}
                            href={study.href ?? "#"}
                            className="group relative h-60 w-70 overflow-hidden rounded-xl border border-border bg-neutral-100"
                          >
                            <img
                              src={study.background}
                              alt={study.title}
                              className="absolute inset-0 h-full w-full scale-105 object-cover object-center blur-[3px] transition-transform duration-500 group-hover:scale-110"
                              draggable={false}
                            />

                            <div className="absolute inset-0 bg-black/35" />

                            <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                              Case study
                            </div>

                            {study.logo && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                  src={study.logo}
                                  alt={`${study.title} logo`}
                                  className="max-h-12 max-w-35 object-contain"
                                  draggable={false}
                                />
                              </div>
                            )}

                            <p className="absolute bottom-4 left-4 right-4 text-[15px] font-medium leading-5 text-white">
                              {study.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center justify-between gap-2.5 md:flex">
          <ButtonSecondary
            title="Get Started"
            textSize="text-sm font-medium"
            className="w-full sm:w-auto"
          />

          <ButtonPrimary
            title="Book a Demo"
            textSize="text-sm font-medium"
            className="w-full sm:w-auto"
          />
        </div>
      </Container>
    </motion.div>
  );
};

export default Navbar;

const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/Logo/Pi-Logo.png"
      alt="Payintelli"
      className={cn("h-5 w-auto object-contain md:h-8", className)}
    />
  );
};
