import Image from "next/image";

import Container from "./container";

const securityItems = [
  {
    title: "GDPR",
    image: "/gdpr.svg",
  },
  {
    title: "CCPA",
    image: "/ccpa.svg",
  },
  {
    title: "PCI DSS",
    image: "/pci.png",
  },
];

const Security = () => {
  return (
    <section>
      <Container className="w-full border-x">
        <div className="grid min-h-80 grid-cols-1 border-b lg:grid-cols-[1.6fr_1fr]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-10">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[32px]">
              Secure payments, built for scale.{" "}
              <span className="font-normal text-text-heading/50">
                GDPR, CCPA, and PCI DSS-ready infrastructure to protect every
                transaction.
              </span>
            </h2>
          </div>

          {/* Right Certifications */}
          <div className="grid grid-cols-3 border-t lg:border-l lg:border-t-0">
            {securityItems.map((item) => (
              <div
                key={item.title}
                className="flex min-h-44 flex-col items-center justify-center border-l first:border-l-0"
              >
                <div className="relative size-14 sm:size-16">
                  <Image
                    src={item.image}
                    alt={`${item.title} compliance`}
                    fill
                    className="object-contain opacity-60 grayscale"
                  />
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-text-heading/50">
                  <span className="flex size-3.5 items-center justify-center rounded-full bg-text-heading/40 text-[9px] text-white">
                    ✓
                  </span>
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Security;
