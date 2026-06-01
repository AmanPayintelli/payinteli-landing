import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import { ButtonSecondary } from "@/components/ui/buttonPrimary";

const ContactUs = () => {
  return (
    <div className="bg-background pt-17">
      <SeparatorContainer />

      <Container className="relative overflow-hidden border-x bg-white h-full">
        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Form */}
          <div className="p-5 md:p-6">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-wide text-primary">
                [ Get in touch ]
              </span>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-brand md:text-4xl">
                Tell us about your business
              </h3>
            </div>

            <form className="mt-8 grid gap-5 rounded-lg border border-border bg-white/90 p-4 shadow-[0_24px_70px_rgba(8,40,50,0.08)] backdrop-blur-xl md:p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Work email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                  <p className="mt-1.5 text-xs text-text-muted">
                    Please provide a professional email
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-brand">
                    Company Website
                  </label>
                  <input
                    type="text"
                    placeholder="company.com"
                    className="h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-primary-soft bg-primary-soft/45 p-4">
                <label className="mb-4 block text-sm font-semibold text-text-brand">
                  Monthly Transactions
                </label>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "< 10,000",
                    "10,000 - 100,000",
                    "100,000 - 1 million",
                    "1 million +",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text-brand transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
                    >
                      <input
                        type="radio"
                        name="monthly_transactions"
                        className="accent-primary"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-white p-4">
                <label className="mb-4 block text-sm font-semibold text-text-brand">
                  What solutions are you most interested in?
                </label>

                <div className="grid gap-3">
                  {[
                    "AI powered fraud detection",
                    "Payment orchestration and smart routing",
                    "Revenue and cost optimization",
                    "Reconciliation and reporting",
                    "Other (please specify)",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-text-brand transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-soft/50 hover:shadow-sm"
                    >
                      <input type="checkbox" className="accent-primary" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-brand">
                  What’s your biggest payment challenge today?
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your response here..."
                  className="w-full resize-none rounded-3xl border border-border bg-white px-4 py-3 text-sm text-text-brand outline-none transition placeholder:text-text-muted/60 focus:border-primary focus:shadow-[0_0_0_4px_rgba(103,59,246,0.08)]"
                />
              </div>
              <ButtonSecondary
                title="Submit"
                height="h-12"
                className="w-full px-6"
              />
            </form>
          </div>

          {/* Right Visual */}
          <div className="relative min-h-155 overflow-hidden border-t border-border bg-text-brand lg:border-l lg:border-t-0">
            <img
              src="/new-york-city.jpg"
              alt="New York city skyline"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-b from-text-brand/20 via-text-brand/45 to-text-brand/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(103,59,246,0.35),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(229,229,255,0.25),transparent_35%)]" />

            <div className="relative flex h-full flex-col justify-end p-6 text-white md:p-8 lg:p-10">
              <h4 className="mt-6 max-w-md text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Built for modern payment teams moving at global speed.
              </h4>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
                A cleaner, premium contact experience with enterprise-level
                trust and modern city energy.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <SeparatorContainer />
    </div>
  );
};

export default ContactUs;
