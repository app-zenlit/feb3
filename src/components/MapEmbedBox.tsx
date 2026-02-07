"use client";

import { useState } from "react";
import locationData from "../data/contact_location.json";

type MapEmbedBoxProps = {
  className?: string;
};

export function MapEmbedBox({ className }: MapEmbedBoxProps) {
  const { officeName, addressLine, lat, lng, zoom, embedUrl } = locationData as typeof locationData & { embedUrl?: string };
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const encodedQuery = addressLine
    ? `${lat},${lng} (${encodeURIComponent(officeName)})`
    : `${lat},${lng}`;
  const openMapLink = `https://www.google.com/maps?q=${encodedQuery}`;

  const embedSrc = embedUrl || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.9543!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}%2C${lng}!5e0!3m2!1sen!2sin!4v${Date.now()}`;

  if (!lat || !lng) {
    return (
      <div className={`rounded-lg border border-[color:var(--rule)] bg-white/50 p-6 shadow-sm ${className ?? ""}`}>
        <p className="text-sm text-muted">Map coordinates not configured.</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className={`space-y-3 ${className ?? ""}`}>
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-[color:var(--rule)] bg-white/90 p-8 shadow-sm" style={{ height: '280px' }}>
          <div className="text-center">
            <p className="mb-2 text-sm font-medium text-ink">{officeName}</p>
            <p className="mb-4 text-xs text-muted">{addressLine}</p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={openMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[color:var(--rule)] bg-[color:var(--gold)] px-6 py-2 text-sm font-medium text-white transition hover:bg-[color:var(--gold)]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2"
            >
              Open in Google Maps
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-muted underline-offset-4 transition hover:text-[color:var(--gold)] hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className ?? ""}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-xs text-muted transition hover:text-ink md:hidden"
      >
        <span>{isExpanded ? "Hide Map" : "Show Map"}</span>
        <span className="text-lg">{isExpanded ? "−" : "+"}</span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 md:block ${isExpanded ? "block" : "hidden"}`}>
        <p className="mb-2 text-[10px] uppercase tracking-wider text-muted">
          Drag to explore • Use +/− to zoom
        </p>
        <div className="relative overflow-hidden rounded-lg border border-[color:var(--rule)] bg-white/90 shadow-sm">
          {isLoading && (
            <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-white/50 via-white/80 to-white/50" />
          )}
          <iframe
            src={embedSrc}
            width="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Office Location Map"
            className="h-[240px] md:h-[280px]"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px]">
          <span className="text-muted">Pinned: {officeName}</span>
          <a
            href={openMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline-offset-4 transition hover:text-[color:var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
