"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Autocomplete, TextField, Button, Box } from "@mui/material";

const citySuggestions = [
  "Mumbai",
  "Delhi",
  "Ahmedabad",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Goa"
];

export default function SearchBar() {
  const [selectedCity, setSelectedCity] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (selectedCity?.trim()) {
      router.push(`/hotel/${encodeURIComponent(selectedCity.trim())}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
        gap: 2,
      }}
    >
      <Autocomplete
        options={citySuggestions}
        value={selectedCity}
        onChange={(event, newValue) => setSelectedCity(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            className="text-white border-amber-50"
            label="Search Hotels by City"
            variant="outlined"
          />
        )}
        sx={{ width: 300 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ height: "56px" }}
      >
        Search
      </Button>
    </Box>
  );
}
