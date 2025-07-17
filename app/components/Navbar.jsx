"use client";

import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-indigo-500 transition-colors"
        >
          Travelify
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-indigo-500 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/hotel"
            className="hover:text-indigo-500 transition-colors font-medium"
          >
            Hotels
          </Link>
          <Link
            href="/about"
            className="hover:text-indigo-500 transition-colors font-medium"
          >
            About
          </Link>

          <Link
            href="/login"
            className="hover:text-indigo-500 transition-colors font-medium"
          >
            Login
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
