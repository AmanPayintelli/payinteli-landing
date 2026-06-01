"use client";

import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import {
  ArrowUpRight,
  BadgeDollarSign,
  Calculator,
  CreditCard,
  ShieldCheck,
  Target,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";

export default function RoiCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(1000000);
  const [avgValue, setAvgValue] = useState(50);
  const [approvalRate, setApprovalRate] = useState(75);
  const [fraudRate, setFraudRate] = useState(1.5);
  const [processingCost, setProcessingCost] = useState(2.5);

  const metrics = useMemo(() => {
    const newApprovalRate = Math.min(approvalRate + approvalRate * 0.15, 99);

    const additionalTransactions = Math.round(
      monthlyVolume * ((newApprovalRate - approvalRate) / 100),
    );

    const additionalRevenue = additionalTransactions * avgValue;

    const newFraudRate = fraudRate * 0.6;
    const currentFraudLoss = monthlyVolume * (fraudRate / 100) * avgValue;
    const newFraudLoss = monthlyVolume * (newFraudRate / 100) * avgValue;
    const fraudSavings = Math.round(currentFraudLoss - newFraudLoss);

    const monthlyRevenue = monthlyVolume * avgValue;
    const currentProcessingCostAmount = monthlyRevenue * (processingCost / 100);

    const optimizedCost = processingCost * 0.8;
    const newProcessingCostAmount = monthlyRevenue * (optimizedCost / 100);

    const costSavings = Math.round(
      currentProcessingCostAmount - newProcessingCostAmount,
    );

    const totalMonthlyImpact = additionalRevenue + fraudSavings + costSavings;
    const totalAnnualImpact = totalMonthlyImpact * 12;

    return {
      newApprovalRate,
      additionalTransactions,
      additionalRevenue,
      newFraudRate,
      fraudSavings,
      optimizedCost,
      costSavings,
      totalMonthlyImpact,
      totalAnnualImpact,
    };
  }, [monthlyVolume, avgValue, approvalRate, fraudRate, processingCost]);

  return (
    <div className="min-h-screen bg-background">
      <section className="w-full bg-background">
        <Container className="border-x border-border px-4 py-10 md:px-8 md:py-12">
          <div className="relative overflow-hidden border border-border bg-background">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_80%_35%,rgba(103,59,246,0.16),transparent_45%),linear-gradient(to_left,rgba(229,229,255,0.55),transparent)]" />

            <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-24">
              <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
                [ ROI Calculator ]
              </span>

              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-text-brand md:text-6xl">
                ROI Calculator
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-muted md:text-lg">
                Calculate your potential savings and revenue growth with
                PayIntelli’s AI-powered payment platform.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <SeparatorContainer />

      <Container className="mx-auto border-x border-border bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[32px_32px] p-4 md:p-6 lg:p-8">
        <section className="grid grid-cols-1 border border-border bg-background shadow-sm md:grid-cols-[42fr_58fr]">
          <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-8">
            <div className="h-full border border-dashed border-border bg-white p-5 md:p-6">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-primary-soft text-primary">
                  <Calculator size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-text-brand">
                    Your Current Metrics
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    Adjust the values to estimate your payment ROI.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <MetricSlider
                  icon={<CreditCard size={17} />}
                  label="Monthly Transaction Volume"
                  value={monthlyVolume}
                  min={1000}
                  max={10000000}
                  step={1000}
                  suffix="transactions/month"
                  displayValue={formatNumber(monthlyVolume)}
                  onChange={setMonthlyVolume}
                />

                <MetricInput
                  icon={<WalletCards size={17} />}
                  label="Average Transaction Value"
                  value={avgValue}
                  min={1}
                  max={10000}
                  prefix="$"
                  onChange={setAvgValue}
                />

                <MetricSlider
                  icon={<TrendingUp size={17} />}
                  label="Current Approval Rate"
                  value={approvalRate}
                  min={50}
                  max={95}
                  step={0.1}
                  suffix="%"
                  onChange={setApprovalRate}
                />

                <MetricSlider
                  icon={<ShieldCheck size={17} />}
                  label="Current Fraud Rate"
                  value={fraudRate}
                  min={0.1}
                  max={5}
                  step={0.01}
                  suffix="%"
                  onChange={setFraudRate}
                />

                <MetricSlider
                  icon={<BadgeDollarSign size={17} />}
                  label="Current Processing Cost"
                  value={processingCost}
                  min={1}
                  max={4}
                  step={0.01}
                  suffix="% of transaction value"
                  onChange={setProcessingCost}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <ResultCard
              icon={<TrendingUp size={23} />}
              title="Improved Approval Rate"
              rows={[
                [
                  "New Approval Rate",
                  `${formatNumber(metrics.newApprovalRate, 1)}%`,
                ],
                [
                  "Additional Transactions",
                  formatNumber(metrics.additionalTransactions),
                ],
                [
                  "Additional Monthly Revenue",
                  formatCurrency(metrics.additionalRevenue),
                ],
              ]}
            />

            <ResultCard
              icon={<Target size={23} />}
              title="Total ROI Summary"
              rows={[
                [
                  "Total Monthly Impact",
                  formatCurrency(metrics.totalMonthlyImpact),
                ],
                [
                  "Total Annual Impact",
                  formatCurrency(metrics.totalAnnualImpact),
                ],
              ]}
            />

            <ResultCard
              icon={<ShieldCheck size={23} />}
              title="Fraud Reduction (40%)"
              rows={[
                ["New Fraud Rate", `${formatNumber(metrics.newFraudRate, 2)}%`],
                ["Monthly Savings", formatCurrency(metrics.fraudSavings)],
              ]}
            />

            <ResultCard
              icon={<BadgeDollarSign size={23} />}
              title="Cost Optimization (20%)"
              rows={[
                [
                  "Optimized Cost",
                  `${formatNumber(metrics.optimizedCost, 2)}%`,
                ],
                ["Monthly Savings", formatCurrency(metrics.costSavings)],
              ]}
            />

            <div className="border-t border-border bg-primary-soft/30 p-6 md:col-span-2 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-medium text-text-muted">
                    Estimated 12 Month ROI
                  </p>

                  <h3 className="mt-3 text-4xl font-semibold tracking-tight text-text-brand md:text-5xl">
                    {formatCurrency(metrics.totalAnnualImpact)}
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-white text-primary shadow-sm">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <SeparatorContainer />
    </div>
  );
}

