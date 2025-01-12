'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface BrushStrokeHighlightProps {
    children: React.ReactNode;
    color?: string;
}

const BrushStrokeHighlight: React.FC<BrushStrokeHighlightProps> = ({ children, color = "#B87D4B" }) => {
  return (
    <div className="relative inline-block">
      {/* Text Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Brush Stroke SVG */}
      <motion.svg
        viewBox="0 0 2000 200"  // Made viewBox wider and taller
        className="absolute left-0 top-4 w-full h-full -z-[1]"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          // Inverted and elongated path
          d="M10,100 C5,150 300,160 1990,150 C600,140 750,120 1990,130"
          fill="none"
          stroke={color}
          strokeWidth="40"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default BrushStrokeHighlight;