"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after 2s — feels premium, not annoying
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0A3B2C]"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* brightness-0 invert makes it solid white. 
                Moved to nested img so framer-motion's filter doesn't override it */}
            <img
              src="/logo.png"
              alt="AVC ClimaVent"
              className="w-[240px] sm:w-[280px] h-auto object-contain brightness-0 invert drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            />
          </motion.div>

          {/* Thin progress line */}
          <div className="mt-12 w-[200px] h-[1px] bg-white/15 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-white/40 text-[11px] uppercase tracking-[0.35em] font-semibold"
          >
            Advanced Climate Control
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
