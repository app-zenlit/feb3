import { Suspense } from "react";
import HomePageClient from "@/components/HomePageClient";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HomePageClient />
    </Suspense>
  );
}