function MetricSlider({
  icon,
  label,
  value,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  displayValue,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  displayValue?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-brand">
        <span className="text-primary">{icon}</span>
        {label}
      </div>

      <Draggable
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />

      <div className="mt-3 flex items-center gap-3">
        <div className="rounded-xl border border-border bg-white px-4 py-2 text-lg font-medium text-text-brand shadow-sm">
          {prefix}
          {displayValue ?? formatNumber(value, step < 1 ? 2 : 0)}
        </div>

        {suffix && <span className="text-sm text-text-muted">{suffix}</span>}
      </div>
    </div>
  );
}

function MetricInput({
  icon,
  label,
  value,
  min,
  max,
  prefix = "",
  suffix = "",
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  max: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-brand">
        <span className="text-primary">{icon}</span>
        {label}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-xl border border-border bg-white px-4 py-2 shadow-sm">
          {prefix && (
            <span className="mr-1 text-lg text-text-muted">{prefix}</span>
          )}

          <input
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={(e) =>
              onChange(Math.min(max, Math.max(min, Number(e.target.value))))
            }
            className="w-32 bg-transparent text-lg font-medium text-text-brand outline-none"
          />
        </div>

        {suffix && <span className="text-sm text-text-muted">{suffix}</span>}
      </div>
    </div>
  );
}

function Draggable({
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      <div className="relative h-9 overflow-hidden rounded-lg border border-border bg-neutral-100 shadow-inner">
        <div
          className="absolute left-0 top-0 h-full rounded-lg border-2 border-primary bg-white shadow-[0_8px_24px_rgba(96,181,255,0.25)]"
          style={{ width: `${progress}%` }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        />

        <div
          className="pointer-events-none absolute top-0 z-20 h-full w-1 rounded-full bg-primary"
          style={{ left: `calc(${progress}% - 2px)` }}
        />
      </div>
    </div>
  );
}

function ResultCard({
  icon,
  title,
  rows,
}: {
  icon: React.ReactNode;
  title: string;
  rows: [string, string][];
}) {
  return (
    <div className="min-h-72 border-b border-border bg-white p-6 md:border-r md:p-7 even:md:border-r-0">
      <div className="mb-8">
        <div className="mb-5 flex h-11 w-11 items-center justify-center border border-border bg-primary-soft text-primary">
          {icon}
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-text-brand">
          {title}
        </h3>
      </div>

      <div className="space-y-5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-start justify-between gap-6">
            <span className="max-w-[52%] text-sm leading-5 text-text-muted">
              {label}
            </span>

            <span className="text-right text-base font-semibold text-text-brand">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatNumber(value: number, fractionDigits = 0) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

function formatCurrency(value: number, fractionDigits = 0) {
  return `$${formatNumber(value, fractionDigits)}`;
}
