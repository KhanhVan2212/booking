// app/flights/page.tsx
"use client";

import React, { useState } from "react";
import {
  FaPlane,
  FaFilter,
  FaSuitcase,
  FaClock,
  FaPlaneArrival,
  FaPlaneDeparture,
} from "react-icons/fa6";
import { flightsData } from "./data"; // Giả sử bạn để data ở file riêng, hoặc paste data mẫu vào đây
import Header from "@/components/Layout/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchSummary from "./compoments/SearchSummary";
import FilterSidebar from "./compoments/FilterSidebar";
import FlightCard from "./compoments/FlightCard";

// --- MAIN PAGE COMPONENT ---
export default function FlightsPage() {
  const [sortOption, setSortOption] = useState("cheap");

  return (
    <main className="min-h-screen bg-slate-50">
      <SearchSummary />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* LEFT COLUMN: FILTERS */}
          <div className="hidden lg:col-span-1 lg:block">
            <FilterSidebar />
          </div>

          {/* RIGHT COLUMN: LIST */}
          <div className="col-span-1 lg:col-span-3">
            {/* Sort Tabs */}
            <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSortOption("cheap")}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${sortOption === "cheap" ? "bg-sky-600 text-white shadow-md" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
              >
                Giá rẻ nhất
              </button>
              <button
                onClick={() => setSortOption("fast")}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${sortOption === "fast" ? "bg-sky-600 text-white shadow-md" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
              >
                Bay nhanh nhất
              </button>
              <button
                onClick={() => setSortOption("early")}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${sortOption === "early" ? "bg-sky-600 text-white shadow-md" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
              >
                Cất cánh sớm nhất
              </button>
            </div>

            {/* Flight List */}
            <div>
              {flightsData.map((flight) => (
                <FlightCard key={flight.id} data={flight} />
              ))}
            </div>

            {/* Pagination / Load more */}
            <div className="mt-8 text-center">
              <button className="rounded-lg border border-sky-600 px-6 py-3 font-semibold text-sky-600 transition hover:bg-sky-50">
                Xem thêm chuyến bay
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
