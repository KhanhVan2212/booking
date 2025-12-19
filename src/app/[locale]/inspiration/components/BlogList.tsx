"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

// Dummy Data
// Dummy Data
const blogPosts = [
  {
    id: 1,
    title: "10 Địa điểm check-in không thể bỏ qua tại Đà Nẵng",
    slug: "10-dia-diem-check-in-da-nang",
    excerpt:
      "Đà Nẵng không chỉ có cầu Rồng hay Bà Nà Hills. Hãy cùng khám phá những địa điểm sống ảo cực chất mà ít người biết đến.",
    image:
      "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80",
    category: "Địa điểm",
    date: "15 Tháng 12, 2024",
    readTime: "5 phút",
    author: "Minh Anh",
  },
  {
    id: 2,
    title: "Kinh nghiệm du lịch Thái Lan tự túc cho người mới",
    slug: "kinh-nghiem-du-lich-thai-lan",
    excerpt:
      "Tổng hợp chi tiết lịch trình, chi phí và những lưu ý quan trọng khi du lịch Thái Lan lần đầu. Đừng bỏ lỡ nhé!",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    category: "Kinh nghiệm",
    date: "10 Tháng 12, 2024",
    readTime: "8 phút",
    author: "Tuấn Tú",
  },
  {
    id: 3,
    title: "Top 5 món ăn đường phố nhất định phải thử ở Hà Nội",
    slug: "top-5-mon-an-duong-pho-ha-noi",
    excerpt:
      "Hà Nội mùa thu không chỉ đẹp mà còn ngon. Cùng lượn lờ phố cổ và thưởng thức những món ăn đặc sản nức tiếng.",
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=800&q=80",
    category: "Ẩm thực",
    date: "05 Tháng 12, 2024",
    readTime: "4 phút",
    author: "Lan Hương",
  },
  {
    id: 4,
    title: "Săn mây Tà Xùa - Hành trình chạm tay vào biển mây",
    slug: "san-may-ta-xua",
    excerpt:
      "Review chi tiết chuyến đi săn mây Tà Xùa 2 ngày 1 đêm. Những khoảnh khắc đẹp đến nao lòng giữa núi rừng Tây Bắc.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    category: "Review",
    date: "01 Tháng 12, 2024",
    readTime: "6 phút",
    author: "Đức Hùng",
  },
  {
    id: 5,
    title: "Du lịch Nhật Bản mùa lá đỏ - Những điều cần biết",
    slug: "du-lich-nhat-ban-mua-la-do",
    excerpt:
      "Mùa thu Nhật Bản đẹp như một bức tranh. Tìm hiểu thời điểm lý tưởng và những địa điểm ngắm lá đỏ đẹp nhất.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    category: "Quốc tế",
    date: "28 Tháng 11, 2024",
    readTime: "7 phút",
    author: "Thanh Hà",
  },
  {
    id: 6,
    title: "Phú Quốc - Thiên đường nghỉ dưỡng cho gia đình",
    slug: "phu-quoc-thien-duong-nghi-duong",
    excerpt:
      "Gợi ý các resort đẹp, bãi biển trong xanh và các khu vui chơi giải trí phù hợp cho chuyến du lịch gia đình tại Phú Quốc.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    category: "Nghỉ dưỡng",
    date: "20 Tháng 11, 2024",
    readTime: "5 phút",
    author: "Hoàng Nam",
  },
  {
    id: 7,
    title: "Food tour Hải Phòng 24h - Ăn gì, chơi ở đâu?",
    slug: "food-tour-hai-phong",
    excerpt:
      "Hải Phòng không lòng vòng, chỉ có ăn và ăn. List những món ngon thần thánh nhất định phải thử khi đến đất Cảng.",
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&q=80",
    category: "Ẩm thực",
    date: "18 Tháng 11, 2024",
    readTime: "4 phút",
    author: "Mai Linh",
  },
  {
    id: 9,
    title: "Bali - Hòn đảo của những ngôi đền linh thiêng",
    slug: "du-lich-bali-indonesia",
    excerpt:
      "Chia sẻ kinh nghiệm du lịch Bali tự túc: vé máy bay, khách sạn, điểm tham quan và những lưu ý văn hóa cần biết.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    category: "Quốc tế",
    date: "12 Tháng 11, 2024",
    readTime: "6 phút",
    author: "Phương Vy",
  },
  {
    id: 10,
    title: "Cắm trại tại Đà Lạt - Săn mây và ngắm bình minh",
    slug: "cam-trai-da-lat",
    excerpt:
      "Top 5 địa điểm cắm trại cực chill tại Đà Lạt. Cùng bạn bè đốt lửa trại, nướng thịt và đón bình minh tuyệt đẹp.",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    category: "Địa điểm",
    date: "08 Tháng 11, 2024",
    readTime: "5 phút",
    author: "Hải Đăng",
  },
  {
    id: 11,
    title: "Bí kíp săn vé máy bay giá rẻ cho mọi hành trình",
    slug: "bi-kip-san-ve-may-bay-gia-re",
    excerpt:
      "Những mẹo nhỏ nhưng có võ giúp bạn săn được vé máy bay giá rẻ bất ngờ. Tiết kiệm chi phí cho chuyến đi thêm trọn vẹn.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    category: "Kinh nghiệm",
    date: "05 Tháng 11, 2024",
    readTime: "4 phút",
    author: "Thu Trang",
  },
  {
    id: 12,
    title: "Six Senses Côn Đảo - Đẳng cấp nghỉ dưỡng 5 sao",
    slug: "six-senses-con-dao-review",
    excerpt:
      "Trải nghiệm kỳ nghỉ dưỡng xa hoa tại một trong những resort đẹp nhất Việt Nam. Sự riêng tư và sang trọng tuyệt đối.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    category: "Nghỉ dưỡng",
    date: "01 Tháng 11, 2024",
    readTime: "7 phút",
    author: "Ngọc Diệp",
  },
];

const ITEMS_PER_PAGE = 6;

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);

  // Categories
  const categories = [
    "Tất cả",
    "Kinh nghiệm",
    "Địa điểm",
    "Ẩm thực",
    "Review",
    "Quốc tế",
    "Nghỉ dưỡng",
  ];

  // Filter posts
  const filteredPosts =
    activeCategory === "Tất cả"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDisplayPosts = filteredPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // Reset page when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {categories.map((tag) => (
          <button
            key={tag}
            onClick={() => handleCategoryChange(tag)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === tag
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {currentDisplayPosts.length > 0 ? (
          currentDisplayPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <Link
                href={`/inspiration/${post.slug}`}
                className="relative h-60 overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute right-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold uppercase text-red-600 backdrop-blur-sm">
                  {post.category}
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-red-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-red-500" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-slate-800 transition group-hover:text-red-600">
                  <Link href={`/inspiration/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mb-6 line-clamp-3 text-sm text-slate-500">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                      <FaUser size={12} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href={`/inspiration/${post.slug}`}
                    className="text-sm font-bold text-red-600 hover:underline"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-slate-500">
            Không tìm thấy bài viết nào trong danh mục này.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex h-10 items-center justify-center rounded-lg border px-4 transition-colors ${
              currentPage === 1
                ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-red-600"
            }`}
          >
            Trước
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`h-10 w-10 rounded-lg shadow-sm transition-all ${
                currentPage === page
                  ? "bg-red-600 text-white shadow-lg hover:bg-red-700"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex h-10 items-center justify-center rounded-lg border px-4 transition-colors ${
              currentPage === totalPages
                ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-red-600"
            }`}
          >
            Tiếp
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
