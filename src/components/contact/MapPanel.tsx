"use client";

import { useMemo, useState } from "react";
import type { Location } from "config/locations";

type MapPanelProps = {
  location: Location;
};

const formatAddress = (location: Location) => {
  const parts = [
    location.name,
    ...location.addressLines,
    location.city,
    location.state,
    location.postalCode,
    location.country
  ].filter(Boolean);

  return parts.join(", ");
};

export function MapPanel({ location }: MapPanelProps) {
  const [copied, setCopied] = useState(false);
  const { mapSrc, mapLink } = useMemo(() => {
    const locationWithQuery = location as Location & { placeQuery?: string };
    if (typeof location.lat === "number" && typeof location.lng === "number") {
      const coords = `${location.lat},${location.lng}`;
      return {
        mapSrc: `https://www.google.com/maps?q=${coords}&z=15&output=embed`,
        mapLink: `https://www.google.com/maps?q=${coords}`
      };
    }
    if (locationWithQuery.placeQuery) {
      const encoded = encodeURIComponent(locationWithQuery.placeQuery);
      return {
        mapSrc: `https://www.google.com/maps?q=${encoded}&z=15&output=embed`,
        mapLink: `https://www.google.com/maps?q=${encoded}`
      };
    }
    return {
      mapSrc: "https://www.google.com/maps?q=0,0&z=2&output=embed",
      mapLink: "https://www.google.com/maps?q=0,0"
    };
  }, [location]);

  const handleCopy = async () => {
    const text = formatAddress(location);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="overflow-hidden rounded-xl border border-[color:var(--rule)] bg-white/80 shadow-sm">
        <iframe
          title={`Map of ${location.name}`}
          src={mapSrc}
          className="h-[240px] w-full sm:h-[260px] lg:h-[430px]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink bg-ink px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-paper transition hover:shadow-[0_12px_30px_rgba(11,27,59,0.25)]"
          aria-label="View larger map in Google Maps"
        >
          View larger map
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-[color:var(--rule)] bg-white/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-ink transition hover:border-[color:var(--gold)]"
          aria-label="Copy address to clipboard"
        >
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </div>
  );
}
