"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "uz" | "ru" | "en";

interface Dictionary {
  [key: string]: string;
}

const translations: Record<Language, Dictionary> = {
  en: {
    nav_phone: "We are just a phone call away",
    nav_furnace: "Heating",
    nav_heatpump: "Heat Pumps",
    nav_boiler: "Boilers",
    nav_portfolio: "Portfolio",
    nav_reviews: "Reviews",
    nav_estimate: "{ GET ESTIMATE }",
    hero_location: "Tashkent, UZ",
    hero_title: "AVC CLIMATE",
    hero_desc1: "AVC ClimaVent — Tashkent's trusted HVAC experts. Installation, repair & maintenance of air conditioning, boilers, heat pumps and radiant floor systems. Midea, Welkin, Shivaki.",
    hero_scroll: "{ SCROLL DOWN }",
    hero_learn: "{ LEARN MORE }",
    srv_heading_line1: "Premium Solutions for",
    srv_heading_line2: "Modern Infrastructure.",
    port_heading_line1: "Completed",
    port_heading_line2: "Projects.",
    srv_1_title: "Installation & Commissioning",
    srv_2_title: "Repair & Maintenance",
    srv_3_title: "Design & Consulting",
    srv_1_desc: "Professional installation of split systems, chiller units, boilers and heat pumps. Warranty on all works.",
    srv_2_desc: "Full service cycle: diagnostics, refrigerant refill, cleaning and preventive maintenance. All brands.",
    srv_3_desc: "Room load calculation, equipment selection and system design for residential and commercial properties.",
    srv_schedule: "{ ORDER NOW }",
  },
  ru: {
    nav_phone: "Один звонок и мы у вас",
    nav_furnace: "Отопление",
    nav_heatpump: "Тепловые насосы",
    nav_boiler: "Котлы",
    nav_portfolio: "Портфолио",
    nav_reviews: "Отзывы",
    nav_estimate: "{ ПОЛУЧИТЬ РАСЧЕТ }",
    hero_location: "Ташкент, Узбекистан",
    hero_title: "AVC КЛИМАТ",
    hero_desc1: "AVC ClimaVent — надёжный эксперт по климат-контролю. Установка, ремонт и обслуживание кондиционеров, котлов, тепловых насосов и тёплых полов. Midea, Welkin, Shivaki.",
    hero_scroll: "{ СДВИГ ВНИЗ }",
    hero_learn: "{ УЗНАТЬ БОЛЬШЕ }",
    srv_heading_line1: "Профессиональные решения для",
    srv_heading_line2: "любых объектов.",
    port_heading_line1: "Реализованные",
    port_heading_line2: "Проекты.",
    srv_1_title: "Монтаж и пуско-наладка",
    srv_2_title: "Ремонт и обслуживание",
    srv_3_title: "Проектирование",
    srv_1_desc: "Профессиональный монтаж сплит-систем, чиллеров, котлов и тепловых насосов. Гарантия на все работы.",
    srv_2_desc: "Полный сервисный цикл: диагностика, заправка, чистка и профилактика. Работаем со всеми брендами.",
    srv_3_desc: "Расчет тепловой нагрузки, подбор оборудования и проектирование систем для жилых и коммерческих объектов.",
    srv_schedule: "{ ЗАКАЗАТЬ }",
  },
  uz: {
    nav_phone: "Bizga faqat bir qo'ng'iroq qiling",
    nav_furnace: "Isitish",
    nav_heatpump: "Issiqlik nasosilari",
    nav_boiler: "Qozonlar",
    nav_portfolio: "Portfolio",
    nav_reviews: "Sharhlar",
    nav_estimate: "{ HISOB-KITOB }",
    hero_location: "Toshkent, O'zbekiston",
    hero_title: "AVC IQLIM",
    hero_desc1: "AVC ClimaVent — iqlim nazorati bo'yicha ishonchli hamkor. Konditsionerlar, qozonlar, issiqlik nasosilari va iliq pollarni o'rnatish, ta'mirlash va texnik xizmat ko'rsatish. Midea, Welkin, Shivaki.",
    hero_scroll: "{ PASTGA }",
    hero_learn: "{ BATAFSIL }",
    srv_heading_line1: "Professional yechimlar",
    srv_heading_line2: "har qanday ob'ekt uchun.",
    port_heading_line1: "Bajarilgan",
    port_heading_line2: "Loyihalar.",
    srv_1_title: "Montaj va ishga tushirish",
    srv_2_title: "Ta'mirlash va xizmat",
    srv_3_title: "Loyihalash",
    srv_1_desc: "Split-tizimlar, chillerlar, qozonlar va issiqlik nasoslarini professional o'rnatish. Barcha ishlarga kafolat.",
    srv_2_desc: "To'liq xizmat sikli: diagnostika, freon qo'shish, tozalash va profilaktika. Barcha brendlar bilan ishlaymiz.",
    srv_3_desc: "Issiqlik yukini hisoblash, uskunalar tanlash va turar-joy hamda tijorat ob'ektlari uchun tizimlar loyihalash.",
    srv_schedule: "{ BUYURTMA }",
  }
};

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ru");

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
}
