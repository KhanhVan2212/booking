import { defineRouting } from "next-intl/routing";

export const locales = [
  "vi", // Vietnamese - Vietnam
  "en", // English - United States
  "zh", // Chinese - China
  "es", // Spanish - Spain
  "hi", // Hindi - India
  "ar", // Arabic - Saudi Arabia
  "pt", // Portuguese - Brazil
  "ru", // Russian - Russia
  "ja", // Japanese - Japan
  "de", // German - Germany
  "fr", // French - France
  "id", // Indonesian - Indonesia
  "ko", // Korean - South Korea
  "it", // Italian - Italy
  "tr", // Turkish - Turkey
  "nl", // Dutch - Netherlands
  "th", // Thai - Thailand
  "sv", // Swedish - Sweden
  "pl", // Polish - Poland
  "el", // Greek - Greece
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "en",
  localeDetection: true,
});
