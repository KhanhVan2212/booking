// Types for Landing Page CMS Payload

export interface HeroSectionData {
  backgroundImage: string;
  title: string;
  highlightedText?: string;
  subtitle: string;
}

export interface ServiceItem {
  id: string;
  icon: string; // Icon name from react-icons
  title: string;
  features: string[];
  accentColor?: string; // Optional color override
}

export interface DetailedService {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServicesSectionData {
  header: {
    badge: string;
    title: string;
    divider?: boolean;
  };
  mainServices: ServiceItem[];
  detailedServices: {
    title: string;
    description: string;
    items: DetailedService[];
  };
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSectionData {
  title: string;
  features: Feature[];
}

export interface Destination {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export interface DestinationsSectionData {
  title: string;
  description: string;
  viewAllLink?: string;
  destinations: Destination[];
}

export interface FlashDeal {
  id: string;
  from: string;
  to: string;
  price: string;
  oldPrice: string;
  image: string;
  timeLeft: string;
  link?: string;
}

export interface FlashDealsSectionData {
  title: string;
  description: string;
  viewAllLink?: string;
  deals: FlashDeal[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  readTime?: string;
  link?: string;
}

export interface InspirationSectionData {
  title: string;
  description: string;
  viewAllLink?: string;
  blogs: BlogPost[];
}

export interface Airline {
  id: string;
  name: string;
  logo: string;
}

export interface AirlinePartnersData {
  badge: string;
  airlines: Airline[];
}

export interface ContactInfo {
  type: "phone" | "email" | "location";
  title: string;
  value: string;
  subtitle?: string;
}

export interface ContactSectionData {
  badge: string;
  title: string;
  description: string;
  contactInfo: ContactInfo[];
  form: {
    title: string;
    fields: {
      name: string;
      phone: string;
      email: string;
      message: string;
    };
    submitButton: string;
  };
}

export interface LandingPageCMSData {
  hero: HeroSectionData;
  services: ServicesSectionData;
  features: FeaturesSectionData;
  destinations: DestinationsSectionData;
  flashDeals: FlashDealsSectionData;
  inspiration: InspirationSectionData;
  airlinePartners: AirlinePartnersData;
  contact: ContactSectionData;
}
