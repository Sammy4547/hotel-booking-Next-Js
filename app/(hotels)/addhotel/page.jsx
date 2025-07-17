"use client";

import React, { useState } from "react";

export default function AddHotelPage() {
  const [hotelName, setHotelName] = useState("");
  const [cityName, setCityName] = useState("");
  const [bedType, setBedType] = useState("single");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [hotels, setHotels] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHotel = {
      id: Date.now(),
      hotelName,
      cityName,
      bedType,
      price,
      image: image ? URL.createObjectURL(image) : null,
    };

    setHotels([...hotels, newHotel]);

    setHotelName("");
    setCityName("");
    setBedType("single");
    setPrice("");
    setImage(null);

    setShowForm(false);
  };

  const handleRemove=(id)=>{
    setHotels(hotels.filter((hotel)=>hotel.id!== id))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-neutral-100 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold mb-6 text-neutral-800 dark:text-white">
        Fake Hotel Management
      </h1>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        {showForm ? "Close Form" : "Add Hotel"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white dark:bg-neutral-800 p-6 rounded-lg shadow space-y-4 mb-10"
        >
          <input
            type="text"
            placeholder="Hotel Name"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            className="input"
            required
          />

          <input
            type="text"
            placeholder="City Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            className="input"
            required
          />

          <select
            value={bedType}
            onChange={(e) => setBedType(e.target.value)}
            className="input"
          >
            <option value="single">Single</option>
            <option value="double">Double</option>
          </select>

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="input"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
          >
            Add Hotel
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow"
          >
            {hotel.image && (
              <img
                src={hotel.image}
                alt={hotel.hotelName}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
            )}
            <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
              {hotel.hotelName}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              {hotel.cityName}
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Bed Type: {hotel.bedType}
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Price: ₹{hotel.price}
            </p>
            <button onClick={()=>handleRemove(hotel.id)} className="mb-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
