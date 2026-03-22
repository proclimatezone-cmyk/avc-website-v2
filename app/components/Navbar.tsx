"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8 transition-all duration-500 pt-4 sm:pt-6 border-t-[4px] border-[#0A3B2C]">
      <header
        className={`w-full max-w-[1400px] transition-all duration-700 ease-in-out rounded-2xl md:rounded-full px-6 md:px-8 flex justify-between items-center border shadow-2xl ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl border-white/40 py-3 shadow-black/10" 
            : "bg-white/90 backdrop-blur-lg border-white/20 py-4 sm:py-5 shadow-black/20"
        }`}
      >
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center shrink-0"
        >
          {/* Large width so the actual logo mark is clearly visible.
              White padding in the PNG is invisible against the white navbar. */}
          <Image
            src="/wordmark.png"
            alt="AVC ClimaVent"
            width={240}
            height={80}
            priority
            className="w-[200px] sm:w-[220px] lg:w-[240px] h-auto object-contain"
          />
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center font-bold text-[11px] xl:text-[13px] tracking-widest uppercase text-[#0A3B2C]/80">
          {['furnace', 'heatpump', 'boiler', 'portfolio', 'reviews'].map((item, i) => (
            <a key={item} href={`#${item}`} className="hover:text-[#0A3B2C] transition-colors relative group overflow-hidden py-2 shrink-0">
              <motion.span initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 * i }} className="block">
                {i + 1}. {t(`nav_${item}`)}
              </motion.span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Global UI & CTA */}
        <div className="hidden md:flex items-center gap-4 xl:gap-8">
          <div className="flex gap-2 xl:gap-3 font-bold text-[10px] xl:text-xs tracking-widest uppercase text-[#0A3B2C]">
            {(["ru", "uz", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`transition-all duration-300 py-1 ${lang === l ? "border-b-2 border-emerald-500 text-[#0A3B2C]" : "opacity-40 hover:opacity-100"}`}
              >
                {l}
              </button>
            ))}
          </div>

          <motion.a 
            href="#estimate" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] text-[#0A3B2C] hover:text-[#165b45] transition-colors"
          >
            {t('nav_estimate')}
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#0A3B2C] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Mobile Menu Box */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[90px] left-4 right-4 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden border border-[#0A3B2C]/10 z-40 text-[#0A3B2C]"
          >
            <div className="p-6 sm:p-8 flex flex-col gap-6 items-center text-center">
              <div className="flex gap-4 font-bold text-sm tracking-widest uppercase mb-2 w-full justify-center">
                {(["ru", "uz", "en"] as const).map((l) => (
                  <button key={l} onClick={() => { setLang(l); setMobileMenuOpen(false); }} className={`p-2 transition-all ${lang === l ? "border-b-2 border-[#0A3B2C]" : "opacity-40"}`}>
                    {l}
                  </button>
                ))}
              </div>
              <a onClick={()=>setMobileMenuOpen(false)} href="#furnace" className="text-sm sm:text-base font-bold uppercase tracking-widest border-b border-[#0A3B2C]/10 pb-4 w-full">1. {t('nav_furnace')}</a>
              <a onClick={()=>setMobileMenuOpen(false)} href="#heatpump" className="text-sm sm:text-base font-bold uppercase tracking-widest border-b border-[#0A3B2C]/10 pb-4 w-full">2. {t('nav_heatpump')}</a>
              <a onClick={()=>setMobileMenuOpen(false)} href="#boiler" className="text-sm sm:text-base font-bold uppercase tracking-widest border-b border-[#0A3B2C]/10 pb-4 w-full">3. {t('nav_boiler')}</a>
              <a onClick={()=>setMobileMenuOpen(false)} href="#portfolio" className="text-sm sm:text-base font-bold uppercase tracking-widest border-b border-[#0A3B2C]/10 pb-4 w-full">4. {t('nav_portfolio')}</a>
              <a onClick={()=>setMobileMenuOpen(false)} href="#estimate" className="mt-4 font-mono text-center font-bold tracking-[0.15em] text-[#0A3B2C] text-sm uppercase">{t('nav_estimate')}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
