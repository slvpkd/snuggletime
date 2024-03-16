"use client";
import { AppDataProvider } from "@/context";
import { motion } from "framer-motion";
import { Metadata } from "next";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

// export const metadata: Metadata = {
//   title: "Snuggletime AI",
//   description: "An AI Enhanced Childrens Storyteller",
// };

export default function Template({ children }: { children: React.ReactNode }) {
  return (
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
  );
}
