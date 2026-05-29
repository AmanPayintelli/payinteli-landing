"use client";

import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import Separator from "@/components/seperator";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  ["definitions", "1. Definitions and Interpretation"],
  ["access", "2. Access to and Use"],
  ["obligations", "3. Merchant Obligations"],
  ["api-keys", "4. API Keys and Security"],
  ["fees", "5. Fees and Payment"],
  ["pci", "6. PCI DSS Compliance"],
  ["ip", "7. Intellectual Property"],
  ["feedback", "8. Feedback"],
  ["confidentiality", "9. Confidentiality"],
  ["data-protection", "10. Data Protection"],
  ["warranties", "11. Warranties"],
  ["liability", "12. Limitation of Liability"],
  ["indemnification", "13. Indemnification"],
  ["third-party", "14. Third-Party Services"],
  ["termination", "15. Term and Termination"],
  ["changes", "16. Changes"],
  ["notices", "17. Notices"],
  ["general", "18. General Provisions"],
];

const contents = [
  "1. Definitions and Interpretation",
  "2. Access to and Use of the Platform",
  "3. Your Obligations as a Merchant",
  "4. API Keys and Security",
  "5. Fees and Payment",
  "6. PCI DSS Compliance",
  "7. Intellectual Property",
  "8. Feedback",
  "9. Confidentiality",
  "10. Data Protection",
  "11. Warranties and Disclaimer",
  "12. Limitation of Liability",
  "13. Indemnification",
  "14. Third-Party Services and Integrations",
  "15. Term and Termination",
  "16. Changes to the Platform and These Terms",
  "17. Notices",
  "18. General Provisions",
];

