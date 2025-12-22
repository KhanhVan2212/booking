// lib/getImageUrl.ts

interface MediaObject {
  url?: string;
  alt?: string;
  filename?: string;
}

interface ImageSource {
  featuredImage?: MediaObject | string;
  imageUrl?: string;
  image?: MediaObject | string;
}

/**
 * Get image URL from various PayloadCMS image formats
 */
export const getImageUrl = (
  source: ImageSource,
  fallback?: string
): string => {
  // Priority 1: featuredImage (upload object)
  if (source.featuredImage) {
    if (typeof source.featuredImage === 'object' && source.featuredImage.url) {
      return source.featuredImage.url;
    }
    if (typeof source.featuredImage === 'string') {
      return source.featuredImage;
    }
  }

  // Priority 2: image field (for gallery items)
  if (source.image) {
    if (typeof source.image === 'object' && source.image.url) {
      return source.image.url;
    }
    if (typeof source.image === 'string') {
      return source.image;
    }
  }

  // Priority 3: imageUrl (direct URL string)
  if (source.imageUrl) {
    return source.imageUrl;
  }

  // Fallback
  return fallback || 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
};

/**
 * Get alt text from media object
 */
export const getImageAlt = (
  source: ImageSource,
  fallback: string = 'Image'
): string => {
  if (source.featuredImage && typeof source.featuredImage === 'object') {
    return source.featuredImage.alt || fallback;
  }

  if (source.image && typeof source.image === 'object') {
    return source.image.alt || fallback;
  }

  return fallback;
};

/**
 * Get responsive image sizes for Next.js Image
 */
export const getImageSizes = (variant: 'hero' | 'card' | 'thumbnail' | 'gallery') => {
  switch (variant) {
    case 'hero':
      return {
        width: 2000,
        height: 1200,
        sizes: '100vw',
      };
    case 'card':
      return {
        width: 800,
        height: 600,
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
      };
    case 'thumbnail':
      return {
        width: 400,
        height: 300,
        sizes: '(max-width: 640px) 50vw, 25vw',
      };
    case 'gallery':
      return {
        width: 800,
        height: 600,
        sizes: '(max-width: 768px) 100vw, 50vw',
      };
    default:
      return {
        width: 800,
        height: 600,
        sizes: '100vw',
      };
  }
};