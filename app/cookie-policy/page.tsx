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
      "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you such as setting privacy preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information.",
    cookies: [
      [
        "SESSION",
        "dev.payintelli.com",
        "Session",
        "First Party",
        "This cookie is typically used to maintain an anonymized user session by the server.",
      ],
      [
        "dd_cookie_test",
        "lh.payintelli.com",
        "A few seconds",
        "First Party",
        "Test cookie to check browser settings for cookies.",
      ],
      [
        "OptanonAlertBoxClosed",
        "payintelli.com",
        "364 Days",
        "First Party",
        "Set after visitors have seen the cookie notice. Prevents showing the message more than once.",
      ],
      [
        "OptanonConsent",
        "payintelli.com",
        "364 Days",
        "First Party",
        "Stores information about categories of cookies used and consent given for each category.",
      ],
      [
        "wordpress_test_cookie",
        "assets.payintelli.com",
        "Session",
        "First Party",
        "Used on sites built with WordPress. Tests whether the browser has cookies enabled.",
      ],
    ],
  },
  {
    id: "performance",
    title: "4. Performance Cookies",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
    cookies: [
      [
        "_pk_id*",
        "investors.payintelli.com",
        "392 Days",
        "First Party",
        "Used with Piwik analytics platform to track visitor behaviour and measure site performance.",
      ],
      [
        "_pk_ses*",
        "investors.payintelli.com",
        "A few seconds",
        "First Party",
        "Pattern type cookie used by Piwik analytics to track session activity.",
      ],
      [
        "_ga_xxxxxxxxxx",
        "dev.payintelli.com",
        "399 Days",
        "First Party",
        "Used by Google Analytics to identify and track an individual session.",
      ],
      [
        "_hjTLDTest",
        "payintelli.com",
        "Session",
        "First Party",
        "Used by Hotjar to determine the most generic cookie path for cross-domain sharing.",
      ],
      [
        "__utmc",
        "payintelli.com",
        "Session",
        "First Party",
        "Set by Google Analytics to enable interoperability with older versions of the GA code.",
      ],
    ],
  },
  {
    id: "functional",
    title: "5. Functional Cookies",
    description:
      "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
    cookies: [
      [
        "__zlcmid",
        "payintelli.com",
        "364 Days",
        "First Party",
        "Live chat widget sets the cookies to store the Zopim Live Chat ID used to identify a device across visits.",
      ],
      [
        "hubspotutk",
        "payintelli.com",
        "179 Days",
        "First Party",
        "Associated with HubSpot for user authentication. Persistent rather than session cookie.",
      ],
      [
        "cf_clearance",
        "dev.payintelli.com",
        "A few seconds",
        "First Party",
        "Used to verify user is not a bot; user/system has solved a challenge successfully.",
      ],
      [
        "locale",
        "dev.payintelli.com",
        "Session",
        "First Party",
        "Stores the user's preferred language or locale for content delivery.",
      ],
      [
        "_hjUserAttributesHash",
        "dev.payintelli.com",
        "A few seconds",
        "First Party",
        "Hotjar cookie used to track changes in user attributes that need updating.",
      ],
      [
        "cf_clearance",
        "vimeo.com",
        "364 Days",
        "Third Party",
        "Owned by Vimeo for video hosting/sharing functionality.",
      ],
      [
        "player",
        "vimeo.com",
        "364 Days",
        "Third Party",
        "Owned by Vimeo for video hosting/sharing functionality.",
      ],
      [
        "vuid",
        "vimeo.com",
        "399 Days",
        "Third Party",
        "Owned by Vimeo for video hosting/sharing functionality.",
      ],
      [
        "_cfuvid",
        "vimeo.com",
        "Session",
        "Third Party",
        "Owned by Vimeo for video hosting/sharing functionality.",
      ],
      [
        "__cf_bm",
        "vimeo.com",
        "A few seconds",
        "Third Party",
        "CloudFoundry cookie used by Vimeo.",
      ],
      [
        "__zlcid",
        "static.zdassets.com",
        "A few seconds",
        "Third Party",
        "Owned by Zendesk to ensure all features and functionality are correctly added to the site.",
      ],
      [
        "request_method",
        "static.zdassets.com",
        "A few seconds",
        "Third Party",
        "Owned by Zendesk to ensure all features and functionality are correctly added to the site.",
      ],
      [
        "JSESSIONID",
        "app.quotemedia.com",
        "Session",
        "Third Party",
        "Owned by QuoteMedia for real-time quotes, portfolio management, and analytics services.",
      ],
    ],
  },
  {
    id: "targeting",
    title: "6. Targeting Cookies",
    description:
      "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
    cookies: [
      [
        "cf_chl_2",
        "support.payintelli.com",
        "A few seconds",
        "First Party",
        "Used by advertising partners to build a profile of user interests and show relevant adverts.",
      ],
      [
        "vv_visitor_id",
        "www.payintelli.com",
        "1095 Days",
        "First Party",
        "Appends a unique identifier for a visitor, used for tracking purposes.",
      ],
      [
        "sp",
        "investors.payintelli.com",
        "364 Days",
        "First Party",
        "Associated with Eventbrite to deliver tailored content and assist event-booking purposes.",
      ],
      [
        "aws-waf-token",
        "investors.payintelli.com",
        "3 Days",
        "First Party",
        "Used to attribute commission to affiliates when users arrive from referral links.",
      ],
      [
        "_gat_xxxxxxxxxxxxxxxxxxxxxxxxxx",
        "payintelli.com",
        "A few seconds",
        "First Party",
        "Google Analytics cookie used to limit data collection on high traffic sites.",
      ],
      [
        "_gat_UA-XXXXXX-X",
        "payintelli.com",
        "A few seconds",
        "First Party",
        "Google Analytics cookie used for tracking.",
      ],
      [
        "_gat_gtag_xxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "payintelli.com",
        "A few seconds",
        "First Party",
        "Google Analytics cookie used for tracking.",
      ],
      [
        "_fbp",
        "payintelli.com",
        "89 Days",
        "First Party",
        "Used by Facebook to deliver advertisement products like real-time bidding.",
      ],
      [
        "pt_",
        "payintelli.com",
        "A few seconds",
        "First Party",
        "Used for tracking purposes (NA).",
      ],
      [
        "_gcl_au",
        "payintelli.com",
        "89 Days",
        "First Party",
        "Used by Google AdSense to experiment with ad efficiency across websites.",
      ],
      [
        "_uetsid",
        "payintelli.com",
        "A few seconds",
        "First Party",
        "Used by Bing to determine relevant ads for end users.",
      ],
      [
        "eupubconsent-v2",
        "payintelli.com",
        "364 Days",
        "First Party",
        "Stores IAB TCF v2 preferences and consent strings for advertising vendors.",
      ],
      [
        "__cfruid",
        "zendesk.com",
        "Session",
        "Third Party",
        "Used by Zendesk to track tickets, support issues, and advertising-related information.",
      ],
      [
        "__cf_bm",
        "zendesk.com",
        "A few seconds",
        "Third Party",
        "CloudFoundry cookie used by Zendesk.",
      ],
      [
        "_cfuvid",
        "zendesk.com",
        "Session",
        "Third Party",
        "Used by Zendesk for support and advertising purposes.",
      ],
      [
        "cc_ut",
        "appcast.io",
        "364 Days",
        "Third Party",
        "Used for advertising purposes (N/A).",
      ],
      [
        "__cf_bm",
        "hubspot.com",
        "A few seconds",
        "Third Party",
        "CloudFoundry cookie used by Hubspot for online marketing services.",
      ],
      [
        "_cfuvid",
        "hubspot.com",
        "Session",
        "Third Party",
        "Used by Hubspot to track visitors for marketing services.",
      ],
      [
        "MUID",
        "bing.com",
        "389 Days",
        "Third Party",
        "Owned by Microsoft Bing to identify users for advertising purposes.",
      ],
      [
        "MSPTC",
        "bing.com",
        "389 Days",
        "Third Party",
        "Owned by Microsoft Bing for advertising tracking.",
      ],
      [
        "IDE",
        "doubleclick.net",
        "389 Days",
        "Third Party",
        "Owned by Google Doubleclick for real-time bidding advertising exchange.",
      ],
      [
        "test_cookie",
        "doubleclick.net",
        "A few seconds",
        "Third Party",
        "Owned by Google Doubleclick for real-time bidding advertising exchange.",
      ],
      [
        "TESTCOOKIESENABLED",
        "www.youtube.com",
        "A few seconds",
        "Third Party",
        "YouTube cookie to display targeted advertising via embedded videos.",
      ],
      [
        "YSC",
        "youtube.com",
        "Session",
        "Third Party",
        "YouTube cookie for tracking embedded video activity for targeted ads.",
      ],
      [
        "VISITOR_INFO1_LIVE",
        "youtube.com",
        "179 Days",
        "Third Party",
        "Used as a unique identifier to track viewing of videos.",
      ],
      [
        "VISITOR_PRIVACY_METADATA",
        "youtube.com",
        "179 Days",
        "Third Party",
        "Tracks user data via embedded YouTube videos for targeted advertising.",
      ],
      [
        "__Secure-xxxxxxx",
        "youtube.com",
        "179 Days",
        "Third Party",
        "Tracks user data via embedded YouTube videos for targeted advertising.",
      ],
      [
        "NID",
        "google.com",
        "182 Days",
        "Third Party",
        "Used by Google to profile interests of users and serve relevant ads.",
      ],
      [
        "CONSENT",
        "google.com",
        "729 Days",
        "Third Party",
        "Stores user consent and preferences for advertising across Google services.",
      ],
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
                      {/* Increased min-w to 240 (60rem/960px) to give the new description column ample breathing space */}
                      <table className="w-full min-w-240 text-left text-sm table-fixed">
                        <thead className="bg-primary-soft/50 text-heading">
                          <tr>
                            <th className="w-1/5 px-4 py-3 font-semibold">
                              Cookie
                            </th>
                            <th className="w-1/5 px-4 py-3 font-semibold">
                              Cookie Subgroup
                            </th>
                            <th className="w-1/6 px-4 py-3 font-semibold">
                              Lifespan
                            </th>
                            <th className="w-1/6 px-4 py-3 font-semibold">
                              Type
                            </th>
                            <th className="w-4/12 px-4 py-3 font-semibold">
                              Description
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-border text-muted">
                          {group.cookies.map((cookie) => (
                            <tr key={`${group.id}-${cookie[0]}-${cookie[1]}`}>
                              <td className="px-4 py-3 font-medium text-heading break-all">
                                {cookie[0]}
                              </td>
                              <td className="px-4 py-3 break-all">
                                {cookie[1]}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                {cookie[2]}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                {cookie[3]}
                              </td>
                              <td className="px-4 py-3 text-xs leading-relaxed max-w-xs md:max-w-none">
                                {cookie[4]}
                              </td>
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
