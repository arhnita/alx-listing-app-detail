import { PropertyProps } from "@/interfaces";

export const BUTTON_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
};

export const APP_INFO = {
  NAME: 'ALX Listing App',
  CURRENCY: 'USD',
};

export const API_URL = 'http://localhost:3000/api';


export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "luxury-villa-miami",
    rating: 4.8,
    address: {
      street: "123 Ocean Drive",
      city: "Miami",
      state: "Florida",
      country: "United States",
      zipCode: "33139"
    },
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
    ],
    description: "Experience luxury living in this stunning Miami villa with breathtaking ocean views. This modern masterpiece features floor-to-ceiling windows, a private infinity pool, and direct beach access. Perfect for those seeking the ultimate in comfort and style.",
    category: ["Luxury", "Beachfront", "Modern"],
    price: 450,
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: [
      "WiFi",
      "Pool",
      "Beach Access",
      "Kitchen",
      "Parking",
      "Air Conditioning",
      "Ocean View",
      "Balcony",
      "Gym",
      "Hot Tub"
    ],
    host: {
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      joinedDate: "2019",
      isVerified: true
    },
    reviews: [
      {
        id: "1",
        name: "John Smith",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Absolutely stunning property! The ocean views were incredible and the villa exceeded all expectations. Maria was an excellent host.",
        date: "2024-01-15"
      },
      {
        id: "2",
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b147?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Perfect location and beautifully designed space. The infinity pool was amazing and the beach access made our vacation unforgettable.",
        date: "2024-01-10"
      },
      {
        id: "3",
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        comment: "Great villa with excellent amenities. The only minor issue was parking, but overall highly recommend!",
        date: "2024-01-05"
      }
    ],
    totalReviews: 127,
    offers: {
      bed: "4 bedrooms",
      shower: "3 bathrooms", 
      occupants: "8 guests"
    },
    discount: "15% off"
  },
  {
    id: "2",
    name: "cozy-apartment-nyc",
    rating: 4.6,
    address: {
      street: "456 Broadway",
      city: "New York",
      state: "New York",
      country: "United States",
      zipCode: "10013"
    },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop"
    ],
    description: "Charming studio apartment in the heart of SoHo. This beautifully designed space combines modern amenities with classic New York charm. Walking distance to the best restaurants, galleries, and shopping in the city.",
    category: ["Urban", "Modern", "Central"],
    price: 180,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [
      "WiFi",
      "Kitchen",
      "Air Conditioning",
      "Heating",
      "TV",
      "Workspace",
      "Elevator",
      "City View"
    ],
    host: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      joinedDate: "2020",
      isVerified: true
    },
    reviews: [
      {
        id: "4",
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Perfect location in SoHo! The apartment was exactly as described and David was very responsive.",
        date: "2024-01-20"
      },
      {
        id: "5",
        name: "James Brown",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        rating: 4,
        comment: "Great place for exploring NYC. Clean, comfortable, and well-located.",
        date: "2024-01-18"
      }
    ],
    totalReviews: 89,
    offers: {
      bed: "1 bedroom",
      shower: "1 bathroom",
      occupants: "2 guests"
    },
    discount: "10% off"
  },
  {
    id: "3",
    name: "beach-house-malibu",
    rating: 4.9,
    address: {
      street: "789 Pacific Coast Highway",
      city: "Malibu",
      state: "California",
      country: "United States",
      zipCode: "90265"
    },
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c786?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    ],
    description: "Spectacular oceanfront beach house with panoramic Pacific Ocean views. This contemporary retreat features an open-plan design, private beach access, and stunning sunset views. The perfect escape for a relaxing getaway.",
    category: ["Beachfront", "Luxury", "Scenic"],
    price: 680,
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: [
      "WiFi",
      "Beach Access",
      "Ocean View",
      "Kitchen",
      "Parking",
      "Air Conditioning",
      "Deck",
      "Fire Pit",
      "BBQ Grill",
      "Outdoor Shower"
    ],
    host: {
      name: "Jennifer Lopez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      joinedDate: "2018",
      isVerified: true
    },
    reviews: [
      {
        id: "6",
        name: "Robert Davis",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Absolutely magical! The sunsets from the deck were incredible. Jennifer was an amazing host.",
        date: "2024-01-25"
      },
      {
        id: "7",
        name: "Lisa Anderson",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        comment: "Dream beach house! Every detail was perfect and the location couldn't be better.",
        date: "2024-01-22"
      }
    ],
    totalReviews: 156,
    offers: {
      bed: "3 bedrooms",
      shower: "2 bathrooms",
      occupants: "6 guests"
    },
    discount: "20% off"
  }
];

export const HERO_BACKGROUND = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

export const FILTER_CATEGORIES = [
  "Top Villa",
  "Self Checkin", 
  "Free Parking",
  "Mountain View",
  "Pet Friendly",
  "Beachfront",
  "City Center",
  "Private Pool"
];

