"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewBooking } from "../../features/booking/bookingSlice";
import BookingStepper from "../booking/page";
import { motion } from "framer-motion";

export default function HotelsPage() {
  const step = useSelector((state) => state.booking.step);
  const selectedHotel = useSelector((state) => state.booking.selectedHotel);
  const dispatch = useDispatch();

  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();

        const flatHotels = data.flatMap((city) =>
          city.hotels.map((hotel) => ({
            ...hotel,
            city: city.city,
          }))
        );

        setHotels(flatHotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-100 dark:bg-neutral-900">
        <p className="text-xl font-semibold animate-pulse text-gray-600 dark:text-gray-300">
          Loading hotels...
        </p>
      </div>
    );
  }

  if (step >= 1 && selectedHotel) {
    return <BookingStepper />;
  }

  return (
    <div className="dark:bg-neutral-900 max-w-7xl mx-auto px-6 py-10 bg-neutral-100 min-h-screen mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center tracking-wide text-neutral-800 dark:text-white">
        Hotels List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col cursor-pointer"
          >
            <img
              src={hotel.img}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col flex-grow justify-between p-5">
              <div>
                <h2 className="font-semibold text-lg text-neutral-800 dark:text-white">
                  {hotel.name}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {hotel.city}
                </p>

                <div className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {hotel.rooms.map((room, id) => (
                    <div key={id} className="flex justify-between items-center">
                      <span className="px-2 py-1 font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                        {room.type}
                      </span>
                      <span className="px-2 py-1 font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200">
                        ₹{room.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => dispatch(setNewBooking(hotel))}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 w-full transition rounded-none dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
