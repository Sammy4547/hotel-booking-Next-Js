"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Stepper from "../../components/BookingStepper/Stepper";
import UserDetails from "../../components/BookingStepper/UserDetails";
import Payment from "../../components/BookingStepper/Payment";
import Confirmation from "../../components/BookingStepper/Confirmation";
import RoomSelection from "../../components/BookingStepper/RoomSelection";

export default function BookingStepper() {
  const step = useSelector((state) => state.booking.step);

  const selectedHotel = useSelector((state) => state.booking.selectedHotel);

  if (!selectedHotel) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">No hotel selected for booking.</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 relative">
        <Stepper />

        <div className="min-h-[250px]">
          {step === 1 && <RoomSelection hotel={selectedHotel} />}
          {step === 2 && <UserDetails />}
          {step === 3 && <Payment hotel={selectedHotel} />}
          {step === 4 && <Confirmation hotel={selectedHotel} />}

          {(step < 1 || step > 4) && (
            <p className="text-center text-gray-500">Invalid booking step.</p>
          )}
        </div>
      </div>
    </div>
  );
}
