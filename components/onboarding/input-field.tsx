import { cn } from "@/lib/utils";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface OnboardingInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  error?: string;
  register: UseFormRegisterReturn;
}

const OnboardingInput = ({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  error,
  register,
}: OnboardingInputProps) => {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text-normal">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
        )}

        <input
          type={type}
          placeholder={placeholder}
          {...register}
          className={cn(
            "h-11 w-full rounded-lg border border-border bg-white pr-3 text-sm outline-none transition-all placeholder:text-text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary-soft",
            Icon ? "pl-10" : "pl-3",
            error && "border-red-400 focus:border-red-400 focus:ring-red-100",
          )}
        />
      </div>

      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
};

export default OnboardingInput;
