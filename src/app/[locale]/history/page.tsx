// app/history/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    FaPlane, FaClock, FaTicket, FaPlaneDeparture, FaPlaneArrival, 
    FaCircleCheck, FaMagnifyingGlass, FaPassport, FaEnvelope, FaArrowRight 
} from 'react-icons/fa6';

// --- MOCK DATA ---
const myBookings = [
    {
        id: 'XJF892',
        status: 'upcoming',
        from: 'Hà Nội (HAN)',
        to: 'TP. Hồ Chí Minh (SGN)',
        date: '24 Th10, 2023',
        time: '06:00',
        airline: 'Vietnam Airlines',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Vietnam_Airlines_Logo_%282002-2015%29.svg/2560px-Vietnam_Airlines_Logo_%282002-2015%29.svg.png',
        price: '1.850.000đ'
    },
    {
        id: 'AB9921',
        status: 'completed',
        from: 'Đà Nẵng (DAD)',
        to: 'Hà Nội (HAN)',
        date: '15 Th08, 2023',
        time: '14:30',
        airline: 'VietJet Air',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/VietJet_Air_logo.svg/1200px-VietJet_Air_logo.svg.png',
        price: '980.000đ'
    },
    {
        id: 'CC8812',
        status: 'cancelled',
        from: 'Hà Nội (HAN)',
        to: 'Phú Quốc (PQC)',
        date: '01 Th06, 2023',
        time: '09:15',
        airline: 'Bamboo Airways',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bamboo_Airways_logo_2019.svg/2560px-Bamboo_Airways_logo_2019.svg.png',
        price: '1.500.000đ'
    }
];

// --- HELPER COMPONENT: Status Badge ---
const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
        case 'upcoming':
            return <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><FaClock className="text-[10px]" /> Sắp khởi hành</span>;
        case 'completed':
            return <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><FaCircleCheck className="text-[10px]" /> Đã hoàn thành</span>;
        case 'cancelled':
            return <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">Đã hủy</span>;
        default: return null;
    }
};

