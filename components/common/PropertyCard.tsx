import React from 'react';
import { PropertyProps } from '@/interfaces';

const PropertyCard: React.FC<PropertyProps> = ({ 
  name, 
  address, 
  rating, 
  category, 
  price, 
  offers, 
  image, 
  discount 
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative">
        <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
            }}
          />
          {discount && (
            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-sm font-medium">
              {discount}% off
            </div>
          )}
          <button className="absolute top-3 right-3 p-2 hover:bg-white hover:bg-opacity-80 rounded-full transition">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-900 font-medium truncate">{name}</h3>
          <div className="flex items-center space-x-1">
            <svg className="h-4 w-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-900 font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mt-1">
          {address.city}, {address.state}, {address.country}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {category.slice(0, 2).map((cat, index) => (
            <span 
              key={index}
              className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
          {category.length > 2 && (
            <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              +{category.length - 2}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm16 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2h14z" />
              </svg>
              <span>{offers.bed}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
              </svg>
              <span>{offers.shower}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span>{offers.occupants}</span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-baseline">
            <span className="text-lg font-semibold text-gray-900">${price.toLocaleString()}</span>
            <span className="text-gray-500 text-sm ml-1">night</span>
          </div>
          {discount && (
            <p className="text-sm text-green-600 font-medium">
              Save {discount}% with this offer
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;