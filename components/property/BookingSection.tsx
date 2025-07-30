// components/property/BookingSection.tsx

import { BookingSectionProps } from "@/interfaces/index";
import { useState } from "react";

const BookingSection: React.FC<BookingSectionProps> = ({ price, rating, totalReviews }) => {
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);

  // Calculate number of nights and total cost
  const calculateNights = (): number => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const subtotal = nights * price;
  const serviceFee = subtotal * 0.1; // 10% service fee
  const taxes = subtotal * 0.08; // 8% taxes
  const total = subtotal + serviceFee + taxes;

  // Get today's date for min date validation
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 max-w-sm mx-auto lg:max-w-none">
      {/* Price and Rating Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-1">/ night</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500 font-semibold">★ {rating}</span>
          <span className="text-gray-600 text-sm">({totalReviews})</span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="space-y-4">
        {/* Date Selection */}
        <div className="grid grid-cols-2 gap-2 border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-3 border-r border-gray-300">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              CHECK-IN
            </label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={today}
              className="w-full text-sm text-gray-900 bg-transparent border-none outline-none"
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              CHECK-OUT
            </label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate || today}
              className="w-full text-sm text-gray-900 bg-transparent border-none outline-none"
            />
          </div>
        </div>

        {/* Guests Selection */}
        <div className="border border-gray-300 rounded-lg p-3">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            GUESTS
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full text-sm text-gray-900 bg-transparent border-none outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        {/* Reserve Button */}
        <button 
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
          disabled={!checkInDate || !checkOutDate || nights <= 0}
        >
          {!checkInDate || !checkOutDate ? 'Check availability' : 'Reserve'}
        </button>

        {/* Cost Breakdown */}
        {nights > 0 && (
          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>${price} × {nights} {nights === 1 ? 'night' : 'nights'}</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Service fee</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-bold text-lg text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">You won&#39;t be charged yet</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;