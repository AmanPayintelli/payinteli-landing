import Link from "next/link";
import Container from "./container";
import { cn } from "@/lib/utils";
import { DropDownSvg } from "./icons/icons";

const Navbar = () => {
  const NavLinks = [
    { title: "Products", details: true, href: "#" },
    { title: "Resources", details: true, href: "#" },
    { title: "Developers", details: true, href: "#" },
    { title: "Partners", details: false, href: "#" },
    { title: "ContactUs", details: false, href: "#" },
  ];
  return (
    <div className="border-b border-border">
      <Container className="flex items-center justify-between py-2">
        <Logo />

        <div className="md:flex items-center justify-between gap-5 hidden">
          {NavLinks.map((link) => (
            <div key={link.title}>
              <Link
                href={link.href}
                className="flex items-center gap-1.5 cursor-pointer hover:bg-neutral-200/80 p-3 rounded-lg"
              >
                <span className="font-normal tracking-tight text-black/70 flex gap-1 items-center">
                  {link.title}
                  {link.details && (
                    <DropDownSvg className="w-fit h-4 shrink-0" />
                  )}
                </span>
              </Link>
            </div>
          ))}
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
      className={cn("h-15 w-auto object-contain", className)}
    />
  );
};