// --- HELPER COMPONENT: Booking Card (Tái sử dụng) ---
const BookingCard = ({ booking }: { booking: any }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm font-medium">Mã đặt chỗ:</span>
                <span className="text-slate-800 font-bold font-mono">{booking.id}</span>
            </div>
            <StatusBadge status={booking.status} />
        </div>
        <div className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-auto flex justify-start">
                    <img src={booking.logo} alt={booking.airline} className="h-10 w-auto object-contain" />
                </div>
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold text-slate-800">{booking.time}</div>
                        <div className="text-sm font-semibold text-slate-600 flex items-center justify-center md:justify-start gap-1">
                            <FaPlaneDeparture className="text-slate-400" /> {booking.from.split('(')[1].replace(')', '')}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">{booking.date}</div>
                    </div>
                    <div className="hidden md:flex flex-col items-center">
                        <span className="text-xs text-slate-400 mb-1">Bay thẳng</span>
                        <div className="w-full h-[2px] bg-slate-200 relative flex items-center">
                            <div className="w-2 h-2 bg-slate-300 rounded-full absolute left-0"></div>
                            <FaPlane className="text-slate-300 mx-auto transform rotate-90" />
                            <div className="w-2 h-2 bg-slate-300 rounded-full absolute right-0"></div>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="text-2xl font-bold text-slate-800">08:15</div>
                        <div className="text-sm font-semibold text-slate-600 flex items-center justify-center md:justify-end gap-1">
                            {booking.to.split('(')[1].replace(')', '')} <FaPlaneArrival className="text-slate-400" />
                        </div>
                        <div className="text-xs text-slate-400 mt-1">{booking.date}</div>
                    </div>
                </div>
                <div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 flex flex-row md:flex-col justify-between md:justify-center items-center gap-2">
                    <div className="text-lg font-bold text-orange-600">{booking.price}</div>
                    <Link href="/history/detail" className="bg-white border border-sky-600 text-sky-600 hover:bg-sky-50 px-4 py-2 rounded-lg text-sm font-bold transition whitespace-nowrap">
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default function BookingHistoryPage() {
  const [viewMode, setViewMode] = useState<'my-bookings' | 'lookup'>('my-bookings');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // State cho phần tra cứu
  const [searchCode, setSearchCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [foundBooking, setFoundBooking] = useState<any>(null);

  // Logic lọc cho "My Bookings"
  const filteredBookings = activeFilter === 'all' 
    ? myBookings 
    : myBookings.filter(b => b.status === activeFilter);

  // Giả lập tra cứu
  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setFoundBooking(null);

    // Giả vờ API call mất 1.5 giây
    setTimeout(() => {
        setIsSearching(false);
        // Tìm thử trong mock data xem có khớp ID không
        const result = myBookings.find(b => b.id === searchCode.toUpperCase());
        if (result) {
            setFoundBooking(result);
        } else {
            alert('Không tìm thấy mã đặt chỗ này (Thử nhập XJF892)');
        }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        
        {/* --- 1. MAIN SWITCH TAB --- */}
        <div className="flex justify-center mb-8">
            <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex relative">
                <button
                    onClick={() => setViewMode('my-bookings')}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                        viewMode === 'my-bookings' 
                        ? 'bg-sky-600 text-white shadow-md' 
                        : 'text-slate-500 hover:text-sky-600'
                    }`}
                >
                    <FaTicket /> Chuyến đi của tôi
                </button>
                <button
                    onClick={() => setViewMode('lookup')}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                        viewMode === 'lookup' 
                        ? 'bg-sky-600 text-white shadow-md' 
                        : 'text-slate-500 hover:text-sky-600'
                    }`}
                >
                    <FaMagnifyingGlass /> Tra cứu đặt chỗ
                </button>
            </div>
        </div>

        {/* --- 2. VIEW MODE: MY BOOKINGS --- */}
        {viewMode === 'my-bookings' && (
            <div className="animate-fade-in">
                {/* Filters */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-800">Danh sách vé đã mua</h2>
                    <div className="bg-white p-1 rounded-lg border border-slate-200 inline-flex shadow-sm">
                        {['all', 'upcoming', 'completed', 'cancelled'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveFilter(tab)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
                                    activeFilter === tab 
                                    ? 'bg-sky-100 text-sky-700' 
                                    : 'text-slate-500 hover:bg-slate-50'
                                }`}
                            >
                                {tab === 'all' ? 'Tất cả' : tab === 'upcoming' ? 'Sắp đi' : tab === 'completed' ? 'Đã đi' : 'Đã hủy'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* List */}
                <div className="space-y-6">
                    {filteredBookings.map((booking) => (
                        <BookingCard key={booking.id} booking={booking} />
                    ))}
                     {filteredBookings.length === 0 && (
                        <div className="text-center py-12 text-slate-400">Không có dữ liệu.</div>
                    )}
                </div>
            </div>
        )}

        {/* --- 3. VIEW MODE: LOOKUP FORM --- */}
        {viewMode === 'lookup' && (
            <div className="animate-fade-in max-w-2xl mx-auto">
                
                {/* Lookup Form Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            <FaMagnifyingGlass />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800">Tra cứu thông tin vé</h2>
                        <p className="text-slate-500 mt-2">Nhập mã đặt chỗ và thông tin cá nhân để tìm kiếm.</p>
                    </div>

                    <form onSubmit={handleLookup} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Mã đặt chỗ <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        value={searchCode}
                                        onChange={(e) => setSearchCode(e.target.value.toUpperCase())}
                                        placeholder="VD: XJF892" 
                                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none font-mono uppercase placeholder:normal-case"
                                        required
                                    />
                                    <FaTicket className="absolute left-3.5 top-3.5 text-slate-400" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Email đặt vé hoặc Họ tên <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="VD: nguyenvana@gmail.com" 
                                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
                                        required
                                    />
                                    <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-400" />
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSearching}
                            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-600/20 transition transform hover:-translate-y-0.5 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSearching ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Đang tìm kiếm...
                                </>
                            ) : (
                                <>Tra cứu ngay <FaArrowRight /></>
                            )}
                        </button>
                    </form>
                </div>

                {/* Result Section */}
                {foundBooking && (
                    <div className="mt-8 animate-fade-in-up">
                        <div className="flex items-center gap-2 mb-4 text-green-600 font-bold bg-green-50 p-3 rounded-lg border border-green-100">
                             <FaCircleCheck /> Đã tìm thấy 1 kết quả phù hợp:
                        </div>
                        <BookingCard booking={foundBooking} />
                    </div>
                )}
            </div>
        )}

      </div>
    </main>
  );
}