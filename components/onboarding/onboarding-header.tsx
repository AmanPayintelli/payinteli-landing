import { Sparkles } from "lucide-react";
import React from "react";

const OnboardingSideCard = () => {
  return (
    <div className="relative hidden overflow-hidden bg-primary p-7 text-white lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(229,229,255,0.22),transparent_34%)]" />

      <div className="relative flex h-full min-h-125 flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium">
            <Sparkles className="size-3.5" />
            PayIntelli onboarding
          </div>

          <h2 className="mt-8 max-w-md text-4xl font-semibold leading-tight tracking-tight">
            Setup your payment workspace in minutes.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
            Connect business details, upload documents, and activate your
            PayIntelli account with a clean guided flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSideCard;
