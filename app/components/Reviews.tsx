"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

const reviewsData = {
  ru: [
    { name: "Алексей Коваль", role: "Директор ресторана, Ташкент", text: "AVC установили систему кондиционирования в нашем ресторане — быстро, чисто, профессионально. Температура в зале идеальная даже в 45° жары. Рекомендую всем!" },
    { name: "Дилноза Юсупова", role: "Управляющая офисом, Мирабадский р-н", text: "Поставили Midea на 8 кабинетов. Работают уже второй сезон без единого сбоя. Мастера приехали вовремя, объяснили каждый шаг. AVC — надежный выбор." },
    { name: "Бобур Рашидов", role: "Владелец склада, Юнусабад", text: "Заказывали промышленный чиллер. AVC сделали расчёт, смонтировали и настроили за 3 дня. Теперь в складе стабильно 18°С. Работаю с ними постоянно." },
    { name: "Наталья Смирнова", role: "Главный бухгалтер, банк", text: "Сервисное обслуживание на высшем уровне. Приезжают по первому звонку, всегда в срок. Отдельное спасибо за честные цены — никаких скрытых доплат." },
  ],
  uz: [
    { name: "Alisher Nazarov", role: "Restoran direktori, Toshkent", text: "AVC bizning restoranmizga konditsioner o'rnatdi — tez, toza, professional darajada. 45° issiqlikda ham zalda harorat mukammal. Hamma do'stlarimga tavsiya qilaman!" },
    { name: "Dilnoza Yusupova", role: "Ofis menejer, Mirobod tumani", text: "8 ta kabinet uchun Midea o'rnatildi. Ikkinchi mavsumdayam nosozliksiz ishlayapti. Ustalar o'z vaqtida keldi, har bir qadamni tushuntirdi. AVC — ishonchli tanlov." },
    { name: "Bobur Rashidov", role: "Ombor egasi, Yunusobod", text: "Sanoat chilleri buyurtma qildik. AVC hisob-kitob qildi, 3 kunda montaj qilib sozladi. Endi omborda barqaror 18°S. Doimiy hamkorlik qilamiz." },
    { name: "Natalya Smirnova", role: "Bosh buxgalter, bank", text: "Xizmat ko'rsatish yuqori darajada. Birinchi qo'ng'iroqdayoq kelishadi, har doim o'z vaqtida. Halol narxlar uchun alohida rahmat — hech qanday yashirin to'lovlar yo'q." },
  ],
  en: [
    { name: "Alexey Koval", role: "Restaurant Manager, Tashkent", text: "AVC installed our restaurant's AC system — fast, clean, professional. Perfect temperature in the hall even in 45°C heat. Highly recommend!" },
    { name: "Dilnoza Yusupova", role: "Office Manager, Mirobod District", text: "Midea installed across 8 offices. Running for the second season with zero issues. Technicians arrived on time, explained every step. AVC is a reliable choice." },
    { name: "Bobur Rashidov", role: "Warehouse Owner, Yunusabad", text: "Ordered an industrial chiller. AVC calculated, installed and configured everything in 3 days. Now consistently 18°C inside. I work with them permanently." },
    { name: "Natalia Smirnova", role: "CFO, Banking", text: "Service is top-tier. They arrive on first call, always on time. Special thanks for honest pricing — no hidden charges whatsoever." },
  ]
};

export default function Reviews() {
  const { lang } = useLang();
  const reviews = reviewsData[lang] || reviewsData.ru;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(i => (i + 1) % reviews.length);

  const titles = {
    ru: { heading: "Нас рекомендуют наши\nдовольные клиенты", subhead: "Отзывы", google: "GOOGLE-4.9/395", trust: "2GIS-5.0/245" },
    uz: { heading: "Mijozlarimiz bizni\ntavsiya qiladi", subhead: "Sharhlar", google: "GOOGLE-4.9/395", trust: "2GIS-5.0/245" },
    en: { heading: "Hear from Our Satisfied\nCustomers", subhead: "Reviews", google: "GOOGLE-4.9/395", trust: "2GIS-5.0/245" },
  };
  const t = titles[lang as keyof typeof titles] || titles.ru;

  return (
    <section id="reviews" className="py-20 md:py-32 bg-white text-[#111] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col mb-16">
          <div className="flex gap-4 sm:gap-8 mb-6 font-mono text-sm sm:text-[15px] font-semibold uppercase tracking-widest text-[#111]/70">
            <span>{t.google}</span>
            <span>{t.trust}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] whitespace-pre-line">
              {t.heading.split('\n')[0]}<br/>
              <span className="font-semibold">{t.heading.split('\n')[1] || ''}</span>
            </h2>
            
            {/* Nav */}
            <div className="flex gap-6 shrink-0 font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#111]/50">
              <button onClick={prev} className="hover:text-[#111] transition-colors">
                {'{ PREV }'}
              </button>
              <button onClick={next} className="hover:text-[#111] transition-colors">
                {'{ NEXT }'}
              </button>
            </div>
          </div>
        </div>

        {/* Review Cards (HeatMaster style: dark #1A1A1A cards, 2 per view) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Active Review */}
            <div className="bg-[#1A1A1A] text-white p-8 md:p-12 rounded-xl sm:rounded-none flex flex-col justify-between min-h-[320px]">
              <p className="text-lg sm:text-lg md:text-xl font-light leading-[1.6] text-white/90 mb-8 font-serif italic">
                &ldquo;{reviews[current].text}&rdquo;
              </p>
              <div>
                <div className="font-bold text-white text-base md:text-lg">{reviews[current].name}</div>
              </div>
            </div>

            {/* Next Review (Preview) */}
            <div className="bg-[#1A1A1A] text-white p-8 md:p-12 rounded-xl sm:rounded-none flex flex-col justify-between min-h-[320px] opacity-70 scale-[0.98] origin-left">
              <p className="text-lg sm:text-lg md:text-xl font-light leading-[1.6] text-white/90 mb-8 font-serif italic">
                &ldquo;{reviews[(current + 1) % reviews.length].text}&rdquo;
              </p>
              <div>
                <div className="font-bold text-white text-base md:text-lg">{reviews[(current + 1) % reviews.length].name}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
