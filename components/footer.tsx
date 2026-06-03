"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ExternalLink, Mail } from "lucide-react";

import Container from "./container";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Pi Shield", href: "/pi-shield" },
      { label: "Pi Symphony", href: "/pi-symphony" },
      { label: "Pi Deepsearch", href: "/pi-deepsearch" },
      { label: "Pi Recon", href: "/pi-recon" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "Security & Compliance", href: "/compliance" },
      { label: "PCI DSS", href: "/compliance#pci" },
      { label: "GDPR", href: "/compliance#gdpr" },
      { label: "ISO 27001", href: "/compliance#iso" },
      { label: "PSD2", href: "/compliance#psd2" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Netherlands", href: "/contact" },
      { label: "www.payintelli.com", href: "https://www.payintelli.com" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/payintelli/",
    image: "/linkedin.svg",
  },
  {
    label: "YouTube",
    href: "#",
    image: "/youtube.svg",
  },
];

type SubscriptionType = "BOTH" | "BLOG" | "NEWSLETTER";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionType, setSubscriptionType] =
    useState<SubscriptionType>("BOTH");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isBlogChecked =
    subscriptionType === "BLOG" || subscriptionType === "BOTH";

  const isNewsletterChecked =
    subscriptionType === "NEWSLETTER" || subscriptionType === "BOTH";

  useEffect(() => {
    if (cooldownSeconds <= 0) return;

    const timer = setInterval(() => {
      setCooldownSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleBlogChange = (checked: boolean) => {
    if (checked && isNewsletterChecked) setSubscriptionType("BOTH");
    else if (checked) setSubscriptionType("BLOG");
    else if (isNewsletterChecked) setSubscriptionType("NEWSLETTER");
    else setSubscriptionType("BOTH");
  };

  const handleNewsletterChange = (checked: boolean) => {
    if (checked && isBlogChecked) setSubscriptionType("BOTH");
    else if (checked) setSubscriptionType("NEWSLETTER");
    else if (isBlogChecked) setSubscriptionType("BLOG");
    else setSubscriptionType("BOTH");
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (cooldownSeconds > 0) {
      setError(
        `Please wait ${formatTime(cooldownSeconds)} before subscribing again.`,
      );
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch(
        "https://xx1ulrq8s3.execute-api.ap-south-1.amazonaws.com/api/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            is_internal: false,
            source: "payintelli.com/resources/hub",
            subscription_type: subscriptionType,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      setMessage(data?.message || "Subscribed successfully");
      setEmail("");
      setSubscriptionType("BOTH");
      setCooldownSeconds(5 * 60);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to subscribe. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="border-b px-8 py-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.35fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-text-heading">
                <span className="flex size-8 items-center justify-center rounded-lg border bg-primary-soft text-primary">
                  <Mail className="size-4" />
                </span>
                Subscribe to PayIntelli updates
              </div>

              <p className="mt-2 max-w-xl text-sm leading-6 text-text-heading/55">
                Be the first one to know about our new products, releases, and
                payment intelligence updates.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={cooldownSeconds > 0}
                  placeholder="Email address"
                  className="h-11 flex-1 rounded-lg border border-border bg-white px-4 text-sm text-text-heading outline-none transition placeholder:text-text-heading/35 focus:border-primary focus:ring-4 focus:ring-primary-soft disabled:cursor-not-allowed disabled:bg-gray-50"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || cooldownSeconds > 0}
                  className="h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-muted disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Subscribing..."
                    : cooldownSeconds > 0
                      ? `Try again in ${formatTime(cooldownSeconds)}`
                      : "Subscribe"}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-text-heading/60">
                  <input
                    type="checkbox"
                    checked={isBlogChecked}
                    disabled={cooldownSeconds > 0}
                    onChange={(e) => handleBlogChange(e.target.checked)}
                    className="size-4 rounded border-border accent-primary disabled:cursor-not-allowed"
                  />
                  Blog
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-sm text-text-heading/60">
                  <input
                    type="checkbox"
                    checked={isNewsletterChecked}
                    disabled={cooldownSeconds > 0}
                    onChange={(e) => handleNewsletterChange(e.target.checked)}
                    className="size-4 rounded border-border accent-primary disabled:cursor-not-allowed"
                  />
                  Newsletter
                </label>
              </div>

              {message && (
                <p className="text-sm font-medium text-emerald-600">
                  {message}
                </p>
              )}

              {error && (
                <p className="text-sm font-medium text-red-500">{error}</p>
              )}
            </form>
          </div>
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
            <Link
              href="/terms-of-service"
              className="transition hover:text-primary"
            >
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/contact-us" className="transition hover:text-primary">
              Contact Us
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
