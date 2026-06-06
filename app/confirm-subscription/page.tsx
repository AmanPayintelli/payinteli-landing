"use client";

import Confirmsubscription from "@/components/confirm-subscription/ConfirmsubscriptionClient";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Confirmsubscription />
    </Suspense>
  );
}
