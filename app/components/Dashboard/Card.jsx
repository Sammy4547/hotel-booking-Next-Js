'use client';

import React from "react";
import { motion } from "framer-motion";

export default function Card({ name, desc }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(30, 144, 255, 0.8)", 
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="p-6 bg-neutral-100 dark:bg-neutral-700 rounded-xl shadow-md"
    >
      <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">
        {name}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300">
        {desc}
      </p>
    </motion.div>
  );
}
