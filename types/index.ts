export interface Photo {
  id: string;
  title: string;
  photographer: string;
  photographerAvatar: string;
  category: 'wedding' | 'festival' | 'sports' | 'portrait' | 'nature';
  date: string;
  location: string;
  price: number;
  tags: string[];
  formats: PhotoFormat[];
  width: number;
  height: number;
  blurDataURL: string;
  // Unsplash image identifiers
  unsplashId: string;
  featured?: boolean;
  sold?: number;
}

export interface PhotoFormat {
  id: string;
  name: string;
  description: string;
  price: number;
  resolution?: string;
}

export interface CartItem {
  photo: Photo;
  format: PhotoFormat;
  quantity: number;
}

export interface FilterState {
  category: string;
  photographer: string;
  dateFrom: string;
  dateTo: string;
  sort: 'newest' | 'oldest' | 'price-asc' | 'price-desc' | 'popular';
  search: string;
}

export interface Photographer {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  photoCount: number;
}

export interface SportEvent {
  id: string;
  title: string;
  unsplashId: string;
  date: string;
  location: string;
  author: string;
  photoCount: number;
}
