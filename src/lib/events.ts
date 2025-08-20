export type CityEvent = {
  id: string; // slug or city id
  city: string;
  startsAt: string; // ISO string
  endsAt: string; // ISO string
  link?: string; // optional Luma link
};

// TODO: Replace dates below with real Lu.ma event times.

export const cityEvents: CityEvent[] = [
  {
    id: 'galle',
    city: 'Galle',
    startsAt: '2025-09-02T09:00:00+05:30', // Sep 2, 9:00 AM IST
    endsAt: '2025-09-02T17:00:00+05:30',
    link: 'https://lu.ma/CeyCashEvents',
  },
  {
    id: 'kandy',
    city: 'Kandy',
    startsAt: '2025-09-10T09:00:00+05:30', // Sep 10, 9:00 AM IST
    endsAt: '2025-09-10T17:00:00+05:30',
    link: 'https://lu.ma/CeyCashEvents',
  },
  {
    id: 'colombo',
    city: 'Colombo',
    startsAt: '2025-09-20T09:00:00+05:30', // Sep 20, 9:00 AM IST
    endsAt: '2025-09-20T17:00:00+05:30',
    link: 'https://lu.ma/CeyCashEvents',
  },
 
];
