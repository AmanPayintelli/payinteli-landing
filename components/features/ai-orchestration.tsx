import { Symphony } from "../ui/icons/product-icons";

const providers = [
  { title: "Shift4", img: "/aquirer/shift4.png", routeId: "route-shift4" },
  { title: "Adyen", img: "/aquirer/adyen.svg", routeId: "route-adyen" },
  { title: "Paypal", img: "/aquirer/paypal.png", routeId: "route-paypal" },
];

const transactions = [
  {
    id: "txn-1",
    provider: "Shift4",
    routeId: "route-shift4",
    amount: "$128.40",
    method: "Visa",
    delay: "0s",
  },
  {
    id: "txn-2",
    provider: "Adyen",
    routeId: "route-adyen",
    amount: "$342.10",
    method: "Amex",
    delay: "1.4s",
  },
  {
    id: "txn-3",
    provider: "Paypal",
    routeId: "route-paypal",
    amount: "$89.20",
    method: "PayPal",
    delay: "2.8s",
  },
];

const AiOrchestration = () => {
  return (
    <div className="relative my-4 h-65 w-full overflow-hidden rounded-3xl border bg-white">
      <svg
        viewBox="0 0 900 650"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* Hidden full routes for animated transaction cards */}
        <path
          id="route-shift4"
          d="M450 0 L450 150 C450 420 80 300 80 540"
          stroke="transparent"
          strokeWidth="2"
          fill="none"
        />

        <path
          id="route-adyen"
          d="M450 0 L450 150 L450 540"
          stroke="transparent"
          strokeWidth="2"
          fill="none"
        />

        <path
          id="route-paypal"
          d="M450 0 L450 150 C450 420 820 300 820 540"
          stroke="transparent"
          strokeWidth="2"
          fill="none"
        />

        {/* Visible routes */}
        <path
          d="M450 0 L450 150"
          stroke="#e5e5ff"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M450 150 C450 420 80 300 80 540"
          stroke="#e5e5ff"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M450 150 L450 540"
          stroke="#e5e5ff"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M450 150 C450 420 820 300 820 540"
          stroke="#e5e5ff"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Moving transaction cards */}
        {transactions.map((transaction) => (
          <g key={transaction.id}>
            <g transform="translate(-46 -18)">
              <rect
                width="92"
                height="36"
                rx="18"
                fill="white"
                stroke="#e5e5ff"
                strokeWidth="2"
              />

              <rect
                x="7"
                y="9"
                width="18"
                height="18"
                rx="9"
                fill="#60B5FF"
                opacity="0.15"
              />

              <circle cx="16" cy="18" r="4" fill="#60B5FF" />

              <text x="33" y="15" fill="#082832" fontSize="10" fontWeight="600">
                {transaction.amount}
              </text>

              <text x="33" y="27" fill="#6b7280" fontSize="8">
                {transaction.method}
              </text>
            </g>

            <animateMotion
              dur="4.2s"
              begin={transaction.delay}
              repeatCount="indefinite"
            >
              <mpath href={`#${transaction.routeId}`} />
            </animateMotion>
          </g>
        ))}
      </svg>

      {/* Symphony icon at split point */}
      <div className="absolute left-1/2 top-[23%] z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-primary shadow-sm">
        <Symphony className="h-5 w-5 text-white" />
      </div>

      {/* Left provider - Shift4 */}
      <div className="absolute bottom-7 left-[9%] z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-white p-2 shadow-sm">
        <img
          src={providers[0].img}
          alt={providers[0].title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Center provider - Adyen */}
      <div className="absolute bottom-7 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-white p-2 shadow-sm">
        <img
          src={providers[1].img}
          alt={providers[1].title}
          className="h-full w-full scale-150 object-contain"
        />
      </div>

      {/* Right provider - Paypal */}
      <div className="absolute bottom-7 left-[91%] z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-white p-2 shadow-sm">
        <img
          src={providers[2].img}
          alt={providers[2].title}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default AiOrchestration;
