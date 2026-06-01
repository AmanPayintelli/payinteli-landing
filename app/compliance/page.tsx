"use client";

import Link from "next/link";
import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import Separator from "@/components/seperator";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  ["overview", "1. Overview"],
  ["gdpr", "2. GDPR"],
  ["pci", "3. PCI DSS"],
  ["iso", "4. ISO 27001"],
  ["psd2", "5. PSD2"],
  ["security", "6. Security Practices"],
  ["contact", "7. Contact"],
];

const Compliance = () => {
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
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                <span className="text-border">/</span>
                <span className="font-medium text-foreground">
                  Security & Compliance
                </span>
              </nav>
            </div>
          </Container>
        </Separator>
      </div>

      <Container className="border-x border-border bg-background">
        <main className="grid gap-12 px-4 py-16 md:grid-cols-[1fr_280px] md:px-8 md:py-4">
          <article className="max-w-4xl">
            <header className="mb-10 rounded-[2rem] border border-border bg-primary-soft/40 p-8 md:p-10">
              <p className="mb-4 text-sm font-medium text-primary">
                PAYINTELLI SECURITY
              </p>

              <h1 className="text-heading text-4xl md:text-6xl">
                Security & Compliance at PayIntelli
              </h1>

              <p className="mt-5 text-muted">
                Last updated: September 30, 2025
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
                Your trust is our top priority. At PayIntelli, we are deeply
                committed to protecting your data, respecting your privacy, and
                maintaining the highest standards of security. This page
                explains our commitment to key industry standards and our
                practices for keeping your information safe.
              </p>
            </header>

            <div className="rounded-[2rem] border border-border bg-white px-6 py-10 shadow-[0_24px_100px_rgba(8,40,50,0.04)] md:px-10">
              <PolicySection id="overview" title="1. Our Commitment">
                <p>
                  PayIntelli is built with security, privacy, and compliance at
                  its core. We follow industry-recognised standards to help
                  protect merchant data, transaction information, and customer
                  privacy across our platform.
                </p>
                <p>
                  Our approach combines secure infrastructure, privacy-first
                  product development, strong access controls, encryption, and
                  continuous monitoring.
                </p>
              </PolicySection>

              <PolicySection
                id="gdpr"
                title="2. General Data Protection Regulation (GDPR)"
              >
                <p>
                  The GDPR is a comprehensive data privacy law in the European
                  Union that governs the use and protection of the personal data
                  of EU residents.
                </p>

                <h3>Our Commitment to GDPR</h3>

                <ul>
                  <li>
                    <strong>Lawful Processing:</strong> We only process your
                    personal data when we have a lawful basis.
                  </li>
                  <li>
                    <strong>Data Minimization:</strong> We only collect and
                    process personal data that is necessary.
                  </li>
                  <li>
                    <strong>Your Data Rights:</strong> This includes access,
                    rectification, erasure, and portability.
                  </li>
                  <li>
                    <strong>Data Processing Agreements:</strong> We include
                    Standard Contractual Clauses for lawful data transfers.
                  </li>
                  <li>
                    <strong>Security by Design:</strong> Privacy is built into
                    our product development.
                  </li>
                </ul>

                <p>
                  For a complete overview, please review our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </PolicySection>

              <PolicySection
                id="pci"
                title="3. Payment Card Industry Data Security Standard (PCI DSS)"
              >
                <p>
                  PCI DSS is a global information security standard created to
                  prevent credit card fraud and protect cardholder data.
                </p>

                <h3>Our Compliance: SAQ-A Validation</h3>

                <p>
                  PayIntelli has achieved PCI DSS compliance under
                  Self-Assessment Questionnaire A (SAQ-A).
                </p>

                <ul>
                  <li>We never see your full card details.</li>
                  <li>
                    Card data is transmitted directly and securely through
                    trusted payment partners such as Stripe and Adyen.
                  </li>
                  <li>
                    Tokenization ensures card numbers cannot be reconstructed
                    from stored payment references.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection id="iso" title="4. ISO 27001">
                <p>
                  Our infrastructure partners and internal practices align with
                  ISO 27001, the international standard for information security
                  management systems.
                </p>
                <p>
                  This ensures our security controls are continuously monitored,
                  improved, and independently audited.
                </p>
              </PolicySection>

              <PolicySection id="psd2" title="5. PSD2">
                <p>
                  As part of the revised EU Payment Services Directive,
                  PayIntelli adopts strong customer authentication practices and
                  ensures payment transactions are secured with multi-factor
                  authentication where required.
                </p>
              </PolicySection>

              <PolicySection
                id="security"
                title="6. Our General Security Practices"
              >
                <ul>
                  <li>Encryption in transit using TLS.</li>
                  <li>Encryption at rest using AES-256.</li>
                  <li>
                    Secure cloud infrastructure with SOC 2 and ISO 27001
                    certified providers.
                  </li>
                  <li>Principle of least privilege access controls.</li>
                  <li>
                    Continuous monitoring for vulnerabilities, threats, and
                    suspicious activity.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection id="contact" title="7. Questions or Concerns">
                <p>
                  If you have any questions or concerns about PayIntelli’s
                  security and compliance practices, contact us at{" "}
                  <a
                    href="mailto:security@payintelli.com"
                    className="font-medium text-primary hover:underline"
                  >
                    security@payintelli.com
                  </a>
                  .
                </p>

                <p>
                  For more details, please review our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-of-service"
                    className="font-medium text-primary hover:underline"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>

                <div className="mt-10 rounded-2xl border border-border bg-primary-soft/35 p-6 text-sm leading-7 text-muted">
                  <p>— End of Security & Compliance —</p>
                  <p>PayIntelli | security@payintelli.com</p>
                  <p>Last updated: September 30, 2025</p>
                </div>
              </PolicySection>
            </div>
          </article>

          <aside className="relative hidden md:block">
            <div className="sticky top-24 rounded-[1.5rem] border border-border bg-white p-5 shadow-[0_20px_80px_rgba(8,40,50,0.04)]">
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

      <div className="mt-6 space-y-5 text-sm leading-7 text-muted md:text-base [&_h3]:pt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-heading [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:text-heading">
        {children}
      </div>
    </section>
  );
};

export default Compliance;
