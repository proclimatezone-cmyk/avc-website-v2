"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLang();
  
  // ── Use highly relevant true HVAC images  ──────────────────
  const servicesData = [
    {
      num: "01",
      titleKey: "srv_1_title",
      descKey:  "srv_1_desc",
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200", // Outdoor AC Units (Hardware focused)
    },
    {
      num: "02",
      titleKey: "srv_2_title",
      descKey:  "srv_2_desc",
      img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=1200", // Chiller / Ducts
    },
    {
      num: "03",
      titleKey: "srv_3_title",
      descKey:  "srv_3_desc",
      img: "https://images.unsplash.com/photo-1534398079246-e3e9d96cd3a2?auto=format&fit=crop&q=80&w=1200", // Industrial Chiller / Hardware
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#fafafa] text-[#0A3B2C]">
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
            AVC ClimaVent
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight"
          >
            {t("srv_heading_line1")}<br/>
            <span className="font-semibold">{t("srv_heading_line2")}</span>
          </motion.h2>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {servicesData.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl bg-[#0A3B2C] shadow-lg flex flex-col justify-end"
              style={{ height: "clamp(320px, 38vw, 500px)" }}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src={srv.img}
                  alt={t(srv.titleKey)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3B2C] via-[#0A3B2C]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
              </div>

              {/* Text */}
              <div className="relative z-10 p-7 sm:p-8 flex flex-col gap-3 transform lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-emerald-400 font-semibold text-sm tracking-[0.15em]">
                  {srv.num} {'//'}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                  {t(srv.titleKey)}
                </h3>
                <p className="text-white/75 text-sm font-light leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {t(srv.descKey)}
                </p>
                <div className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-150 mt-1">
                  <a href="#estimate" className="font-mono text-[12px] uppercase tracking-[0.15em] text-emerald-400 hover:text-white transition-colors font-bold">
                    {t("srv_schedule")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
