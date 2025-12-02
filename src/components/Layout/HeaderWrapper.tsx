// components/HeaderWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './Header';

export default function HeaderWrapper({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Kiểm tra xem có phải trang chủ không
  const isHomePage = pathname === '/' || pathname === `/${locale}`;

  // Lắng nghe sự kiện cuộn chuột
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // Bạn có thể chỉnh số 10 thành 50 hoặc 100 tùy ý
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Chỉ lắng nghe khi ở trang chủ
    if (isHomePage) {
        window.addEventListener('scroll', handleScroll);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Logic quyết định: Header chỉ trong suốt khi LÀ TRANG CHỦ và CHƯA CUỘN
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <Header isTransparent={shouldBeTransparent} />
  );
}