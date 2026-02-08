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
  }
];
