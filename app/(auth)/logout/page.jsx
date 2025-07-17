"use client";

import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/login");
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.log("Error in logout request", error);
    }
  };

  return (
    <div className="mt-15">
           <Button variant="outlined" color="error" onClick={handleLogout}>
      Logout
    </Button>
    </div>
  );
}
