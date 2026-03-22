"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { useRef } from "react";
import DrivingScene from "./DrivingScene";

export default function Hero() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-[#0A3B2C]">
      
      {/* ═══════════════════════════════════════════════
          HERO VIDEO BLOCK - Fullscreen
      ════════════════════════════════════════════════ */}
      <div className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center">
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {/* Fallback background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2500')] bg-cover bg-center"></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0A3B2C]/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B2C] via-transparent to-black/40 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20 w-full flex flex-col items-start justify-center text-white h-full pt-28 md:pt-36 pb-16">
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            className="max-w-4xl flex flex-col items-start gap-4 sm:gap-8"
          >
            {/* Location Badge */}
            <motion.div 
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex items-center gap-3 font-mono border border-white/20 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t('hero_location')}
            </motion.div>
            
            {/* Big Heading */}
            <motion.h1 
              initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-light tracking-tight leading-[1.0] text-white"
            >
              Advanced <br /> 
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
                Climate Control.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/80 max-w-xl"
            >
              {t('hero_desc1')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto items-center mt-2"
            >
              <a href="#estimate" className="font-mono text-white text-[13px] sm:text-sm font-bold uppercase tracking-[0.15em] hover:text-emerald-400 transition-colors duration-300">
                {t('hero_learn')}
              </a>
              <span className="hidden sm:inline-block text-white/30 text-sm">/</span>
              <a href="tel:+998339000880" className="font-mono text-white text-[13px] sm:text-sm font-bold uppercase tracking-[0.15em] hover:text-emerald-400 transition-colors duration-300">
                +998 33 900-08-80
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-white/50 text-[11px] uppercase tracking-[0.25em] font-semibold">{t('hero_scroll')}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse mt-2"></div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════
          DRIVING SCENE - Infinite animation
      ════════════════════════════════════════════════ */}
      <DrivingScene />

    </section>
  );
}
