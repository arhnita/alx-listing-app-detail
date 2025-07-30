import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND, FILTER_CATEGORIES } from '@/constants';
import { PropertyProps } from '@/interfaces';
import PropertyCard from '@/components/common/PropertyCard';
import Pill from '@/components/common/Pills';

const Home: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [filteredProperties, setFilteredProperties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    
    if (filter === 'All') {
      setFilteredProperties(PROPERTYLISTINGSAMPLE);
    } else {
      const filtered = PROPERTYLISTINGSAMPLE.filter(property =>
        property.category.some(cat => 
          cat.toLowerCase().includes(filter.toLowerCase()) ||
          filter.toLowerCase().includes(cat.toLowerCase())
        )
      );
      setFilteredProperties(filtered);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HERO_BACKGROUND})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl text-white font-light">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-wrap gap-4">
            <Pill
              label="All"
              isActive={selectedFilter === 'All'}
              onClick={() => handleFilterClick('All')}
            />
            {FILTER_CATEGORIES.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={selectedFilter === filter}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition">
              <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-sm text-gray-700">Filter</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProperties.length} properties found
            {selectedFilter !== 'All' && (
              <span className="ml-2">
                for <span className="font-medium">{selectedFilter}</span>
              </span>
            )}
          </p>
        </div>

        {/* Property Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={index}
              name={property.name}
              address={property.address}
              rating={property.rating}
              category={property.category}
              price={property.price}
              offers={property.offers}
              image={property.image}
              discount={property.discount}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-4">
                We could not find any properties matching {selectedFilter}. Try adjusting your filter.
              </p>
              <button
                onClick={() => handleFilterClick('All')}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Show All Properties
              </button>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-medium">
              Show more properties
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;