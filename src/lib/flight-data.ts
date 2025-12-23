export interface Flight {
  id: number;
  airline: string;
  from: string;
  to: string;
  route: string;
  stop: string;
  country: string;
}

export const ALL_FLIGHTS: Flight[] = [
  {
    id: 1,
    airline: "Cathay Pacific",
    from: "Hà Nội",
    to: "London",
    route: "Hà Nội → London",
    stop: "Hong Kong",
    country: "United Kingdom",
  },
  {
    id: 2,
    airline: "Air China",
    from: "Hà Nội",
    to: "London",
    route: "Hà Nội → London",
    stop: "Beijing",
    country: "United Kingdom",
  },
  {
    id: 3,
    airline: "Emirates",
    from: "Hà Nội",
    to: "Paris",
    route: "Hà Nội → Paris",
    stop: "Dubai",
    country: "France",
  },
  {
    id: 4,
    airline: "Vietnam Airlines",
    from: "TP.HCM",
    to: "Paris",
    route: "TP.HCM → Paris",
    stop: "Paris",
    country: "France",
  },
  {
    id: 5,
    airline: "ANA",
    from: "Hà Nội",
    to: "Tokyo",
    route: "Hà Nội → Tokyo",
    stop: "Tokyo",
    country: "Japan",
  },
  {
    id: 6,
    airline: "Japan Airlines",
    from: "TP.HCM",
    to: "Osaka",
    route: "TP.HCM → Osaka",
    stop: "Osaka",
    country: "Japan",
  },
  {
    id: 7,
    airline: "Korean Air",
    from: "Hà Nội",
    to: "Seoul",
    route: "Hà Nội → Seoul",
    stop: "Seoul",
    country: "South Korea",
  },
];
