import { cn } from "@/lib/utils";
import {
  Checkout,
  DeepSearch,
  Recon,
  Shield,
  Symphony,
} from "./icons/product-icons";

const ProductsDashboard = () => {
  const sidebarItems = [
    {
      title: "Shield",
      icon: Shield,
    },
    {
      title: "Symphony",
      icon: Symphony,
    },
    {
      title: "Recon",
      icon: Recon,
    },
    {
      title: "DeepSearch",
      icon: DeepSearch,
    },
    {
      title: "Checkout",
      icon: Checkout,
    },
  ];

  return (
    <div className="h-full w-full overflow-hidden border border-neutral-200 bg-white">
      {/* Top Bar */}
      <div className="relative flex h-8 w-full items-center border-b border-neutral-200 bg-stone-100 px-3">
        {/* Mac Dots */}
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>

        {/* Center Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[12px] font-medium text-neutral-500">
            Dashboard
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex h-[calc(100%-32px)]">
        {/* Sidebar */}
        <div className="flex w-40 flex-col gap-1.5 border-r border-neutral-200 bg-[#f7f7f7] p-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-neutral-500 transition-all duration-200 hover:bg-neutral-200/40 hover:text-black",
                )}
              >
                <Icon className="h-[18px] w-[18px] shrink-0 text-[#0063EE]" />

                <span className="truncate">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white" />
      </div>
    </div>
  );
};

export default ProductsDashboard;