const TermsOfService = () => {
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
                  Terms of Service
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
                PIRESEARCH LABS PVT. LTD.
              </p>

              <h1 className="text-heading text-4xl md:text-6xl">
                Terms of Service
              </h1>

              <p className="mt-5 text-muted">
                Version 1.0 · Effective: May 2026 · Last reviewed: May 2026
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
                These Terms of Service govern access to and use of the
                PayIntelli platform operated by PiResearch Labs Pvt. Ltd. They
                apply to all users including merchants, authorised
                representatives, and visitors to our website. By accessing or
                using the PayIntelli platform, you agree to be bound by these
                terms. If you are entering into a negotiated Master Services
                Agreement with us, these Terms of Service apply alongside and in
                addition to that agreement. In the event of any conflict, the
                Master Services Agreement shall prevail.
              </p>

              <div className="mt-8 space-y-1 text-sm leading-6 text-muted">
                <p>PayIntelli (Product of PiResearch Labs Pvt. Ltd.)</p>
                <p>
                  P.N.2, S.N.101/A, Hydershahkote, Golconda, Hyderabad – 500091,
                  Telangana, India
                </p>
                <p>General enquiries: legal@payintelli.com</p>
                <p>Security notices: security@payintelli.com</p>
              </div>
            </header>

            <div className="rounded-[2rem] border border-border bg-white px-6 py-10 shadow-[0_24px_100px_rgba(8,40,50,0.04)] md:px-10">
              <section className="border-b border-border pb-10">
                <h2 className="text-heading text-2xl">Contents</h2>

                <ol className="mt-5 grid gap-x-10 gap-y-2 text-sm leading-7 text-muted md:grid-cols-2">
                  {contents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>

              <PolicySection
                id="definitions"
                title="1. Definitions and Interpretation"
              >
                <p>
                  In these Terms of Service, the following terms have the
                  meanings set out below. Where these Terms of Service are read
                  alongside a Master Services Agreement, terms defined in that
                  agreement carry the same meaning here unless otherwise stated.
                </p>

                <p>
                  <strong>“Account”</strong> means a merchant account created on
                  the PayIntelli platform.
                </p>
                <p>
                  <strong>“API Key”</strong> means the authentication
                  credentials issued by PayIntelli to enable programmatic access
                  to the Platform.
                </p>
                <p>
                  <strong>“Authorised Users”</strong> means the employees,
                  contractors, or agents of a Merchant who are authorised to
                  access the Platform on the Merchant’s behalf.
                </p>
                <p>
                  <strong>“Documentation”</strong> means PayIntelli’s
                  then-current technical specifications, API reference guides,
                  integration documentation, and user manuals, available at
                  docs.payintelli.com or as otherwise provided.
                </p>
                <p>
                  <strong>“Fees”</strong> means the charges payable for access
                  to and use of the Platform as specified in the applicable
                  Order Form or pricing schedule.
                </p>
                <p>
                  <strong>“Merchant”</strong> means any business or individual
                  that registers for and uses the PayIntelli platform under
                  these Terms of Service or a Master Services Agreement.
                </p>
                <p>
                  <strong>“Order Form”</strong> means an order document executed
                  by both parties specifying the products subscribed to, fees,
                  and subscription term.
                </p>
                <p>
                  <strong>“Platform”</strong> means the PayIntelli
                  software-as-a-service platform and associated APIs, including
                  Pi Checkout, Pi Symphony, Pi Shield, Pi Recon, Pi Deepsearch
                  and any new products introduced in the future.
                </p>
                <p>
                  <strong>“Services”</strong> means the products and services
                  provided by PayIntelli through the Platform.
                </p>
                <p>
                  <strong>“Third-Party Services”</strong> means external payment
                  service providers, acquirers, card schemes, fraud tools, and
                  other third-party integrations accessible through or alongside
                  the Platform.
                </p>
              </PolicySection>

              <PolicySection
                id="access"
                title="2. Access to and Use of the Platform"
              >
                <h3>2.1 Licence</h3>
                <p>
                  Subject to your compliance with these Terms of Service and
                  payment of all applicable Fees, PiResearch Labs Pvt. Ltd.
                  grants you a non-exclusive, non-transferable,
                  non-sublicensable, revocable licence to access and use the
                  Platform for your internal business operations during the term
                  of your subscription. This licence is personal to you and may
                  not be transferred or assigned without our prior written
                  consent.
                </p>

                <h3>2.2 Account Registration</h3>
                <p>
                  To access the Platform, you must create an Account and
                  complete our KYB/KYC verification process. You must ensure
                  that all information provided during registration is accurate,
                  current, and complete, and that you update it promptly if it
                  changes. You are responsible for maintaining the
                  confidentiality of your Account credentials and for all
                  activities that occur under your Account.
                </p>

                <h3>2.3 Permitted Use</h3>
                <p>
                  You may only use the Platform to facilitate legitimate payment
                  transactions with your customers. You must use the Platform in
                  accordance with these Terms of Service, all applicable laws
                  and regulations, and the Documentation. You acknowledge that
                  you are solely responsible for the products and services you
                  sell to your customers and for all related obligations
                  including delivery, returns, refunds, and customer support.
                </p>

                <h3>2.4 Prohibited Use</h3>
                <p>You must not, and must not permit any third party to:</p>
                <ul>
                  <li>
                    copy, modify, duplicate, create derivative works from,
                    decompile, reverse engineer, or disassemble all or any part
                    of the Platform except as permitted by applicable law;
                  </li>
                  <li>
                    access the Platform to build a competing product or service;
                  </li>
                  <li>
                    license, sell, rent, lease, transfer, assign, or otherwise
                    make the Platform available to any third party except
                    Authorised Users;
                  </li>
                  <li>
                    introduce any malicious code, viruses, trojans, worms, or
                    other harmful programs into our systems or network;
                  </li>
                  <li>
                    use the Platform in a manner that could result in a
                    violation of anti-money laundering, counter-terrorism
                    financing, sanctions, or other financial crime regulations;
                  </li>
                  <li>
                    use the Platform to process transactions that are unlawful,
                    fraudulent, or in violation of card scheme rules; or
                  </li>
                  <li>
                    attempt to gain unauthorised access to any part of the
                    Platform or its related systems.
                  </li>
                </ul>

                <h3>2.5 Suspension for Breach</h3>
                <p>
                  We reserve the right to suspend or disable your access to the
                  Platform without liability if we reasonably believe you are in
                  breach of clause 2.4, or if your use of the Platform poses a
                  security risk to us or other users. We will notify you of any
                  suspension and the grounds for it as soon as practicable and
                  will restore access promptly upon resolution.
                </p>

                <h3>2.6 Aggregated Usage Data</h3>
                <p>
                  You acknowledge that your use of the Platform may generate
                  non-identifiable, aggregated usage information including
                  metrics and performance data. We may use such information to
                  develop and improve the Platform and our other services,
                  provided that no such information identifies you or your
                  customers individually.
                </p>
              </PolicySection>

              <PolicySection
                id="obligations"
                title="3. Your Obligations as a Merchant"
              >
                <h3>3.1 General Compliance</h3>
                <p>You shall:</p>
                <ul>
                  <li>
                    comply with all applicable laws and regulations in
                    connection with your use of the Platform, including
                    financial services regulations, anti-money laundering
                    requirements, data protection law, and applicable card
                    scheme rules;
                  </li>
                  <li>
                    ensure that your Authorised Users’ use of the Platform
                    complies with these Terms of Service, and you shall be
                    responsible for any breach by them;
                  </li>
                  <li>
                    obtain and maintain all licences, consents, and permits
                    necessary for your use of the Platform and the conduct of
                    your business;
                  </li>
                  <li>
                    implement appropriate technical and organisational security
                    measures for your own systems, website, and customer data;
                  </li>
                  <li>
                    ensure your network and systems meet the technical
                    requirements necessary to use the Platform as described in
                    the Documentation; and
                  </li>
                  <li>
                    Ensure that all end users are enrolled in and maintain
                    multi-factor authentication for access to the Platform
                    through an industry-recognised authenticator application.
                  </li>
                </ul>

                <h3>3.2 Incident Contact</h3>
                <p>
                  You shall designate at least one named incident contact person
                  who: (a) can be reached at any time in the event of a critical
                  incident affecting the Platform or your use of it; (b) holds
                  admin-level access to your PayIntelli account; and (c) has
                  authority to approve or implement changes required by our
                  support team on an urgent basis. You shall notify us promptly
                  of any change to your incident contact details by writing to
                  support@payintelli.com.
                </p>

                <h3>3.3 Platform Version Currency</h3>
                <p>
                  You acknowledge that maintaining current API and SDK
                  integrations is essential to the security and stability of
                  payment processing. You shall:
                </p>
                <ul>
                  <li>
                    promptly update to current API and SDK versions when
                    notified by us that an update is required for security or
                    compatibility reasons. We will provide reasonable advance
                    notice of required updates except where an update is
                    necessary to address an urgent security vulnerability, in
                    which case we may require immediate action;
                  </li>
                  <li>
                    implement workflow and integration fixes communicated by our
                    technical team as critical within a reasonable timeframe;
                    and
                  </li>
                  <li>
                    maintain monitoring of your integration and report any
                    identified issues to our support team.
                  </li>
                </ul>
                <p>
                  You acknowledge that failure to maintain current integrations
                  may impact the processing of your payments. We reserve the
                  right to decline connections from outdated API or SDK versions
                  where necessary to maintain the security and integrity of the
                  Platform.
                </p>

                <h3>3.4 Testing Obligations</h3>
                <p>
                  You are responsible for conducting thorough sandbox and
                  production testing to verify that the Platform operates as
                  intended for your specific use case before making the Platform
                  available to your end customers. Whilst we may assist with
                  reviewing integrations and workflows, we cannot guarantee that
                  all possible scenarios have been assessed. You are responsible
                  for identifying and reporting any issues to our support team
                  via the support portal.
                </p>

                <h3>3.5 Suspicious Transactions</h3>
                <p>
                  You are responsible for monitoring your transactions for
                  suspicious or fraudulent activity and for determining whether
                  any transaction is genuine. You accept all losses resulting
                  from suspicious, accidental, or fraudulent transactions
                  processed through your Account where such losses arise from
                  your failure to implement adequate controls on your side.
                </p>

                <h3>3.6 Sub-Merchants and Platform Use</h3>
                <p>
                  If you use the Platform on behalf of sub-merchants or other
                  third-party businesses (acting as a partner, payment
                  facilitator or platform), you must notify us in advance and
                  obtain our written consent. You shall ensure that all such
                  sub-merchants comply with these Terms of Service and all
                  applicable regulations as if they were party to these terms,
                  and you shall be responsible for their acts and omissions in
                  connection with the Platform.
                </p>
              </PolicySection>

              <PolicySection id="api-keys" title="4. API Keys and Security">
                <p>
                  API Keys are security credentials that provide access to the
                  PayIntelli Platform on your behalf. You are responsible for
                  all activity conducted using your API Keys. You must:
                </p>
                <ul>
                  <li>
                    store all API Keys securely and never expose them in
                    publicly accessible code repositories, client-side code, or
                    unencrypted environments;
                  </li>
                  <li>
                    share API Keys only with personnel who genuinely require
                    access to them for their role;
                  </li>
                  <li>
                    rotate API Keys promptly when any person who had access to
                    them leaves your organisation or changes role;
                  </li>
                  <li>
                    use separate API Keys for sandbox (development) and
                    production environments and never use production keys in
                    test environments; and
                  </li>
                  <li>
                    treat API Keys as Confidential Information and apply the
                    same degree of care to their protection as you would to your
                    most sensitive business credentials.
                  </li>
                </ul>
                <p>
                  You must notify us immediately, and in any event within
                  twenty-four (24) hours, if you know or suspect that any API
                  Key has been lost, disclosed to an unauthorized party, or
                  compromised. Notify us by contacting security@payintelli.com
                  and your designated account manager. Upon receiving such
                  notice, we will revoke the affected keys and issue
                  replacements as soon as practicable.
                </p>
                <p>
                  We will never ask you to share your API Keys with us via
                  email, chat, or any other channel. If you receive a request
                  purporting to be from PayIntelli asking for your API Key,
                  treat it as a security incident and notify us immediately at
                  security@payintelli.com.
                </p>
              </PolicySection>

              <PolicySection id="fees" title="5. Fees and Payment">
                <h3>5.1 Charges</h3>
                <p>
                  Fees are charged on a consumption-based model as set out in
                  the applicable Order Form or pricing schedule. All fees are
                  exclusive of applicable taxes including VAT, withholding tax,
                  and digital services tax, which shall be your responsibility.
                  You shall pay each correctly issued invoice within thirty (30)
                  days of the invoice date or as specified in the invoice.
                </p>

                <h3>5.2 Late Payment</h3>
                <p>
                  If any undisputed amount is not paid by the due date, interest
                  shall accrue at one and a half percent (1.5%) per month (or
                  the maximum rate permitted by applicable law, whichever is
                  lower), calculated from the due date until full payment is
                  received. We reserve the right to suspend your access to the
                  Platform upon fifteen (15) days’ written notice if material
                  overdue amounts remain unpaid, without prejudice to any other
                  rights or remedies available to us.
                </p>

                <h3>5.3 Disputed Invoices</h3>
                <p>
                  You must raise any invoice dispute in writing within ten (10)
                  business days of the invoice date, specifying the disputed
                  amount and the grounds for your dispute. We will work in good
                  faith to resolve disputes within fifteen (15) business days.
                  Undisputed portions of any invoice remain payable by the
                  original due date.
                </p>

                <h3>5.4 Price Changes</h3>
                <p>
                  We may adjust our standard pricing with sixty (60) days’
                  written notice. Pricing locked in an active Order Form will
                  not be increased during the then-current subscription term.
                </p>

                <h3>5.5 Minimum Commitments</h3>
                <p>
                  Where a minimum monthly or annual commitment is specified in
                  your Order Form, we will invoice you for the minimum
                  commitment in any period where your actual usage falls below
                  that commitment. Unused credits or allowances do not carry
                  forward unless expressly agreed in writing.
                </p>
              </PolicySection>

              <PolicySection id="pci" title="6. PCI DSS Compliance">
                <h3>6.1 PayIntelli’s PCI DSS Position</h3>
                <p>
                  PayIntelli integrates with a certified third-party card
                  tokenisation provider to ensure that raw card data — including
                  Primary Account Numbers (PANs) and CVV codes — never enters
                  PayIntelli’s infrastructure. All card data is intercepted and
                  tokenised by a third-party card tokenisation provider before
                  it reaches our systems. PayIntelli targets PCI DSS compliance
                  on this basis.
                </p>

                <h3>6.2 Your PCI DSS Obligations</h3>
                <p>
                  You agree to comply with all applicable PCI DSS requirements
                  applicable to your business as a merchant, including:
                </p>
                <ul>
                  <li>
                    implementing appropriate data security standards for any
                    cardholder data you store, process, or transmit outside of
                    the PayIntelli platform;
                  </li>
                  <li>
                    ensuring that any third-party payment processor you connect
                    to via the Platform is themselves PCI DSS certified and
                    responsible for the security of cardholder data they handle;
                    and
                  </li>
                  <li>
                    complying with all applicable laws and card scheme rules
                    regarding the confidentiality and use of cardholder
                    information.
                  </li>
                </ul>
                <p>
                  You acknowledge that your PCI DSS obligations are your own
                  responsibility and that our compliance status relates to
                  PayIntelli’s infrastructure only. We are not responsible for
                  your PCI DSS compliance level or for the compliance of any
                  third-party acquirers or processors you engage independently.
                </p>
              </PolicySection>

              <PolicySection id="ip" title="7. Intellectual Property">
                <h3>7.1 PayIntelli IP</h3>
                <p>
                  All right, title, and interest in and to the Platform,
                  including its underlying algorithms, source code, APIs,
                  documentation, trade secrets, and branding (including the
                  PayIntelli, Pi Checkout, Pi Symphony, Pi Shield, Pi Recon, and
                  Pi Deepsearch marks), remain exclusively with PiResearch Labs
                  Pvt. Ltd. or its licensors. PayIntelli’s intellectual property
                  expressly excludes any third-party software, APIs, models, or
                  tools licensed by us from third parties, which remain subject
                  to their respective third-party terms. Nothing in these Terms
                  of Service transfers any ownership of our intellectual
                  property to you.
                </p>

                <h3>7.2 Your Content and Data</h3>
                <p>
                  All data, transaction records, and content you submit to the
                  Platform (“Merchant Data”) remain your property. You grant us
                  a limited, non-exclusive licence to process Merchant Data
                  solely as necessary to provide the Services. We will not use
                  your Merchant Data for any other purpose without your consent,
                  except as required by law or as described in our Privacy
                  Policy.
                </p>

                <h3>7.3 Aggregated Data</h3>
                <p>
                  We may use aggregated, anonymised data derived from Platform
                  usage across our merchant base for benchmarking, product
                  improvement, and research. Such data will not identify you or
                  your customers individually.
                </p>
              </PolicySection>

              <PolicySection id="feedback" title="8. Feedback">
                <p>
                  If you provide us with suggestions, ideas, or feedback about
                  the Platform (“Feedback”), you grant us a perpetual,
                  irrevocable, royalty-free, worldwide licence to use,
                  reproduce, modify, and incorporate that Feedback into our
                  products and services for any purpose, without obligation or
                  compensation to you. You warrant that you have the right to
                  provide the Feedback and that it does not infringe any
                  third-party rights.
                </p>
              </PolicySection>

              <PolicySection id="confidentiality" title="9. Confidentiality">
                <h3>9.1 Obligations</h3>
                <p>
                  Each party agrees to hold the other’s confidential information
                  in strict confidence and not to disclose it to any third party
                  without the other’s prior written consent, except to
                  employees, contractors, or advisors who need to know it for
                  the purpose of these Terms of Service and who are bound by
                  equivalent confidentiality obligations. Each party shall use
                  the other’s Confidential Information only for the purposes of
                  performing its obligations or exercising its rights under
                  these Terms of Service.
                </p>

                <h3>9.2 Exceptions</h3>
                <p>
                  Confidentiality obligations do not apply to information that:
                  (a) is or becomes publicly available without breach of these
                  terms; (b) was already known to the receiving party before
                  disclosure; (c) is independently developed by the receiving
                  party without use of the Confidential Information; or (d) is
                  required to be disclosed by law or court order, provided the
                  receiving party gives prompt written notice before disclosing.
                </p>

                <h3>9.3 Survival</h3>
                <p>
                  Confidentiality obligations survive termination of these Terms
                  of Service for a period of five (5) years, except in respect
                  of trade secrets which shall be protected for as long as they
                  remain confidential.
                </p>
              </PolicySection>

              <PolicySection id="data-protection" title="10. Data Protection">
                <p>
                  Each party shall comply with all applicable data protection
                  laws including the EU General Data Protection Regulation (EU)
                  2016/679 (“GDPR”) and UK GDPR where applicable. Where we
                  process personal data on your behalf as a data processor, the
                  terms of our Data Processing Agreement (available as Schedule
                  D of our Master Services Agreement, or separately upon
                  request) shall govern such processing. You warrant that you
                  have a lawful basis for all personal data you instruct us to
                  process and that you have provided all required notices to
                  data subjects. Our Privacy Policy, available at
                  payintelli.com/privacy, sets out how we process personal data
                  in our capacity as a data controller.
                </p>
              </PolicySection>

              <PolicySection
                id="warranties"
                title="11. Warranties and Disclaimer"
              >
                <h3>11.1 PayIntelli Warranties</h3>
                <p>
                  We warrant that: (a) the Platform will perform materially in
                  accordance with the Documentation during your subscription;
                  (b) we hold all licences and authorisations required to
                  provide the Services; and (c) we will deliver the Services
                  with reasonable skill and care.
                </p>

                <h3>11.2 Disclaimer</h3>
                <p className="font-medium uppercase text-heading">
                  EXCEPT AS EXPRESSLY SET OUT IN CLAUSE 11.1, THE PLATFORM AND
                  ALL SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
                  WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW,
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
                  PLATFORM WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE FROM
                  VULNERABILITIES, OR THAT IT WILL MEET YOUR SPECIFIC
                  REQUIREMENTS.
                </p>
              </PolicySection>

              <PolicySection id="liability" title="12. Limitation of Liability">
                <h3>12.1 Uncapped Liabilities</h3>
                <p>
                  Nothing in these Terms of Service limits or excludes either
                  party’s liability for: (a) death or personal injury caused by
                  negligence; (b) fraud or fraudulent misrepresentation; (c) any
                  liability that cannot lawfully be excluded or limited; or (d)
                  your payment obligations for Fees properly due.
                </p>

                <h3>12.2 Exclusion of Indirect Loss</h3>
                <p>
                  Subject to clause 12.1, neither party shall be liable to the
                  other for any indirect, incidental, special, consequential,
                  punitive, or exemplary damages, including loss of profits,
                  loss of revenue, loss of data, loss of goodwill, or business
                  interruption, even if advised of the possibility of such
                  damages and regardless of the form of action.
                </p>

                <h3>12.3 Aggregate Cap</h3>
                <p>
                  Subject to clauses 12.1 and 12.2, our total aggregate
                  liability to you arising out of or in connection with these
                  Terms of Service in any three (3) month period shall not
                  exceed the greater of the total fees paid by you to us in that
                  three (3) month period.
                </p>

                <h3>12.4 Third-Party Acquirer Costs</h3>
                <p>
                  We shall have no liability whatsoever for costs, fees, or
                  charges levied by acquiring banks, card schemes, payment
                  processors, or other third-party financial infrastructure
                  providers. Such costs are passed through directly and are
                  solely between you and those third parties.
                </p>
              </PolicySection>

              <PolicySection id="indemnification" title="13. Indemnification">
                <p>
                  You shall defend, indemnify, and hold harmless PiResearch Labs
                  Pvt. Ltd. and its officers, directors, employees, and agents
                  from and against any claims, damages, losses, costs, and
                  expenses (including reasonable legal fees) arising from: (a)
                  your breach of these Terms of Service; (b) your violation of
                  applicable law; (c) your Merchant Data or your customers’ use
                  of your services; (d) any claim by your customers arising from
                  products or services you sell; or (e) your gross negligence or
                  wilful misconduct.
                </p>
                <p>
                  We shall indemnify you against any third-party claim that the
                  Platform, used in accordance with these Terms of Service,
                  infringes any third party’s intellectual property rights,
                  provided that you: (a) give us prompt written notice of the
                  claim; (b) give us sole authority to defend and settle the
                  claim; and (c) provide reasonable cooperation. This indemnity
                  does not apply where the alleged infringement results from
                  your modification of the Platform or use contrary to our
                  Documentation.
                </p>
              </PolicySection>

              <PolicySection
                id="third-party"
                title="14. Third-Party Services and Integrations"
              >
                <p>
                  The Platform enables you to connect with third-party payment
                  processors, acquirers and other external services that you
                  independently contract with (&quot;External Services&quot;).
                  You acknowledge and agree that:
                </p>
                <ul>
                  <li>
                    Providers of External Services are independent contractors
                    and not our sub-contractors or agents;
                  </li>
                  <li>
                    You must have a direct contract with any External Service
                    provider you connect to via the Platform, and your
                    relationship with them is governed by their own terms and
                    conditions;
                  </li>
                  <li>
                    We do not endorse, warrant, or accept any liability for
                    External Services or their providers; and
                  </li>
                  <li>
                    Your right to use External Services through the Platform is
                    conditional on your compliance with the applicable
                    third-party terms.
                  </li>
                </ul>
                <p>
                  For the avoidance of doubt, this clause applies only to
                  External Services that you connect to independently. It does
                  not apply to sub-processors engaged by PayIntelli, whose data
                  protection obligations are governed by the Data Processing
                  Agreement.
                </p>
              </PolicySection>

              <PolicySection id="termination" title="15. Term and Termination">
                <h3>15.1 Term</h3>
                <p>
                  These Terms of Service commence when you create an Account or
                  first access the Platform and continue until terminated in
                  accordance with this section. Where you have entered into an
                  Order Form, the subscription term is as specified therein and
                  shall renew automatically for successive twelve (12) month
                  periods unless either party gives written notice of
                  non-renewal at least sixty (60) days before the end of the
                  then-current term.
                </p>

                <h3>15.2 Termination for Convenience</h3>
                <p>
                  Either party may terminate these Terms of Service without
                  cause on ninety (90) days’ written notice. You remain liable
                  for all Fees accrued up to the effective termination date and
                  any applicable early termination charges specified in your
                  Order Form.
                </p>

                <h3>15.3 Termination for Cause</h3>
                <p>
                  Either party may terminate immediately on written notice if:
                  (a) the other party commits a material breach and fails to
                  remedy it within thirty (30) days of written notice specifying
                  the breach; (b) the other party becomes insolvent, enters
                  administration, liquidation, or insolvency proceedings or (c)
                  the other party engages in fraud, wilful misconduct, or
                  grossly negligent conduct.
                </p>
                <p>
                  We may also terminate or suspend immediately, without notice,
                  if we determine that your use of the Platform presents a
                  material fraud risk, security risk, or regulatory risk to us
                  or to other merchants on the Platform, or if we are required
                  to do so by a regulatory authority or applicable law.
                </p>

                <h3>15.4 Effects of Termination</h3>
                <p>
                  Upon termination: (a) all licences granted to you immediately
                  cease and you must stop using the Platform; (b) all
                  outstanding Fees become immediately due and payable; (c) we
                  will provide you with a data export of your Merchant Data
                  within thirty (30) days of a written request, after which we
                  will securely delete or anonymise your data subject to legal
                  retention obligations; and (d) each party will return or
                  destroy the other’s Confidential Information. Clauses 7, 9,
                  10, 12, 13, and 18 survive termination.
                </p>
              </PolicySection>

              <PolicySection
                id="changes"
                title="16. Changes to the Platform and These Terms"
              >
                <h3>16.1 Platform Changes</h3>
                <p>
                  We may add, remove, or modify features and functionality of
                  the Platform at any time. Where a change will result in a
                  material degradation of the Services, we will give you at
                  least thirty (30) days’ advance written notice. We may make
                  emergency changes without notice where required to address
                  urgent security vulnerabilities, and will notify you as soon
                  as practicable after doing so.
                </p>

                <h3>16.2 Changes to These Terms</h3>
                <p>
                  We may update these Terms of Service from time to time to
                  reflect changes in our services, applicable law, or regulatory
                  requirements. We will give you at least thirty (30) days’
                  advance written notice of any material changes by email and/or
                  by notification within the Platform. If you object to the
                  updated terms, you must notify us in writing within fourteen
                  (14) days of the notice, in which case we may terminate your
                  then-current subscription immediately or as mutually agreed.
                  Your continued use of the Platform after the effective date of
                  any update constitutes acceptance of the revised terms.
                </p>
              </PolicySection>

              <PolicySection id="notices" title="17. Notices">
                <p>
                  All formal notices under these Terms of Service must be in
                  writing and delivered by: (a) registered post with return
                  receipt to the addresses specified in your Order Form or
                  Account; (b) nationally recognised overnight courier; or (c)
                  email with confirmed delivery receipt. Notices to PayIntelli
                  must be directed to legal@payintelli.com. Notices are
                  effective upon confirmed receipt. For urgent security matters,
                  use security@payintelli.com.
                </p>
              </PolicySection>

              <PolicySection id="general" title="18. General Provisions">
                <h3>18.1 Entire Agreement</h3>
                <p>
                  These Terms of Service, together with any applicable Order
                  Form, Data Processing Agreement, and Master Services
                  Agreement, constitute the entire agreement between the parties
                  regarding the Platform and supersede all prior
                  representations, negotiations, and agreements. In the event of
                  any conflict, the Master Services Agreement shall prevail over
                  these Terms of Service.
                </p>

                <h3>18.2 Governing Law</h3>
                <p>
                  These Terms of Service and any dispute or claim arising out of
                  or in connection with them (including non-contractual
                  disputes) shall be governed by and construed in accordance
                  with the laws of the Republic of India. Any unresolved
                  disputes shall be subject to the exclusive jurisdiction of the
                  courts at Hyderabad, Telangana, India. Either party may seek
                  emergency injunctive relief in any court of competent
                  jurisdiction without first exhausting dispute resolution
                  procedures.
                </p>

                <h3>18.3 Assignment</h3>
                <p>
                  You may not assign or transfer any rights or obligations under
                  these Terms of Service without our prior written consent. We
                  may assign these Terms of Service without your consent in
                  connection with a merger, acquisition, or sale of all or
                  substantially all of our assets, provided we give you thirty
                  (30) days’ prior written notice.
                </p>

                <h3>18.4 Waiver</h3>
                <p>
                  No failure or delay in exercising any right under these Terms
                  of Service shall constitute a waiver of that right. A waiver
                  of any particular breach shall not constitute a waiver of any
                  subsequent breach.
                </p>

                <h3>18.5 Severability</h3>
                <p>
                  If any provision of these Terms of Service is held invalid or
                  unenforceable, the remaining provisions shall continue in full
                  force, and the invalid provision shall be modified to the
                  minimum extent necessary to make it enforceable.
                </p>

                <h3>18.6 Independent Contractor</h3>
                <p>
                  The parties are independent contractors. Nothing in these
                  Terms of Service creates an employment, agency, partnership,
                  or joint venture relationship between the parties.
                </p>

                <h3>18.7 Force Majeure</h3>
                <p>
                  Neither party shall be liable for any failure or delay in
                  performance caused by a Force Majeure Event — being any event
                  beyond the reasonable control of the affected party, including
                  acts of God, natural disasters, pandemic, government action,
                  war, terrorism, civil unrest, prolonged infrastructure
                  failure, or regulatory action. The affected party shall notify
                  the other promptly and use commercially reasonable efforts to
                  mitigate the impact and resume performance. If a Force Majeure
                  Event continues for more than sixty (60) days, either party
                  may terminate on thirty (30) days’ written notice.
                </p>

                <h3>18.8 No Third-Party Rights</h3>
                <p>
                  These Terms of Service are for the sole benefit of the parties
                  and their permitted successors and assigns. Nothing herein
                  confers any rights or remedies on any third party.
                </p>

                <h3>18.9 Publicity</h3>
                <p>
                  We may refer to you as a PayIntelli customer for general
                  business development and marketing purposes. Any use of your
                  brand name or logo requires your prior written consent. You
                  may request that we do not reference you as a customer by
                  notifying us in writing at legal@payintelli.com within thirty
                  (30) days of your Account creation.
                </p>

                <h3>18.10 Counterparts and Electronic Signatures</h3>
                <p>
                  These Terms of Service and any associated documents may be
                  executed electronically via DocuSign or equivalent platforms.
                  Electronic signatures are deemed valid and binding to the same
                  extent as original wet-ink signatures.
                </p>

                <h3>18.11 Compliance with Laws</h3>
                <p>
                  Each party shall comply with all applicable laws in connection
                  with these Terms of Service, including anti-bribery and
                  anti-corruption legislation including the Prevention of
                  Corruption Act 1988 (India), the UK Bribery Act 2010, and the
                  US Foreign Corrupt Practices Act where applicable, anti-money
                  laundering laws, and applicable trade sanctions regulations.
                </p>

                <div className="mt-10 rounded-2xl border border-border bg-primary-soft/35 p-6 text-sm leading-7 text-muted">
                  <p>— End of Terms of Service —</p>
                  <p>
                    PiResearch Labs Pvt. Ltd. | legal@payintelli.com |
                    security@payintelli.com
                  </p>
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

      <div className="mt-6 space-y-5 text-sm leading-7 text-muted md:text-base [&_h3]:pt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-heading [&_strong]:font-semibold [&_strong]:text-heading [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
};

export default TermsOfService;
