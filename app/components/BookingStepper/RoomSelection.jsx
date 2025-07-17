import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoomType, nextStep } from "../../features/booking/bookingSlice";

export default function RoomSelection({ hotel }) {
  const dispatch = useDispatch();
  const selectedRoomType = useSelector((state) => state.booking.selectedRoomType);

  const handleRoomSelect = (i) => {
    dispatch(setRoomType(i));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6 text-gray-800">
      <h2 className="text-2xl font-semibold text-center">
        Select a room at <span className="text-blue-600">{hotel.name}</span>
      </h2>

      <div className="grid gap-4">
        {hotel.rooms.map((room, i) => (
          <label
            key={i}
            className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition-all
              ${selectedRoomType === i
                ? "bg-blue-50 border-blue-500 ring-2 ring-blue-300"
                : "hover:bg-gray-50 border-gray-300"}
            `}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="room"
                value={i}
                checked={selectedRoomType === i}
                onChange={() => handleRoomSelect(i)}
                className="w-5 h-5 text-blue-600"
              />
              <div>
                <p className="font-medium">{room.type}</p>
                <p className="text-sm text-gray-500">₹{room.price}</p>
              </div>
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={() => dispatch(nextStep())}
        disabled={selectedRoomType === null}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
