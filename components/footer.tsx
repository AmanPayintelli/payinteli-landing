import Link from "next/link";
import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";

import Container from "./container";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Pi Shield", href: "/products/pi-shield" },
      { label: "Pi Symphony", href: "/products/pi-symphony" },
      { label: "Pi Deepsearch", href: "/products/pi-deepsearch" },
      { label: "Pi Recon", href: "/products/pi-recon" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "PCI DSS", href: "/compliance/pci-dss" },
      { label: "GDPR", href: "/compliance/gdpr" },
      { label: "ISO 27001", href: "/compliance/iso-27001" },
      { label: "PSD2", href: "/compliance/psd2" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Netherlands", href: "/contact" },
      { label: "Serving Globally", href: "/contact" },
      { label: "www.payintelli.com", href: "https://www.payintelli.com" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    image: "/linkedin.svg",
  },
  {
    label: "Twitter",
    href: "#",
    image: "/twitter.svg",
  },
  {
    label: "YouTube",
    href: "#",
    image: "/youtube.svg",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <Container className="w-full border-x">
        <div className="grid border-b md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1fr]">
          <div className="border-b p-8 md:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-r">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/Pi-Logo.png"
                alt="PayIntelli logo"
                width={150}
                height={40}
                className="h-auto w-36"
              />
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-6 text-text-heading/60">
              Intelligent payment infrastructure to accept, manage, and scale
              payments globally.
            </p>

            <div className="mt-7 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="relative size-4 opacity-50 transition hover:opacity-100"
                >
                  <Image
                    src={social.image}
                    alt={social.label}
                    fill
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="border-b p-8 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0"
            >
              <h3 className="text-sm font-semibold text-text-heading">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="flex items-center gap-1.5 truncate text-sm text-text-heading/55 transition hover:text-primary"
                      >
                        <span className="truncate">{link.label}</span>

                        {isExternal && (
                          <ExternalLink className="size-3 shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-b px-8 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-heading/55">
            <Link
              href="/privacy-policy"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="transition hover:text-primary">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/contact" className="transition hover:text-primary">
              Contact Us
            </Link>
            <span>·</span>
            <Link href="/about" className="transition hover:text-primary">
              About
            </Link>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-text-heading shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            All Systems Online
          </div>
        </div>

        <div className="flex flex-col gap-3 px-8 py-4 text-sm text-text-heading/35 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            <span>Netherlands · Serving Globally</span>
          </div>

          <p>© 2025 PayIntelli. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
