import { BrainCircuit } from "lucide-react";
import { Recon, Shield, Symphony } from "../icons/product-icons";
export const NavLinks = [
  {
    title: "Products",
    details: true,
    href: "#",
    subLinks: [
      {
        title: "Pi Shield",
        href: "#",
        description: "Fraud detection and security.",
        icon: Shield,
      },

      {
        title: "Pi Symphony",
        href: "#",
        description: "Payment orchestration.",
        icon: Symphony,
      },
      {
        title: "Pi Recon",
        href: "#",
        description: "Automated reconciliation and transaction matching.",
        icon: Recon,
      },
      {
        title: "Pi DeepSearch",
        href: "#",
        description: "AI Insights and analytics.",
        icon: BrainCircuit,
      },
    ],
  },
  { title: "Resources", details: true, href: "#", subLinks: [] },
  { title: "Developers", details: true, href: "#", subLinks: [] },
];
