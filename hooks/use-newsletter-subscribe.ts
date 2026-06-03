"use client";

import { SUBSCRIBE_PAYINTELLI_API } from "@/api";
import { apiRequest } from "@/api/apiClient";
import { useEffect, useState } from "react";

type SubscriptionType = "BOTH" | "BLOG" | "NEWSLETTER";

export const useNewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [subscriptionType, setSubscriptionType] =
    useState<SubscriptionType>("BOTH");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isBlogChecked =
    subscriptionType === "BLOG" || subscriptionType === "BOTH";

  const isNewsletterChecked =
    subscriptionType === "NEWSLETTER" || subscriptionType === "BOTH";

  useEffect(() => {
    if (cooldownSeconds <= 0) return;

    const timer = setInterval(() => {
      setCooldownSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldownSeconds]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleBlogChange = (checked: boolean) => {
    if (checked && isNewsletterChecked) setSubscriptionType("BOTH");
    else if (checked) setSubscriptionType("BLOG");
    else if (isNewsletterChecked) setSubscriptionType("NEWSLETTER");
    else setSubscriptionType("BOTH");
  };

  const handleNewsletterChange = (checked: boolean) => {
    if (checked && isBlogChecked) setSubscriptionType("BOTH");
    else if (checked) setSubscriptionType("NEWSLETTER");
    else if (isBlogChecked) setSubscriptionType("BLOG");
    else setSubscriptionType("BOTH");
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (cooldownSeconds > 0) {
      setError(
        `Please wait ${formatTime(cooldownSeconds)} before subscribing again.`,
      );
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    try {
      setIsSubmitting(true);

      const data = await apiRequest<{ message?: string }>({
        method: "post",
        url: SUBSCRIBE_PAYINTELLI_API,
        body: {
          email: email.trim(),
          is_internal: false,
          source: "payintelli.com/resources/hub",
          subscription_type: subscriptionType,
        },
      });

      setMessage(data?.message || "Subscribed successfully");
      setEmail("");
      setSubscriptionType("BOTH");
      setCooldownSeconds(5 * 60);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to subscribe. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    isSubmitting,
    cooldownSeconds,
    message,
    error,
    isBlogChecked,
    isNewsletterChecked,
    formatTime,
    handleBlogChange,
    handleNewsletterChange,
    handleSubscribe,
  };
};
