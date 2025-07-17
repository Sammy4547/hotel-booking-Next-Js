import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1, 
  selectedHotel: null,
  userDetails: {
    name: "",
    email: "",
  },
  selectedRoomType: null, // "single", "double" etc.
  guests: 1, // Number of guests
  hotels: [], // Fetched hotels list
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step < 4) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    resetBooking: (state) => {
      state.step = 1;
      state.selectedHotel = null;
      state.selectedRoomType = null;
      state.guests = 1;
    },
    setRooms:(state,action)=>{
      state.selectedRoomDetails=action.payload
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setHotel: (state, action) => {
      state.selectedHotel = action.payload;
    },
    setRoomType: (state, action) => {
      state.selectedRoomType = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    setNewBooking: (state, action) => {
      state.step = 1;
      state.selectedHotel = action.payload;
      state.selectedRoomType = null;
      state.guests = 1;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  nextStep,
  prevStep,
  resetBooking,
  setStep,
  setHotel,
  setRoomType,
  setRooms,
  setGuests,
  setHotels,
  setLoading,
  setError,
  setUserDetails,
  setNewBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
