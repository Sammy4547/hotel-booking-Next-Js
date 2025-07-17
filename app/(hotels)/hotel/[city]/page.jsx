"use client";

import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setNewBooking } from "@/app/features/booking/bookingSlice";
import BookingStepper from "@/app/(hotels)/booking/page";
export default function HotelDetailPage() {
  const { city } = useParams();
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();
  const step = useSelector((state) => state.booking.step);
  const selectedHotel = useSelector((state) => state.booking.selectedHotel);

  useEffect(() => {
    const fetchHotels = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      const flatHotels = data.flatMap((cityData) =>
        cityData.hotels.map((hotel) => ({
          ...hotel,
          city: cityData.city,
        }))
      );

      const foundHotels = flatHotels.filter(
        (h) => h.city.toLowerCase() === city.toLowerCase()
      );
      setHotels(foundHotels);
    };

    if (city) {
      fetchHotels();
    }
  }, [city]);

  if (hotels.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-white">
        Loading or No Hotels Found
      </div>
    );
  }
  if (step >= 1 && selectedHotel) {
    return <BookingStepper />;
  }
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 dark:bg-neutral-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Hotels in {city}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105"
          >
            <img
              src={hotel.img}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {hotel.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                City: {hotel.city}
              </p>

              <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                Rooms:
              </h3>
              <ul className="space-y-1">
                {hotel.rooms.map((room, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span>{room.type}</span>
                    <span className="font-medium">₹{room.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => dispatch(setNewBooking(hotel))}
              className="bg-blue-500 p-2 m-auto bottom-0 w-full hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
