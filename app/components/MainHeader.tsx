'use client'

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="relative text-center space-y-6">
      {/* Decorative SVG Animation */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          className="w-full h-full opacity-20"
        >
          <path
            d="M0,200 C200,100 400,300 800,200"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#4CAF50" }} />
              <stop offset="100%" style={{ stopColor: "#3F51B5" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Striking Quote with Highlight */}
      <motion.h1
        className="text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Building the{" "}
        <motion.span
          className="text-primary"
          initial={{ backgroundSize: "100% 0" }}
          animate={{ backgroundSize: "100% 100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            backgroundImage: "linear-gradient(120deg, #4CAF50, #3F51B5)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          future
        </motion.span>{" "}
        one line of code at a time.
      </motion.h1>

      {/* Subtext */}
      <p className="text-muted-foreground">
        Explore my projects, experience, and the tools I love.
      </p>

      {/* Decorative Icon */}
      <div className="flex justify-center">
        <motion.div
          className="bg-primary/10 p-2 rounded-full"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Code2 className="text-primary h-6 w-6" />
        </motion.div>
      </div>
    </header>
  );
}
