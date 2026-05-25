import { Calculator, BookOpenText, Mail, Building2, Code2 } from "lucide-react";
import { DeepSearch, Recon, Shield, Symphony } from "../ui/icons/product-icons";
export const NavLinks = [
  {
    title: "Products",
    details: true,
    subTitle: "Our Products",
    href: "#",
    subLinks: [
      {
        title: "Pi Shield",
        href: "/pi-shield",
        description: "Fraud detection and security.",
        icon: Shield,
      },

      {
        title: "Pi Symphony",
        href: "/pi-symphony",
        description: "Payment orchestration.",
        icon: Symphony,
      },
      {
        title: "Pi Recon",
        href: "/pi-recon",
        description: "Automated reconciliation and transaction matching.",
        icon: Recon,
      },
      {
        title: "Pi DeepSearch",
        href: "pi-deepsearch",
        description: "AI Insights and analytics.",
        icon: DeepSearch,
      },
    ],
    case_studies: [
      {
        logo: "/entain-logo.svg",
        title: "How Entain find gaps",
        background: "/case-stiudy-1.png",
        href: "#",
      },
      {
        logo: "/pxp-logo.svg",
        title: "Payintelli Helped PXP from BankKrupt",
        background: "/case-study2.png",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    details: true,
    href: "#",
    subTitle: "Resources",
    subLinks: [
      {
        title: "ROI Calculator",
        href: "#",
        description: "Estimate your payment savings.",
        icon: Calculator,
      },
      {
        title: "Resource Hub",
        href: "#",
        description: "Guides, blogs, and insights.",
        icon: BookOpenText,
      },
      {
        title: "Contact Us",
        href: "#",
        description: "Talk to our team directly.",
        icon: Mail,
      },
      {
        title: "About Us",
        href: "#",
        description: "Learn more about PayIntelli.",
        icon: Building2,
      },
    ],
  },
  {
    title: "Developers",
    details: true,
    href: "#",
    subTitle: "Developers",
    subLinks: [
      {
        title: "Documentation",
        href: "#",
        description: "Explore guides and setup docs.",
        icon: BookOpenText,
      },
      {
        title: "API Reference",
        href: "#",
        description: "View endpoints and integrations.",
        icon: Code2,
      },
    ],
  },
];
