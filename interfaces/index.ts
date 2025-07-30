// interfaces/index.ts

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  rating: number;
}

export interface CardProps {
  property: Property;
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

// Updated PropertyProps interface to match PropertyDetail component requirements
export interface PropertyProps {
  id: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  images?: string[];
  description: string;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    joinedDate: string;
    isVerified: boolean;
  };
  reviews: Review[];
  totalReviews: number;
  offers?: {
    bed: string;
    shower: string;
    occupants: string;
  };
  discount?: string;
}

export interface BookingSectionProps {
  price: number;
  rating: number;
  totalReviews: number;
}

export interface ReviewSectionProps {
  reviews: Review[];
  totalReviews: number;
  rating: number;
}