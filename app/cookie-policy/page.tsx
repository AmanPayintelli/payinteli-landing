"use client";

import Container from "@/components/container";
import CookieSettingsDialog from "@/components/cookies/cookieSettingsDialog";
import SeparatorContainer from "@/components/separator-container";
import Separator from "@/components/seperator";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

const STORAGE_KEY = "cookieConsent";

const navItems = [
  ["what-are-cookies", "1. What are cookies?"],
  ["how-we-use", "2. How we use cookies"],
  ["necessary", "3. Strictly Necessary"],
  ["performance", "4. Performance"],
  ["functional", "5. Functional"],
  ["targeting", "6. Targeting"],
  ["settings", "7. Cookie Settings"],
];

const cookieGroups = [
  {
    id: "necessary",
    title: "3. Strictly Necessary Cookies",
    description:
      "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    cookies: [
      ["SESSION", "dev.payintelli.com", "Session", "First Party"],
      ["dd_cookie_test", "lh.payintelli.com", "A few seconds", "First Party"],
      ["OptanonAlertBoxClosed", "payintelli.com", "364 Days", "First Party"],
      ["OptanonConsent", "payintelli.com", "364 Days", "First Party"],
      [
        "wordpress_test_cookie",
        "assets.payintelli.com",
        "Session",
        "First Party",
      ],
    ],
  },
  {
    id: "performance",
    title: "4. Performance Cookies",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    cookies: [
      ["_pk_id*", "investors.payintelli.com", "392 Days", "First Party"],
      ["_pk_ses*", "investors.payintelli.com", "A few seconds", "First Party"],
      ["_ga_xxxxxxxxxx", "dev.payintelli.com", "399 Days", "First Party"],
      ["_hjTLDTest", "payintelli.com", "Session", "First Party"],
      ["__utmc", "payintelli.com", "Session", "First Party"],
    ],
  },
  {
    id: "functional",
    title: "5. Functional Cookies",
    description:
      "These cookies enable enhanced functionality and personalisation. Some services may not function properly without them.",
    cookies: [
      ["__zlcmid", "payintelli.com", "364 Days", "First Party"],
      ["hubspotutk", "payintelli.com", "179 Days", "First Party"],
      ["cf_clearance", "dev.payintelli.com", "A few seconds", "First Party"],
      ["locale", "dev.payintelli.com", "Session", "First Party"],
      ["vuid", "vimeo.com", "399 Days", "Third Party"],
      ["JSESSIONID", "app.quotemedia.com", "Session", "Third Party"],
    ],
  },
  {
    id: "targeting",
    title: "6. Targeting Cookies",
    description:
      "These cookies may be set through our site by advertising partners to build a profile of your interests.",
    cookies: [
      ["vv_visitor_id", "www.payintelli.com", "1095 Days", "First Party"],
      ["_fbp", "payintelli.com", "89 Days", "First Party"],
      ["_gcl_au", "payintelli.com", "89 Days", "First Party"],
      ["MUID", "bing.com", "389 Days", "Third Party"],
      ["IDE", "doubleclick.net", "389 Days", "Third Party"],
      ["CONSENT", "google.com", "729 Days", "Third Party"],
    ],
  },
];

