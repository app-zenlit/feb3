"use client";

import locationData from "../data/contact_location.json";

type MapEmbedBoxProps = {
  className?: string;
};

export function MapEmbedBox({ className }: MapEmbedBoxProps) {
  const { officeName, addressLine, lat, lng, zoom } = locationData;

  if (!lat || !lng) {
    return (
      <div className={`rounded-lg border border-[color:var(--rule)] bg-white/50 p-6 shadow-sm ${className ?? ""}`}>
        <p className="text-sm text-muted">Map coordinates not configured.</p>
      </div>
    );
  }

  const embedSrc = `https://www.google.com/maps?hl=en&q=${lat},${lng}&z=${zoom}&output=embed`;

  const encodedQuery = addressLine
    ? `${lat},${lng} (${encodeURIComponent(officeName)})`
    : `${lat},${lng}`;
  const openMapLink = `https://www.google.com/maps?q=${encodedQuery}`;

  return (
    <div className={`space-y-3 ${className ?? ""}`}>
      <div className="overflow-hidden rounded-lg border border-[color:var(--rule)] bg-white/90 shadow-sm">
        <iframe
          src={embedSrc}
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Office Location Map"
          className="h-[260px] md:h-[360px]"
        />
      </div>
      <div className="flex items-center justify-between text-xs">
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
  );
}
