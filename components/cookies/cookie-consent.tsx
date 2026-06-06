"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings2 } from "lucide-react";
import CookieSettingsDialog from "./cookieSettingsDialog";

const STORAGE_KEY = "cookieConsent";

type CookiePreferences = {
  status: "accepted" | "rejected" | "custom";
  performance: boolean;
  functional: boolean;
  targeting: boolean;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setShowBanner(true);
  }, []);

  const saveConsent = (data: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setShowBanner(false);
    setOpenSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      status: "accepted",
      performance: true,
      functional: true,
      targeting: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      status: "rejected",
      performance: false,
      functional: false,
      targeting: false,
    });
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 z-50"
          >
            <div className="relative overflow-hidden border-t border-border bg-white shadow-[0_-14px_60px_rgba(8,40,50,0.12)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_7%_55%,rgba(103,59,246,0.13),transparent_25%),radial-gradient(circle_at_92%_25%,rgba(96,181,255,0.11),transparent_26%),linear-gradient(90deg,rgba(229,229,255,0.78),rgba(255,255,255,0.96)_44%,rgba(229,229,255,0.5))]" />

              <div className="pointer-events-none absolute -left-24 -bottom-23 h-44 w-96 rounded-[100%] border border-primary/10" />
              <div className="pointer-events-none absolute -left-10 -bottom-28 h-52 w-md rounded-[100%] border border-primary/10" />
              <div className="pointer-events-none absolute -right-24 -top-27.5 h-52 w-120 rounded-[100%] border border-primary/10" />

              <div className="relative mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary-soft bg-primary-soft text-primary shadow-sm">
                    <Cookie className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-[-0.02em] text-heading">
                      We value your privacy
                    </h3>
                    <p className="mt-1 max-w-3xl text-xs leading-5 text-muted sm:text-sm">
                      We use cookies to improve site experience, analyze
                      traffic, and support marketing. You can accept all, reject
                      optional cookies, or customize your preferences.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:shrink-0">
                  <button
                    onClick={() => setOpenSettings(true)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-white/80 px-4 text-sm font-semibold text-heading shadow-sm backdrop-blur transition hover:bg-primary-soft/70"
                  >
                    <Settings2 className="size-4" />
                    Settings
                  </button>

                  <button
                    onClick={rejectAll}
                    className="h-10 rounded-lg border border-border bg-white/80 px-4 text-sm font-semibold text-heading shadow-sm backdrop-blur transition hover:bg-primary-soft/70"
                  >
                    Accept Necessary Cookies
                  </button>

                  <button
                    onClick={acceptAll}
                    className="h-10 rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:scale-[1.02] hover:opacity-95"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookieSettingsDialog
        open={openSettings}
        onClose={() => setOpenSettings(false)}
        onRejectAll={rejectAll}
        onSave={(preferences) =>
          saveConsent({
            status: "custom",
            ...preferences,
          })
        }
      />
    </>
  );
}
