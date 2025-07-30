// components/property/PropertyDetail.tsx

import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";
import Image from "next/image";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'reviews'>('overview');

  const tabs = [
    { id: 'overview', label: 'What we offer' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="container mx-auto p-4 lg:p-6 max-w-7xl">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
          {property.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 font-semibold">★ {property.rating}</span>
            <span className="text-gray-600">({property.totalReviews} reviews)</span>
          </div>
          <div className="text-gray-600">
            {property.address.city}, {property.address.country}
          </div>
          <div className="text-gray-600">
            {property.maxGuests} guests • {property.bedrooms} bedrooms • {property.bathrooms} bathrooms
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 rounded-xl overflow-hidden">
            {/* Main Image */}
              <Image
                src={property.image}
                alt={property.name}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            {/* Additional Images */}
            {property.images && property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="hidden md:block">
                <Image
                  src={image}
                  alt={`${property.name} image ${index + 2}`}
                  width={600}
                  height={300}
                  className="w-full h-32 lg:h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Host Information */}
          <div className="flex items-center space-x-4 mb-8 p-6 bg-white rounded-lg shadow-sm border">
            <Image
              src={property.host.avatar}
              alt={property.host.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Hosted by {property.host.name}</h3>
              <p className="text-gray-600">Host since {property.host.joinedDate}</p>
              {property.host.isVerified && (
                <span className="inline-flex items-center text-sm text-green-600">
                  ✓ Verified Host
                </span>
              )}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'amenities' | 'reviews')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'overview' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-semibold mb-4">About this place</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Max Guests:</span>
                    <p className="text-gray-600">{property.maxGuests} people</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Bedrooms:</span>
                    <p className="text-gray-600">{property.bedrooms} rooms</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Bathrooms:</span>
                    <p className="text-gray-600">{property.bathrooms} baths</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-blue-600">✓</span>
                      <span className="text-gray-800">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <ReviewSection 
                reviews={property.reviews} 
                totalReviews={property.totalReviews}
                rating={property.rating}
              />
            )}
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <BookingSection 
              price={property.price}
              rating={property.rating}
              totalReviews={property.totalReviews}
            />
          </div>
        </div>
    </div>
  );
};

export default PropertyDetail;