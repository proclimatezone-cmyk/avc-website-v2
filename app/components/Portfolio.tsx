"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Portfolio() {
  const { t, lang } = useLang();
  
  // Real HVAC projects data (mocked but highly relevant for AVC)
  const projects = [
    {
      title: { 
        ru: "VRF Система Midea", 
        en: "Midea VRF System", 
        uz: "Midea VRF Tizimi" 
      },
      desc: { 
        ru: "Проектирование и монтаж 12 наружных и 84 внутренних блоков для бизнес-центра.", 
        en: "Design and installation of 12 outdoor and 84 indoor units for a business center.", 
        uz: "Biznes markazi uchun 12 ta tashqi va 84 ta ichki bloklarni loyihalash va o'rnatish." 
      },
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200", // HVAC install
      tag: "Tashkent City"
    },
    {
      title: { 
        ru: "Промышленный Чиллер Shivaki", 
        en: "Shivaki Industrial Chiller", 
        uz: "Shivaki Sanoat Chilleri" 
      },
      desc: { 
        ru: "Пуско-наладка системы холодоснабжения для производственного комплекса.", 
        en: "Commissioning of cooling system for a manufacturing complex.", 
        uz: "Ishlab chiqarish majmuasi uchun sovutish tizimini ishga tushirish." 
      },
      img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=1200", // Ducts / Chiller vibes
      tag: "Yunusabad District"
    },
    {
      title: { 
        ru: "Отопление Тепловым Насосом", 
        en: "Heat Pump Heating", 
        uz: "Issiqlik Nasosi Bilan Isitish" 
      },
      desc: { 
        ru: "Установка оборудования Welkin для автономного отопления частного сектора.", 
        en: "Installation of Welkin equipment for autonomous heating of a private sector.", 
        uz: "Xususiy sektorning avtonom isitish tizimi uchun Welkin uskunalarini o'rnatish." 
      },
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200", // Clean industrial look
      tag: "Premium Villa"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white text-[#0A3B2C]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        
        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0A3B2C]/40 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#0A3B2C]/30" />
            {t("nav_portfolio")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight"
          >
            {t("port_heading_line1")}<br/>
            <span className="font-semibold">{t("port_heading_line2")}</span>
          </motion.h2>
        </div>

        {/* ── Portfolio Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden bg-[#fafafa] rounded-xl mb-6 relative aspect-[4/3]">
                <div className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-widest font-bold bg-white/90 text-[#0A3B2C] px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {item.tag}
                </div>
                <Image
                  src={item.img}
                  alt={item.title[lang as keyof typeof item.title]}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                  {item.title[lang as keyof typeof item.title]}
                </h3>
                <p className="text-sm text-[#0A3B2C]/60 leading-relaxed font-light">
                  {item.desc[lang as keyof typeof item.desc]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
