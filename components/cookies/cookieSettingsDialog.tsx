"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type CookieSettingsDialogProps = {
  open: boolean;
  onClose: () => void;
  onRejectAll: () => void;
  onSave: (preferences: {
    performance: boolean;
    functional: boolean;
    targeting: boolean;
  }) => void;
};

export default function CookieSettingsDialog({
  open,
  onClose,
  onRejectAll,
  onSave,
}: CookieSettingsDialogProps) {
  const [preferences, setPreferences] = useState({
    performance: true,
    functional: true,
    targeting: true,
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 px-4 py-5 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-border bg-white shadow-[0_30px_100px_rgba(8,40,50,0.28)]"
          >
            <div className="flex shrink-0 items-center justify-between bg-text-brand px-5 py-4 text-black">
              <h3 className="text-base font-semibold">PayIntelli</h3>

              <button
                onClick={onClose}
                className="rounded-md bg-white/10 p-2 transition hover:bg-white/20"
                aria-label="Close cookie settings"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-6">
              <h4 className="text-sm font-semibold text-heading">
                Privacy Preference Center
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                When you visit any website, it may store or retrieve information
                on your browser, mostly in the form of cookies. This information
                might be about you, your preferences or your device and is
                mostly used to make the site work as you expect it to. The
                information does not usually directly identify you, but it can
                give you a more personalized web experience. Because we respect
                your right to privacy, you can choose not to allow some types of
                cookies. Click on the different category headings to find out
                more and change our default settings. However, blocking some
                types of cookies may impact your experience of the site and the
                services we are able to offer.
              </p>

              <a
                href="/cookie-policy"
                className="mt-3 inline-block text-sm font-medium text-primary transition hover:underline"
              >
                Read more about our cookie policy
              </a>

              <div className="mt-4 space-y-3">
                <PreferenceRow
                  title="Strictly Necessary Cookies"
                  locked
                  activeLabel="Always Active"
                />

                <PreferenceRow
                  title="Performance Cookies"
                  checked={preferences.performance}
                  onChange={() =>
                    setPreferences((prev) => ({
                      ...prev,
                      performance: !prev.performance,
                    }))
                  }
                />

                <PreferenceRow
                  title="Functional Cookies"
                  checked={preferences.functional}
                  onChange={() =>
                    setPreferences((prev) => ({
                      ...prev,
                      functional: !prev.functional,
                    }))
                  }
                />

                <PreferenceRow
                  title="Targeting Cookies"
                  checked={preferences.targeting}
                  onChange={() =>
                    setPreferences((prev) => ({
                      ...prev,
                      targeting: !prev.targeting,
                    }))
                  }
                />
              </div>
            </div>

            <div className="flex shrink-0 flex-col-reverse gap-3 border-t border-border bg-white px-5 py-4 shadow-[0_-12px_30px_rgba(8,40,50,0.06)] sm:flex-row sm:justify-end md:px-6">
              <button
                onClick={onRejectAll}
                className="h-10 rounded-md bg-slate-600 px-5 text-sm font-semibold text-black transition hover:bg-slate-700"
              >
                Reject All
              </button>

              <button
                onClick={() => onSave(preferences)}
                className="h-10 rounded-md bg-primary px-5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Confirm My Choices
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const PreferenceRow = ({
  title,
  checked,
  onChange,
  locked = false,
  activeLabel,
}: {
  title: string;
  checked?: boolean;
  onChange?: () => void;
  locked?: boolean;
  activeLabel?: string;
}) => {
  return (
    <div className="flex min-h-12 items-center justify-between gap-4 rounded-lg border border-border bg-white px-4 py-3 shadow-sm">
      <p className="text-sm font-semibold text-heading">{title}</p>

      {locked ? (
        <span className="shrink-0 rounded-md bg-slate-600 px-3 py-1.5 text-xs font-semibold text-black">
          {activeLabel}
        </span>
      ) : (
        <button
          type="button"
          onClick={onChange}
          aria-pressed={checked}
          className={`relative h-6 w-11 shrink-0 rounded-full transition ${
            checked ? "bg-green-500" : "bg-slate-300"
          }`}
        >
          <span
            className={`absolute top-1 size-4 rounded-full bg-white shadow transition ${
              checked ? "left-6" : "left-1"
            }`}
          />
        </button>
      )}
    </div>
  );
};
