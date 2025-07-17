import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetBooking } from "../../features/booking/bookingSlice";
import Link from 'next/link'

export default function Confirmation() {
  const dispatch = useDispatch();

  const selectedHotel = useSelector((state) => state.booking.selectedHotel);
  console.log("Selected Hotel",selectedHotel);
  
  const selectedRoomType = useSelector((state) => state.booking.selectedRoomType);
  
  const userDetails = useSelector((state) => state.booking.userDetails);
  const guests = useSelector((state) => state.booking.guests);

  const room=selectedHotel.rooms[selectedRoomType]
  



  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
        🎉 Booking Confirmed!
      </h2>

      <div className="text-lg leading-relaxed space-y-2">
        <p>
          Thank you, <span className="font-semibold">{userDetails?.name || "Guest"}</span>!
        </p>
        <p>
          Your booking at{" "}
          <span className="text-blue-600 font-semibold">{selectedHotel?.name || "N/A"}</span> is confirmed.
        </p>
        <p>
          <span className="font-medium">Room Type:</span> {room.type || "N/A"}
        </p>
        <p>
          <span className="font-medium">Guests:</span> {guests}
        </p>
        <p>
          <span className="font-medium">Email:</span> {userDetails?.email || "N/A"}
        </p>
      </div>

      <Link
      href='/'
        onClick={() => dispatch(resetBooking())}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
