"use client";

import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import Separator from "@/components/seperator";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  ["who-we-are", "1. Who We Are"],
  ["applies-to", "2. Who This Applies To"],
  ["data-collect", "3. What Data We Collect"],
  ["automated", "4. Automated Decision-Making"],
  ["sharing", "5. Who We Share With"],
  ["transfers", "6. International Transfers"],
  ["retention", "7. Data Retention"],
  ["rights", "8. GDPR Rights"],
  ["cookies", "9. Cookies"],
  ["ml", "10. Machine Learning"],
  ["changes", "11. Changes"],
  ["complaint", "12. Complaint"],
];

const PrivacyPolicy = () => {
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
                  Privacy Policy
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
                PI RESEARCH LABS PVT. LTD.
              </p>
              <h1 className="text-heading text-4xl md:text-6xl">
                PayIntelli Privacy Policy
              </h1>
              <p className="mt-5 text-muted">
                Version 1.0 · Effective: May 2026 · Last reviewed: May 2026
              </p>
              <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
                This Privacy Policy explains how PayIntelli, developed and
                operated by PiResearch Labs Pvt. Ltd. collects, uses, stores,
                and shares personal data when you use our SaaS platform. It
                applies to merchants, authorised representatives, and individual
                users who access our services.
              </p>
              <div className="mt-8 space-y-1 text-sm leading-6 text-muted">
                <p>PayIntelli (Product of PiResearch Labs)</p>
                <p>
                  P.N.2, S.N.101/A, Hydershahkote, Golconda, Hyderabad – 500091,
                  Telangana, India
                </p>
                <p>Privacy enquiries: legal@payintelli.com</p>
                <p>Data subject rights: legal@payintelli.com</p>
                <p>Data / security matters: security@payintelli.com</p>
              </div>
            </header>

            <div className="rounded-[2rem] border border-border bg-white px-6 py-10 shadow-[0_24px_100px_rgba(8,40,50,0.04)] md:px-10">
              <PolicySection
                id="who-we-are"
                title="1. Who We Are and How to Contact Us"
              >
                <p>
                  PiResearch Labs Pvt. Ltd. (“we”, “us”, or “PayIntelli”) is a
                  payment orchestration and intelligence company incorporated in
                  India (CIN: U46512TS2025PTC201529), with its registered
                  address at Hyderabad, Telangana, India.
                </p>
                <p>
                  We operate the PayIntelli payment orchestration and
                  intelligence platform , which enables businesses (merchants)
                  to accept and process online payments from their customers. In
                  doing so, we act as a data processor on behalf of our merchant
                  clients and, in some circumstances, as a data controller in
                  our own right for data we collect directly.
                </p>
                <p>
                  If you have any questions about this Privacy Policy or how we
                  handle your personal data and for data subject rights requests
                  please contact us at legal@payintelli.com. For security or
                  data breach concerns, contact security@payintelli.com.
                </p>
                <p>
                  Data protection queries are also handled by our Security and
                  Compliance team. You can reach us at legal@payintelli.com or
                  security@payintelli.com depending on the nature of your
                  enquiry
                </p>
              </PolicySection>

              <PolicySection
                id="applies-to"
                title="2. Who This Policy Applies To"
              >
                <p>
                  This Privacy Policy applies to the following groups of people:
                </p>
                <ul>
                  <li>
                    Merchants and business customers who register for and use
                    the PayIntelli platform under a Master Services Agreement.
                  </li>
                  <li>
                    Authorised representatives and employees of merchant
                    businesses who access our platform on their employer’s
                    behalf.
                  </li>
                  <li>
                    Individual sole traders and freelancers who use our services
                    directly.
                  </li>
                  <li>
                    Visitors to our website and anyone who contacts us directly.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection
                id="data-collect"
                title="3. What Data We Collect and Why"
              >
                <p>
                  We collect and process personal data across the following
                  activities. For each, we explain what we collect, why we
                  collect it, and the legal basis under which we do so.
                </p>

                <h3>3.1 Merchant Onboarding and Account Management</h3>
                <p>
                  When a business registers to use PayIntelli, we collect the
                  following information to create and manage their account,
                  verify their identity for anti-money laundering (AML) and
                  know-your-customer (KYC) purposes, and maintain the customer
                  relationship.
                </p>

                <Table
                  headers={["DATA COLLECTED", "PURPOSE", "LEGAL BASIS"]}
                  rows={[
                    [
                      "Full name, email address, phone number",
                      "Account creation and communications",
                      "Contract (Art. 6(1)(b))",
                    ],
                    [
                      "Business address",
                      "Account verification and invoicing",
                      "Contract (Art. 6(1)(b))",
                    ],
                    [
                      "Passport scans, national ID cards",
                      "AML/KYC identity verification",
                      "Legal obligation (Art. 6(1)(c))",
                    ],
                    [
                      "Proof of address (utility bills)",
                      "AML/KYC address verification",
                      "Legal obligation (Art. 6(1)(c))",
                    ],
                    [
                      "Business registration documents",
                      "KYB verification for corporate accounts",
                      "Legal obligation (Art. 6(1)(c))",
                    ],
                    [
                      "Customer support notes",
                      "Account management and dispute resolution",
                      "Legitimate interest (Art. 6(1)(f))",
                    ],
                  ]}
                />

                <p>
                  Identity documents (passports, national IDs, proof of address)
                  are stored securely in encrypted storage and retained for
                  seven (7) years following account closure, as required by
                  applicable AML and counter-terrorism financing regulations.
                  Standard account data is retained for three (3) years after
                  account closure for contractual dispute resolution purposes,
                  after which it is securely deleted.
                </p>
                <p>
                  We do not perform biometric analysis, facial recognition, or
                  automated biometric matching on identity documents. Documents
                  are processed for identity verification purposes only.
                </p>

                <h3>3.2 Payment Transaction Processing</h3>
                <p>
                  When a payment is processed through the PayIntelli platform,
                  we handle payment metadata on behalf of our merchant clients.
                  We do not store full card numbers (PANs), CVV codes, or CVC
                  verification results. All sensitive card data is handled by a
                  certified third-party card tokenisation provider, which
                  tokenises card data before it reaches our systems.
                </p>

                <Table
                  headers={[
                    "DATA COLLECTED",
                    "PURPOSE",
                    "LEGAL BASIS",
                    "RETENTION",
                  ]}
                  rows={[
                    [
                      "Cardholder name, card brand, BIN (first 6 digits), last 4 digits, expiry date",
                      "Transaction processing and identification",
                      "Contract (Art. 6(1)(b))",
                      "7 years",
                    ],
                    [
                      "PSP Token",
                      "Payment reference without storing card data",
                      "Contract (Art. 6(1)(b))",
                      "7 years",
                    ],
                    [
                      "Transaction amount, currency, payment method",
                      "Financial records and settlement",
                      "Contract + Legal obligation",
                      "7 years",
                    ],
                    [
                      "Fraud score, fraud engine decision",
                      "Fraud detection and prevention",
                      "Legitimate interest (Art. 6(1)(f))",
                      "7 years",
                    ],
                    [
                      "Authorisation codes, decline codes, ARN",
                      "Dispute resolution and reconciliation",
                      "Contract (Art. 6(1)(b))",
                      "7 years",
                    ],
                    [
                      "3DS data, SCA/PSD2 exemption data",
                      "Strong Customer Authentication compliance",
                      "Legal obligation (PSD2)",
                      "7 years",
                    ],
                    [
                      "Customer IP address",
                      "Fraud prevention",
                      "Legitimate interest (Art. 6(1)(f))",
                      "90 days, then anonymised",
                    ],
                    [
                      "User agent / device information",
                      "Fraud prevention",
                      "Legitimate interest (Art. 6(1)(f))",
                      "90 days, then anonymised",
                    ],
                    [
                      "Device fingerprint (hashed)",
                      "Repeat fraud detection",
                      "Legitimate interest (Art. 6(1)(f))",
                      "7 years",
                    ],
                    [
                      "FX rate snapshot, processing fee, interchange details",
                      "Financial audit and settlement",
                      "Contract + Legal obligation",
                      "7 years",
                    ],
                  ]}
                />

                <p>
                  We do not store CVV codes, CVC verification results, or full
                  card numbers at any point. Our architecture is designed so
                  that raw card data never enters our systems. IP addresses and
                  user agent strings are automatically anonymised after 90 days
                  via an automated process that replaces them with ‘0.0.0.0’ and
                  ‘ANONYMIZED’ respectively.
                </p>

                <h3>3.3 Fraud Detection and Risk Management</h3>
                <p>
                  We operate an automated fraud detection system (Pi Shield)
                  that analyses transaction data in real time to identify and
                  prevent fraudulent activity. This is described in more detail
                  in Section 4 below, as it involves automated decision-making.
                </p>
                <p>
                  The data used for fraud detection includes customer IP
                  addresses, device fingerprints, transaction patterns, amounts,
                  frequency, and merchant history. We have conducted a
                  Legitimate Interest Assessment (LIA) confirming that fraud
                  detection is a necessary and proportionate processing activity
                  that is expected by both merchants and their customers. Fraud
                  data is retained for seven (7) years for model improvement and
                  regulatory inquiry purposes.
                </p>

                <h3>3.4 Marketing and Communications</h3>
                <p>We send two types of communications:</p>
                <ul>
                  <li>
                    Transactional emails — service updates, payment receipts,
                    and account notifications. These are sent on the basis of
                    contract performance and legitimate interest and do not
                    require separate consent.
                  </li>
                  <li>
                    Marketing emails — product announcements and promotional
                    communications. These are sent only to individuals who have
                    given explicit consent (opt-in). You can withdraw consent at
                    any time by clicking the unsubscribe link in any marketing
                    email.
                  </li>
                </ul>
                <p>
                  We implement double opt-in for marketing emails and maintain a
                  suppression list to ensure we never contact individuals who
                  have unsubscribed. Consent records are retained indefinitely
                  to demonstrate compliance. Suppression list records are
                  retained indefinitely to honour opt-out requests.
                </p>

                <h3>3.5 Website and Platform Usage</h3>
                <p>
                  When you visit our website or use our platform, we may collect
                  certain technical and usage information automatically. This
                  data is used to maintain the security, availability, and
                  performance of our services and is processed on the basis of
                  our legitimate interest in operating a reliable and secure
                  platform. For further information about our use of cookies and
                  similar tracking technologies, please see Section 9
                </p>
              </PolicySection>

              <PolicySection
                id="automated"
                title="4. Automated Decision-Making and Fraud Scoring"
              >
                <p>
                  Our fraud detection system (Pi Shield) makes automated
                  decisions about payment transactions without human review in
                  certain circumstances. We are required to inform you of this
                  under GDPR Article 22.
                </p>
                <h3>How Our Fraud Scoring Works</h3>
                <p>
                  Every transaction processed through PayIntelli is assigned a
                  fraud risk score by our machine learning model, which is
                  trained on historical transaction patterns.
                </p>
                <h3>Your Rights Regarding Automated Decisions</h3>
                <p>
                  If a transaction is blocked by our automated fraud system and
                  you believe this was in error, you have the right to:
                </p>
                <ul>
                  <li>
                    Request that the decision is reviewed by a member of our
                    fraud team (human intervention).
                  </li>
                  <li>Express your point of view regarding the decision.</li>
                  <li>
                    Request an explanation of the general factors that
                    contributed to the decision (we provide general factors but
                    do not disclose the full model, as this would undermine
                    fraud prevention effectiveness).
                  </li>
                  <li>
                    Contest the decision if you believe it was made in error.
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact your merchant (the
                  business you were transacting with) in the first instance, as
                  they are the data controller responsible for your transaction.
                  Alternatively, you may contact us directly at
                  legal@payintelli.com.
                </p>
                <p>
                  Our fraud models do not use special category data (such as
                  race, religion, or health data) and are subject to quarterly
                  bias testing to prevent discriminatory outcomes.
                </p>
              </PolicySection>

              <PolicySection
                id="sharing"
                title="5. Who We Share Your Data With"
              >
                <p>
                  We do not sell personal data. We share data only where
                  necessary to deliver our services or as required by applicable
                  law.
                </p>
                <p>
                  Recipients of personal data include providers of cloud
                  infrastructure and hosting services; certified payment
                  security and card tokenisation services; AI-powered analytics
                  and processing services; card schemes and acquiring banks for
                  the purposes of transaction processing and dispute resolution;
                  and regulatory, law enforcement, or supervisory authorities
                  where disclosure is required by law.
                </p>
                <p>
                  All third-party service providers with whom we share personal
                  data are bound by data processing agreements imposing data
                  protection obligations no less stringent than those we accept
                  under our own client agreements. A full list of our
                  sub-processors is available upon request at
                  legal@payintelli.com.
                </p>
              </PolicySection>

              <PolicySection
                id="transfers"
                title="6. International Data Transfers"
              >
                <p>
                  Our primary production infrastructure is hosted within the
                  European Economic Area. Where personal data is processed by
                  service providers located outside the EEA, we rely on
                  appropriate transfer mechanisms as recognised under GDPR
                  Chapter V, including adequacy decisions and Standard
                  Contractual Clauses where applicable. You may request further
                  information about our international transfer arrangements by
                  contacting legal@payintelli.com.
                </p>
              </PolicySection>

              <PolicySection
                id="retention"
                title="7. How Long We Keep Your Data"
              >
                <p>
                  We retain personal data only for as long as necessary to
                  fulfil the purposes for which it was collected, or as required
                  by applicable law. Retention periods vary depending on the
                  category of data and the legal basis for processing like
                  financial and transaction records are generally retained for
                  seven years in accordance with applicable tax and financial
                  regulations, while standard account data is retained for a
                  shorter period following account closure. Where legal
                  retention obligations prevent full deletion, we pseudonymise
                  data so that it can no longer be attributed to an identifiable
                  individual. Our full Data Retention Policy is available upon
                  request at legal@payintelli.com.
                </p>
              </PolicySection>

              <PolicySection id="rights" title="8. Your Rights Under GDPR">
                <p>
                  If you are located in the European Economic Area or the United
                  Kingdom, you have the following rights regarding your personal
                  data. We will respond to all requests within thirty (30) days.
                  For complex requests, we may extend this to sixty (60) days,
                  in which case we will notify you.
                </p>
                <p>
                  To exercise any of these rights, please contact
                  legal@payintelli.com. We may ask you to verify your identity
                  before processing your request.
                </p>

                <h3>Right of Access (Article 15)</h3>
                <p>
                  You have the right to request a copy of the personal data we
                  hold about you and information about how we use it. We will
                  provide this in JSON format via a secure portal within 30
                  days. The scope of your access request covers account data,
                  address data, tokenised payment instrument data, transaction
                  records, and dispute records.
                </p>

                <h3>Right to Rectification (Article 16)</h3>
                <p>
                  You have the right to ask us to correct inaccurate personal
                  data. You can update your name, email address, phone number,
                  and address directly in your account settings or by contacting
                  us. Financial records (transaction data) are immutable for
                  audit integrity and cannot be amended, but we can add a note
                  to clarify any inaccuracy.
                </p>

                <h3>Right to Erasure (Article 17)</h3>
                <p>
                  You have the right to request deletion of your personal data.
                  We will assess your request against our legal retention
                  obligations. Where no legal obligation requires us to retain
                  data, we will delete it from our systems. Where financial
                  record-keeping or AML obligations apply, we will pseudonymise
                  your data — replacing identifying information with anonymous
                  identifiers — and delete your KYC documents upon expiry of the
                  mandatory retention period.
                </p>
                <p>
                  Please note that machine learning models trained on historical
                  data cannot be “un-trained” after a deletion request. However,
                  because we pseudonymise data before model training, your
                  personal data cannot be re-identified from any trained model.
                </p>

                <h3>Right to Data Portability (Article 20)</h3>
                <p>
                  You have the right to receive personal data you have provided
                  to us in a structured, machine-readable format (JSON or CSV),
                  and to transmit that data to another service. This right
                  applies to data you have directly provided — such as your
                  name, email, and address — but not to data we have derived or
                  generated (such as fraud scores).
                </p>

                <h3>Right to Object (Article 21)</h3>
                <p>
                  You have the right to object to processing carried out on the
                  basis of legitimate interest, including our fraud detection
                  processing. We will assess your objection and determine
                  whether our legitimate interest overrides your rights. You may
                  also object to receiving marketing communications at any time
                  by clicking the unsubscribe link in any email.
                </p>

                <h3>Right to Restrict Processing (Article 18)</h3>
                <p>
                  You have the right to request that we restrict processing of
                  your personal data in certain circumstances — for example,
                  while a dispute about accuracy is being resolved. Where
                  processing is restricted, we will store your data but not
                  actively use it.
                </p>

                <h3>
                  Right Not to Be Subject to Automated Decisions (Article 22)
                </h3>
                <p>
                  You have the right to request human review of any decision
                  made solely by automated means that significantly affects you
                  — including our fraud scoring system. See Section 4 for
                  further details on how to exercise this right.
                </p>
              </PolicySection>

              <PolicySection id="cookies" title="9. Cookies and Tracking">
                <p>
                  Our platform and website use cookies and similar tracking
                  technologies to ensure the security and functionality of our
                  services. We use the following categories of cookies:
                </p>

                <Table
                  headers={["CATEGORY", "PURPOSE", "CONSENT REQUIRED?"]}
                  rows={[
                    [
                      "Strictly necessary",
                      "Session management, security, authentication, fraud prevention signals",
                      "No — essential for the service to function",
                    ],
                    [
                      "Functional",
                      "Remembering your preferences and settings",
                      "Yes",
                    ],
                    [
                      "Analytics",
                      "Understanding how the platform is used to improve our service",
                      "Yes",
                    ],
                    [
                      "Marketing",
                      "Promotional tracking (where applicable)",
                      "Yes",
                    ],
                  ]}
                />

                <p>
                  You can manage your cookie preferences through our cookie
                  consent tool, which is presented when you first visit our
                  website. You may withdraw consent for non-essential cookies at
                  any time through your browser settings or by contacting us.
                  Withdrawing consent will not affect the lawfulness of
                  processing carried out before withdrawal.
                </p>
              </PolicySection>

              <PolicySection
                id="ml"
                title="10. Machine Learning and Model Training"
              >
                <p>
                  We train and improve our fraud detection models using
                  historical transaction data. Before any data is used for model
                  training, it is pseudonymised — user identifiers are replaced
                  with randomly generated tokens so that the training data
                  cannot be attributed to identifiable individuals.
                </p>
                <p>
                  Our models are trained exclusively on internal pseudonymised
                  data. Training data is stored in a separate, access-controlled
                  storage distinct from our production systems.
                </p>
                <p>
                  We maintain version logs of all model training runs so that we
                  can identify which data versions were used to train each
                  model. Our models do not use special category data (such as
                  race, religion, or health information) and are subject to
                  quarterly bias testing.
                </p>
                <p>
                  Training datasets are retained for three (3) years for model
                  reproducibility purposes. Trained model files are retained for
                  five (5) years as part of our regulatory audit trail.
                </p>
              </PolicySection>

              <PolicySection id="changes" title="11. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our processing activities, applicable law, or
                  regulatory guidance. When we make material changes, we will
                  notify you by email (where we hold your email address) and by
                  posting an updated version on our website with a revised
                  effective date. We encourage you to review this policy
                  periodically.
                </p>
                <p>
                  Continued use of our services after a policy update
                  constitutes acceptance of the revised terms, to the extent
                  permitted by applicable law.
                </p>
              </PolicySection>

              <PolicySection id="complaint" title="12. How to Make a Complaint">
                <p>
                  If you have a concern about how we handle your personal data
                  and are not satisfied with our response, you have the right to
                  lodge a complaint with the relevant supervisory authority.
                </p>
                <p>
                  As PiResearch Labs Pvt. Ltd. is incorporated in India, our
                  primary regulatory contact for data protection matters is the
                  emerging framework under India’s Digital Personal Data
                  Protection Act 2023. For EU and EEA data subjects, the
                  relevant supervisory authority is the data protection
                  authority in your country of residence. For UK data subjects,
                  the relevant authority is the Information Commissioner’s
                  Office (ICO).
                </p>

                <Table
                  headers={["JURISDICTION", "SUPERVISORY AUTHORITY", "CONTACT"]}
                  rows={[
                    [
                      "Netherlands",
                      "Autoriteit Persoonsgegevens (AP)",
                      "autoriteitpersoonsgegevens.nl",
                    ],
                    [
                      "United Kingdom",
                      "Information Commissioner’s Office (ICO)",
                      "ico.org.uk",
                    ],
                    [
                      "Ireland",
                      "Data Protection Commission (DPC)",
                      "dataprotection.ie",
                    ],
                    [
                      "Germany",
                      "Bundesdatenschutzbeauftragter (BfDI)",
                      "bfdi.bund.de",
                    ],
                    [
                      "Other EU member states",
                      "Your national data protection authority",
                      "edpb.europa.eu/about-edpb/about-edpb/members",
                    ],
                  ]}
                />

                <p>
                  We encourage you to contact us first at legal@payintelli.com
                  before escalating to a supervisory authority. We are committed
                  to resolving any concerns promptly and transparently.
                </p>

                <div className="mt-10 rounded-2xl border border-border bg-primary-soft/35 p-6 text-sm leading-7 text-muted">
                  <p>— End of Privacy Policy —</p>
                  <p>PiResearch Labs Pvt. Ltd. | legal@payintelli.com</p>
                  <p>
                    Version 1.0 · © 2026 PiResearch Labs Pvt. Ltd. All rights
                    reserved.
                  </p>
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
      <div className="mt-6 space-y-5 text-sm leading-7 text-muted md:text-base [&_h3]:pt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-heading [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
};

const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-primary-soft/60 text-heading">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-border px-4 py-4 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="odd:bg-white even:bg-primary-soft/15"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className="border-b border-border px-4 py-4 align-top text-muted last:border-r-0"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
