"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { startTransition } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "sv", label: "Svenska" },
  { code: "tr", label: "Türkçe" },
  { code: "el", label: "Ελληνικά" },
  { code: "ru", label: "Русский" },
  { code: "ar", label: "العربية" },
  { code: "hi", label: "हिन्दी" },
  { code: "th", label: "ไทย" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

export default function PickerLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Selective preloading: preload locale file when user hovers
  const handlePreloadLocale = (lang: string) => {
    if (locale === lang) return;

    // Prefetch the locale file in the background
    if (typeof window !== "undefined") {
      import(`@/locales/${lang}.json`).catch(() => {
        // Silently fail if preload doesn't work
      });
    }
  };

  const handlePickLanguage = (lang: string) => {
    if (locale == lang) return;

    // Use startTransition to keep UI responsive during language switch
    startTransition(() => {
      router.push(pathname, { locale: lang });
      router.refresh();
    });
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="p-2">
        <Image
          src="/images/icons/globe.svg"
          alt="globe"
          width={24}
          height={24}
          priority
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="grid grid-cols-2 rounded-[20px] border border-solid border-white bg-[rgba(243,248,255,0.40)] px-4 py-2 shadow-[0_4px_12px_0_rgba(0,30,75,0.12)] backdrop-blur-md sm:grid-cols-3 md:grid-cols-4"
      >
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => handlePickLanguage(lang.code)}
            onMouseEnter={() => handlePreloadLocale(lang.code)}
            className={`flex h-10 cursor-pointer items-center rounded-md px-3 hover:bg-black/5 ${locale === lang.code ? "bg-black/10 font-medium" : ""
              }`}
          >
            <p className="text-sm font-light uppercase text-black">
              {lang.label}
            </p>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
