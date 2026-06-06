"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Sparkles,
  Upload,
  User,
  X,
} from "lucide-react";

import { ACTIVE_JOBS_API, SEND_MAIL_URL } from "@/api";
import Container from "@/components/container";
import SeparatorContainer from "@/components/separator-container";
import OnboardingInput from "@/components/onboarding/input-field";
import { apiRequest } from "@/api/apiClient";

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  department: string;
  experience_level: string;
  status: string;
  created_at: string;
  updated_at: string;
};

type JobsResponse = {
  job_listings: Job[];
  total: number;
};

type ApplicationFormData = {
  name: string;
  email: string;
  coverLetter: string;
  cvFile: FileList;
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const CareersPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [jobsError, setJobsError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ApplicationFormData>();

  const selectedCv = watch("cvFile")?.[0];

  useEffect(() => {
    const controller = new AbortController();

    const fetchJobs = async () => {
      try {
        setLoadingJobs(true);
        setJobsError(null);

        const data = await apiRequest<JobsResponse>({
          method: "get",
          url: ACTIVE_JOBS_API,
        });

        setJobs(data.job_listings);
      } catch {
        setJobsError("Unable to load open roles right now.");
      } finally {
        setLoadingJobs(false);
      }
    };

    fetchJobs();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selectedJob) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedJob]);

  const closeModal = () => {
    setSelectedJob(null);
    setIsApplying(false);
    setFormError(null);
    reset();
  };

  const onSubmitApplication = async (data: ApplicationFormData) => {
    if (!selectedJob) return;

    const cvFile = data.cvFile?.[0];

    if (!cvFile) {
      setFormError("Please upload your CV.");
      return;
    }

    try {
      setSubmitLoading(true);
      setFormError(null);

      const cvBase64 = await fileToBase64(cvFile);

      const payload = {
        name: data.name,
        email: data.email,
        subject: `Application – ${selectedJob.title}`,
        coverLetter: data.coverLetter,
        coverFile: null,
        cvFile: {
          filename: cvFile.name,
          content: cvBase64,
          contentType: cvFile.type,
        },
      };

      await apiRequest({
        method: "post",
        url: SEND_MAIL_URL,
        body: payload,
      });

      closeModal();
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-17">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[82px_82px]" />

        <Container className="relative border-x border-border">
          <div className="px-4 py-20 md:px-8 md:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                Careers at PayIntelli
              </div>

              <h1 className="text-heading text-4xl font-semibold tracking-[-0.055em] md:text-6xl lg:text-7xl">
                Build the Future of{" "}
                <span className="text-primary">AI-Powered Payments.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
                Work on complex fintech systems, AI-driven payment intelligence,
                and infrastructure that helps businesses optimize every
                transaction.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="#open-positions"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-muted"
                >
                  View Open Roles
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="mailto:careers@payintelli.com"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-white px-6 text-sm font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-soft"
                >
                  Send Your CV
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <SeparatorContainer height="h-16 md:h-20" />

      <section id="open-positions">
        <Container className="border-x border-border">
          <div className="border-y border-border px-4 py-14 md:px-8 md:py-18">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-sm text-muted">
                  [ Open Positions ]
                </p>
                <h2 className="mt-5 text-heading text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Find your next role.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted">
                Join a team building AI-powered infrastructure for modern
                payment orchestration.
              </p>
            </div>

            <div className="mt-12">
              {loadingJobs ? (
                <div className="flex items-center justify-center gap-3 rounded-3xl border border-border bg-white p-10 text-sm text-muted">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  Loading open roles...
                </div>
              ) : jobsError ? (
                <div className="rounded-3xl border border-red-100 bg-red-50 p-10 text-center text-sm text-red-500">
                  {jobsError}
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2">
                  {jobs.map((role, index) => (
                    <motion.div
                      key={role.id}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-80px" }}
                      variants={fadeUp}
                      transition={{ delay: index * 0.04 }}
                      className="group flex h-80 flex-col rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
                    >
                      <div className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-primary">
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          {role.department}
                        </span>

                        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                          {role.type}
                        </span>

                        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                          {role.experience_level}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-text-heading">
                        {role.title}
                      </h3>

                      <div className="mt-3 max-h-24 overflow-y-auto pr-2 text-sm leading-6 text-muted">
                        {role.summary}
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="mb-5 flex items-center gap-2 text-sm text-muted">
                          <MapPin className="h-4 w-4 shrink-0 text-primary" />
                          {role.location}
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedJob(role);
                            setIsApplying(false);
                            setFormError(null);
                            reset();
                          }}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[82vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border p-5">
                <div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary">
                      {selectedJob.department}
                    </span>

                    <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted">
                      {selectedJob.type}
                    </span>

                    <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted">
                      {selectedJob.experience_level}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-text-heading">
                    {isApplying
                      ? `Apply for ${selectedJob.title}`
                      : selectedJob.title}
                  </h3>

                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {selectedJob.location}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition hover:bg-primary-soft hover:text-primary"
                  aria-label="Close job details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                {!isApplying ? (
                  <>
                    <div className="mb-5 max-h-24 overflow-y-auto pr-2 text-sm leading-6 text-muted">
                      {selectedJob.summary}
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-semibold text-text-heading">
                        Responsibilities
                      </h4>

                      <ul className="grid gap-x-5 gap-y-2 md:grid-cols-2">
                        {selectedJob.responsibilities.map((item, index) => (
                          <li
                            key={`${selectedJob.id}-responsibility-${index}`}
                            className="flex gap-2 text-xs leading-5 text-muted"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <h4 className="mb-3 text-sm font-semibold text-text-heading">
                        Qualifications
                      </h4>

                      <ul className="grid gap-x-5 gap-y-2 md:grid-cols-2">
                        {selectedJob.qualifications.map((item, index) => (
                          <li
                            key={`${selectedJob.id}-qualification-${index}`}
                            className="flex gap-2 text-xs leading-5 text-muted"
                          >
                            <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmitApplication)}
                    className="space-y-4"
                  >
                    <div className="grid gap-3 md:grid-cols-2">
                      <OnboardingInput
                        label="Full Name"
                        placeholder="Full Name"
                        icon={User}
                        register={register("name", {
                          required: "Full name is required",
                        })}
                        error={errors.name?.message}
                      />

                      <OnboardingInput
                        label="Email Address"
                        placeholder="Email Address"
                        type="email"
                        icon={Mail}
                        register={register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        error={errors.email?.message}
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-normal">
                        Subject
                      </label>
                      <input
                        readOnly
                        value={`Application – ${selectedJob.title}`}
                        className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm text-muted outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-normal">
                        Cover Letter
                      </label>

                      <textarea
                        placeholder="Write your cover letter here"
                        {...register("coverLetter", {
                          required: "Cover letter is required",
                        })}
                        className="min-h-30 w-full resize-none rounded-lg border border-border bg-white p-3 text-sm outline-none transition-all placeholder:text-text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary-soft"
                      />

                      {errors.coverLetter?.message && (
                        <p className="mt-1 text-xs font-medium text-red-500">
                          {errors.coverLetter.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-normal">
                        CV
                      </label>

                      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-border p-4 text-center text-sm font-medium text-muted transition hover:border-primary hover:text-primary">
                        <Upload className="h-4 w-4" />
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          {...register("cvFile", {
                            required: "CV is required",
                          })}
                        />
                        {selectedCv ? selectedCv.name : "Upload CV"}
                      </label>

                      {errors.cvFile?.message && (
                        <p className="mt-1 text-xs font-medium text-red-500">
                          {errors.cvFile.message}
                        </p>
                      )}
                    </div>

                    {formError && (
                      <p className="text-sm font-medium text-red-500">
                        {formError}
                      </p>
                    )}

                    <div className="flex gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsApplying(false)}
                        className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-white px-4 text-xs font-semibold text-primary transition hover:bg-primary-soft"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={submitLoading}
                        className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-semibold text-white transition hover:bg-primary-muted disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {submitLoading ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {!isApplying && (
                <div className="flex gap-2 border-t border-border p-4">
                  <button
                    type="button"
                    onClick={() => setIsApplying(true)}
                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-semibold text-white transition hover:bg-primary-muted"
                  >
                    Apply Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-white px-4 text-xs font-semibold text-primary transition hover:bg-primary-soft"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CareersPage;
