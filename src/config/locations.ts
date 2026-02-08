export type Location = {
  id: string;
  name: string;
  addressLines: string[];
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
  email?: string;
  phone?: string;
  lat: number;
  lng: number;
  isPrimary?: boolean;
};

export const ALL_LOCATIONS_MYMAPS_EMBED_URL =
  "<PASTE_MYMAPS_EMBED_URL_HERE>";

export const LOCATIONS: Location[] = [
  {
    id: "nathan-koz",
    name: "Nathan & Co.",
    addressLines: ["AG Road, Vellayil"],
    city: "Kozhikode",
    state: "Kerala",
    country: "India",
    postalCode: "400001",
    email: "info@nathanandco.in",
    phone: "+91 8089388655",
    lat: 11.2588,
    lng: 75.7804,
    isPrimary: true
  },
  {
    id: "bengaluru",
    name: "Nathan & Co. — Bengaluru",
    addressLines: ["MG Road", "Shanthala Nagar"],
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postalCode: "560001",
    lat: 12.9741854,
    lng: 77.6124135
  }
];
