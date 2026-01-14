"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}