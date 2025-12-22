"use client";

import { FlightDeparture } from "@/lib/destination-departure-map";

interface Props {
  departures: FlightDeparture[];
}

export default function AirportFlightBoard({ departures }: Props) {
  if (!departures.length) return null;

  return (
    <section className="mt-12 rounded-2xl bg-white shadow ring-1 ring-slate-200">
      <div className="border-b px-6 py-4">
        <h3 className="text-lg font-bold">
          Chuyến bay khởi hành từ {departures[0].from}
        </h3>
      </div>

      <div className="grid grid-cols-12 px-6 py-3 text-xs font-semibold uppercase text-slate-500">
        <div className="col-span-3">Hãng bay</div>
        <div className="col-span-3">Hành trình</div>
        <div className="col-span-3">Điểm đến</div>
        <div className="col-span-3">Quốc gia</div>
      </div>

      {departures.map((f, i) => (
        <div
          key={i}
          className="grid grid-cols-12 px-6 py-4 text-sm hover:bg-slate-50"
        >
          <div className="col-span-3 font-medium">{f.airline}</div>
          <div className="col-span-3">{f.route}</div>
          <div className="col-span-3">{f.stop}</div>
          <div className="col-span-3">{f.country}</div>
        </div>
      ))}
    </section>
  );
}
