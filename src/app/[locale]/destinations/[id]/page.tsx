"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useEffect, useState, use } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlane } from "react-icons/fa";
import DestinationsSection from "../../(home)/components/DestinationsSection";
import ContactSection from "../../about/components/ContactSection";

interface Media {
  id: string;
  url: string;
  filename: string;
  alt?: string;
}

interface Destination {
  id: string;
  name: string;
  slug: string;
  price: string;
  region: "domestic" | "international";
  image?: string | Media;
  imageUrl?: string;
  featuredImage?: any;
  description?: string;
  detailInfo?: {
    bestTime?: string;
    flightTime?: string;
    location?: string;
  };
  content?: any;
  reasons?: Array<{ reason: string; id?: string }>;
  tips?: string;
  gallery?: Array<{
    imageUrl?: string;
    image?: any;
    caption?: string;
    id?: string;
  }>;
  featured?: boolean;
  status: "published" | "draft";
}

const getImageUrl = (destination: Destination | null): string => {
  if (!destination) return "/images/placeholder.jpg";

  if (destination.imageUrl) return destination.imageUrl;

  if (destination.image || destination.featuredImage) {
    const media = destination.image || destination.featuredImage;

    if (typeof media === "string") return `/media/${media}`;
    if (media && typeof media === "object") {
      if (media.url) return media.url;
      if (media.filename) return `/media/${media.filename}`;
      if (media.id) return `/media/${media.id}`;
    }
  }

  return "/images/placeholder.jpg";
};

const getGalleryImageUrl = (item: any): string => {
  if (item.imageUrl) return item.imageUrl;
  if (item.image) {
    if (typeof item.image === "string") return `/media/${item.image}`;
    if (item.image.url) return item.image.url;
    if (item.image.filename) return `/media/${item.image.filename}`;
  }
  return "/images/placeholder.jpg";
};

