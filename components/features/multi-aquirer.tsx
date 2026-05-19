import React from "react";

const acquirers = [
  { src: "/aquirer/adyen.svg", alt: "Adyen" },
  { src: "/aquirer/paypal.png", alt: "PayPal" },
  { src: "/aquirer/world-pay.png", alt: "Worldpay" },
  { src: "/aquirer/shift4.png", alt: "Shift4" },
  { src: "/aquirer/stripe.svg", alt: "Stripe" },
  { src: "/aquirer/elavon.jpeg", alt: "Elavon" },
];

const MultiAquirer = () => {
  const orbitSize = 180;
  const radius = orbitSize / 2;

  return (
    <div className="relative my-4 flex h-full min-h-65 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-100/50">
      <div className="absolute size-70 rounded-full border border-neutral-300/70" />

      <div
        className="absolute animate-spin-slow rounded-full border border-neutral-300/70"
        style={{
          width: orbitSize,
          height: orbitSize,
        }}
      >
        {acquirers.map((item, index) => {
          const angle = (360 / acquirers.length) * index;

          return (
            <div
              key={`${item.alt}-${index}`}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
              }}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 animate-spin-reverse">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-10 w-10 rounded-full bg-white object-contain p-2 shadow-sm ring-1 ring-neutral-200"
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Add Risk score in health  scroe */}
      <div className="absolute flex size-20 items-center justify-center rounded-full border border-neutral-300/70 bg-white shadow-sm">
        <img src="/Pi-Logo.png" className="h-10 w-10" alt="Payintelli" />
      </div>
    </div>
  );
};

export default MultiAquirer;
