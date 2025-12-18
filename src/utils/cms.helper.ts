import { LandingPageCMSData } from "@/types/landing-page.types";
import landingPageData from "@/data/landing-page.payload.json";

// Helper function to get landing page CMS data
export const getLandingPageData = (): LandingPageCMSData => {
  return landingPageData as LandingPageCMSData;
};

// Icon mapping helper - maps icon name strings to actual icon components
// Note: This should be imported where needed since we can't dynamically import in static context
export const iconMap: Record<string, any> = {
  FaPlane: () => import("react-icons/fa6").then((m) => m.FaPlane),
  FaUmbrellaBeach: () => import("react-icons/fa6").then((m) => m.FaUmbrellaBeach),
  FaMicrophoneLines: () => import("react-icons/fa6").then((m) => m.FaMicrophoneLines),
  FaHandHoldingHeart: () => import("react-icons/fa6").then((m) => m.FaHandHoldingHeart),
  FaPassport: () => import("react-icons/fa6").then((m) => m.FaPassport),
  FaRotate: () => import("react-icons/fa6").then((m) => m.FaRotate),
  FaCheckToSlot: () => import("react-icons/fa6").then((m) => m.FaCheckToSlot),
  FaSuitcaseRolling: () => import("react-icons/fa6").then((m) => m.FaSuitcaseRolling),
  FaTicket: () => import("react-icons/fa6").then((m) => m.FaTicket),
  FaHeadset: () => import("react-icons/fa6").then((m) => m.FaHeadset),
  FaSackDollar: () => import("react-icons/fa6").then((m) => m.FaSackDollar),
  FaPlaneCircleCheck: () => import("react-icons/fa6").then((m) => m.FaPlaneCircleCheck),
  FaHandshake: () => import("react-icons/fa6").then((m) => m.FaHandshake),
  FaPhone: () => import("react-icons/fa6").then((m) => m.FaPhone),
  FaEnvelope: () => import("react-icons/fa6").then((m) => m.FaEnvelope),
  FaLocationDot: () => import("react-icons/fa6").then((m) => m.FaLocationDot),
  FaPaperPlane: () => import("react-icons/fa6").then((m) => m.FaPaperPlane),
};