export default function DestinationDetailPage({
                                                params,
                                              }: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestination = async () => {
      if (!id) {
        setError("ID không hợp lệ");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/destinations/${id}`, {
          cache: "no-store",
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("API error:", response.status, errorText);
          setError(`Không thể tải dữ liệu: ${response.status}`);
          setDestination(null);
          setLoading(false);
          return;
        }

        const data = await response.json();

        let destinationData = null;

        if (data.doc) {
          destinationData = data.doc;
        } else if (data.destination) {
          destinationData = data.destination;
        } else if (data.data) {
          destinationData = data.data;
        } else if (data.id) {
          destinationData = data;
        }

        if (destinationData) {
          console.log("=== DESTINATION DATA ===");
          console.log("Full data:", destinationData);
          console.log("Content:", destinationData.content);
          console.log("Tips:", destinationData.tips);
          console.log("Gallery:", destinationData.gallery);
          console.log("Reasons:", destinationData.reasons);
          console.log("========================");

          setDestination(destinationData as Destination);
          setError(null);
        } else {
          setError("Không tìm thấy dữ liệu điểm đến");
          setDestination(null);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error instanceof Error ? error.message : "Lỗi kết nối");
        setDestination(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 pt-[80px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Đang tải thông tin điểm đến...</p>
        </div>
      </main>
    );
  }

  if (error || !destination) {
    return (
      <main className="min-h-screen bg-slate-50 pt-[80px] flex items-center justify-center">
        <div className="text-center py-20 px-6 max-w-2xl">
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Không tìm thấy điểm đến
          </h1>

          <p className="text-lg text-slate-600 mb-4">
            {error || "Xin lỗi, điểm đến bạn đang tìm không tồn tại hoặc đã bị xóa."}
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/destinations"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              Quay lại danh sách điểm đến
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="inline-block bg-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-300 transition"
            >
              Thử lại
            </button>
          </div>
        </div>
      </main>
    );
  }

  const title = destination.name;
  const shortDescription =
    destination.description ||
    `Khám phá vẻ đẹp tuyệt vời của ${title} – một điểm đến không thể bỏ qua với văn hóa và ẩm thực độc đáo.`;
  const heroImageUrl = getImageUrl(destination);

  return (
    <main className="min-h-screen bg-slate-50 pt-[80px]">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={heroImageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.jpg";
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          {destination.featured && (
            <span className="mb-4 inline-block rounded-full bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wider">
              Điểm đến nổi bật
            </span>
          )}
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          <p className="max-w-3xl text-lg text-slate-100 opacity-95">{shortDescription}</p>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="relative z-10 mx-auto -mt-12 mb-16 max-w-5xl px-6">
        <div className="grid grid-cols-1 divide-y divide-slate-100 rounded-2xl bg-white p-6 shadow-2xl md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="flex items-center gap-4 py-6 md:px-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
              <FaMapMarkerAlt size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Địa điểm</p>
              <p className="text-lg font-bold text-slate-800">
                {destination.detailInfo?.location || title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-6 md:px-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
              <FaCalendarAlt size={24} className="text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Thời gian lý tưởng</p>
              <p className="text-lg font-bold text-slate-800">
                {destination.detailInfo?.bestTime || "Tháng 3 - Tháng 8"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-6 md:px-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
              <FaPlane size={24} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Giá vé từ</p>
              <p className="text-lg font-bold text-green-700">{destination.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="container mx-auto grid grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-3">
        <article className="lg:col-span-2 space-y-10">
          <h2 className="text-3xl font-bold text-slate-800">Thông tin chi tiết</h2>

          {/* Nội dung từ content field */}
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-5">
            {destination.content ? (
              (() => {
                // Handle Lexical format
                if (destination.content.root?.children) {
                  const text = destination.content.root.children
                    .map((node: any) => {
                      if (node.children) {
                        return node.children.map((child: any) => child.text || "").join("");
                      }
                      return "";
                    })
                    .join("\n");
                  return <div className="whitespace-pre-line">{text}</div>;
                }
                // Handle string format
                if (typeof destination.content === "string") {
                  return <div dangerouslySetInnerHTML={{ __html: destination.content.replace(/\n/g, "<br />") }} />;
                }
                return <div dangerouslySetInnerHTML={{ __html: JSON.stringify(destination.content) }} />;
              })()
            ) : destination.description ? (
              <div dangerouslySetInnerHTML={{ __html: destination.description.replace(/\n/g, "<br />") }} />
            ) : (
              <p className="text-gray-500 italic">Chưa có thông tin chi tiết về điểm đến này.</p>
            )}
          </div>

          {/* Lý do nên đi */}
          {destination.reasons && destination.reasons.length > 0 ? (
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Tại sao nên chọn {title}?</h3>
              <ul className="list-disc space-y-3 pl-8 text-lg text-slate-600">
                {destination.reasons.map((item, index) => (
                  <li key={item.id || index}>{item.reason}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
              <p className="text-gray-500 text-center">
                ⭐ Chưa có lý do nên đi. Reasons: {JSON.stringify(destination.reasons)}
              </p>
            </div>
          )}

          {/* Mẹo du lịch */}
          {destination.tips && (
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Mẹo du lịch hữu ích</h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{destination.tips}</p>
            </div>
          )}

          {/* Gallery ảnh */}
          {destination.gallery && destination.gallery.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {destination.gallery.map((item, index) => (
                <div key={item.id || index} className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={getGalleryImageUrl(item)}
                    alt={item.caption || `${title} - Hình ảnh ${index + 1}`}
                    width={600}
                    height={400}
                    className="h-72 w-full object-cover transition hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }}
                  />
                  {item.caption && (
                    <p className="p-3 text-sm text-slate-600 bg-white">{item.caption}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 mt-12">
              <p className="text-gray-500 text-center">
                🖼️ Chưa có ảnh trong thư viện. Gallery: {JSON.stringify(destination.gallery)}
              </p>
            </div>
          )}
        </article>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
            <h3 className="mb-5 text-2xl font-bold text-slate-800">Đặt vé đi {title}</h3>
            <p className="mb-8 text-slate-600">
              Tìm chuyến bay giá tốt nhất và nhận tư vấn miễn phí từ đội ngũ chuyên viên.
            </p>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold uppercase text-slate-500">Điểm đi</label>
                <input type="text" value="Hà Nội (HAN)" readOnly className="w-full rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-slate-800" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold uppercase text-slate-500">Điểm đến</label>
                <input type="text" value={title} readOnly className="w-full rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-slate-800" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold uppercase text-slate-500">Giá tham khảo</label>
                <p className="text-3xl font-bold text-red-600">Từ {destination.price}</p>
              </div>

              <Link
                href="/contact"
                className="block w-full rounded-xl bg-red-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700"
              >
                Liên hệ đặt vé ngay
              </Link>
            </div>
          </div>

          {destination.detailInfo?.flightTime && (
            <div className="rounded-2xl border border-slate-100 bg-blue-50 p-6">
              <h4 className="font-bold text-blue-900 mb-2">✈️ Thông tin bay</h4>
              <p className="text-slate-700">{destination.detailInfo.flightTime}</p>
            </div>
          )}
        </aside>
      </section>

      <section className="bg-white py-20">
        <DestinationsSection />
      </section>

      <ContactSection />
    </main>
  );
}