const CookiePolicy = () => {
  const [openCookieSettings, setOpenCookieSettings] = useState(false);

  const { scrollYProgress } = useScroll();

  const beamScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.8,
  });

  return (
    <>
      <div className="pt-17">
        <Separator>
          <Container className="border-x border-border">
            <div className="flex h-14 items-center px-8 text-sm">
              <nav className="flex items-center gap-2 text-text-muted">
                <a href="/" className="transition-colors hover:text-foreground">
                  Home
                </a>
                <span className="text-border">/</span>
                <span className="font-medium text-foreground">
                  Cookie Policy
                </span>
              </nav>
            </div>
          </Container>
        </Separator>
      </div>

      <Container className="border-x border-border bg-background">
        <main className="grid gap-12 px-4 py-16 md:grid-cols-[1fr_280px] md:px-8 md:py-4">
          <article className="max-w-4xl">
            <header className="mb-10 rounded-4xl border border-border bg-primary-soft/40 p-8 md:p-10">
              <p className="mb-4 text-sm font-medium text-primary">
                PAYINTELLI PVT. LTD.
              </p>

              <h1 className="text-heading text-4xl md:text-6xl">
                Cookie Policy
              </h1>

              <p className="mt-5 text-muted">
                Version 1.0 · Effective: May 2026 · Last reviewed: May 2026
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
                Our website uses cookies to enhance your browsing experience,
                analyze site traffic, and serve personalized content. You can
                manage your preferences below.
              </p>
            </header>

            <div className="rounded-4xl border border-border bg-white px-6 py-8 shadow-[0_24px_100px_rgba(8,40,50,0.04)] md:px-10">
              <PolicySection id="what-are-cookies" title="1. What are cookies?">
                <p>
                  Cookies are text files placed on your computer to collect
                  standard Internet log information and visitor behavior
                  information.
                </p>

                <p>
                  When you visit our website, we may collect information
                  automatically through cookies or similar technologies, such as
                  beacons, tags, scripts, affiliates, or analytics/service
                  providers.
                </p>

                <p>
                  These technologies are used to analyze trends, administer the
                  site, track users’ movements around the site, and gather
                  demographic information. Reports may be received individually
                  or aggregated.
                </p>
              </PolicySection>

              <PolicySection id="how-we-use" title="2. How do we use cookies?">
                <p>
                  Our company uses cookies in a range of ways to improve your
                  experience on our website, including:
                </p>

                <ul>
                  <li>Keeping you logged in</li>
                  <li>Understanding how you use our website</li>
                  <li>Optimizing our site performance</li>
                  <li>Offering you appropriate content</li>
                </ul>
              </PolicySection>

              {cookieGroups.map((group) => (
                <PolicySection key={group.id} id={group.id} title={group.title}>
                  <p>{group.description}</p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-180 text-left text-sm">
                        <thead className="bg-primary-soft/50 text-heading">
                          <tr>
                            <th className="px-4 py-3 font-semibold">Cookie</th>
                            <th className="px-4 py-3 font-semibold">
                              Cookie Subgroup
                            </th>
                            <th className="px-4 py-3 font-semibold">
                              Lifespan
                            </th>
                            <th className="px-4 py-3 font-semibold">Type</th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-border text-muted">
                          {group.cookies.map((cookie) => (
                            <tr key={`${group.id}-${cookie[0]}`}>
                              <td className="px-4 py-3 font-medium text-heading">
                                {cookie[0]}
                              </td>
                              <td className="px-4 py-3">{cookie[1]}</td>
                              <td className="px-4 py-3">{cookie[2]}</td>
                              <td className="px-4 py-3">{cookie[3]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </PolicySection>
              ))}

              <PolicySection id="settings" title="7. Cookie Settings">
                <p>
                  You can manage your cookie preferences through the cookie
                  settings banner or browser settings. Please note that blocking
                  some cookies may impact website functionality.
                </p>

                <button
                  onClick={() => setOpenCookieSettings(true)}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Cookie Settings
                </button>

                <div className="mt-8 rounded-2xl border border-border bg-primary-soft/35 p-6 text-sm leading-7 text-muted">
                  <p>— End of Cookie Policy —</p>
                  <p>Payintelli Pvt. Ltd. | legal@payintelli.com</p>
                  <p>
                    Version 1.0 · © 2026 Payintelli Pvt. Ltd. All rights
                    reserved.
                  </p>
                </div>
              </PolicySection>
            </div>
          </article>

          <aside className="relative hidden md:block">
            <div className="sticky top-24 rounded-3xl border border-border bg-white p-5 shadow-[0_20px_80px_rgba(8,40,50,0.04)]">
              <div className="absolute left-5 top-6 h-[calc(100%-3rem)] w-px bg-primary-soft">
                <motion.div
                  style={{ scaleY: beamScale }}
                  className="h-full origin-top rounded-full bg-primary"
                />
              </div>

              <p className="mb-4 pl-5 text-sm font-medium text-heading">
                On this page
              </p>

              <nav className="space-y-1 pl-5">
                {navItems.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-primary-soft hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </main>
      </Container>

      <SeparatorContainer />

      <CookieSettingsDialog
        open={openCookieSettings}
        onClose={() => setOpenCookieSettings(false)}
        onRejectAll={() => {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
              status: "rejected",
              performance: false,
              functional: false,
              targeting: false,
            }),
          );

          setOpenCookieSettings(false);
        }}
        onSave={(preferences) => {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
              status: "custom",
              ...preferences,
            }),
          );

          setOpenCookieSettings(false);
        }}
      />
    </>
  );
};

const PolicySection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-border py-12 last:border-b-0"
    >
      <h2 className="text-heading text-2xl md:text-3xl">{title}</h2>

      <div className="mt-6 space-y-5 text-sm leading-7 text-muted md:text-base [&_h3]:pt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-heading [&_strong]:font-semibold [&_strong]:text-heading [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
};

export default CookiePolicy;
