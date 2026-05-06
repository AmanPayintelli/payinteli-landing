"use client";
import Link from "next/link";
import Container from "./container";
import { cn } from "@/lib/utils";
import { DropDownSvg } from "./icons/icons";
import { ButtonPrimary, ButtonSecondary } from "./buttonPrimary";
import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const NavLinks = [
    { title: "Products", details: true, href: "#" },
    { title: "Resources", details: true, href: "#" },
    { title: "Developers", details: true, href: "#" },
    // { title: "Partners", details: false, href: "#" },
    // { title: "ContactUs", details: false, href: "#" },
  ];
  return (
    <div className="border-b">
      <Container className="flex items-center justify-between py-2 px-4">
        <Logo />

        <div className="md:flex items-center justify-between gap-2 hidden relative">
          {NavLinks.map((link) => (
            <div
              key={link.title}
              onMouseEnter={() => setHovered(link.title)}
              onMouseLeave={() => setHovered(null)}
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
                <span className="text-sm flex items-center gap-1">
                  {link.title}
                  {link.details && (
                    <DropDownSvg className="h-4 text-black/80" />
                  )}
                </span>
              </Link>
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
