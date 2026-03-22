"use client";
import { useLang } from "@/contexts/LanguageContext";
import Image from "next/image";

const footerLinks = {
  ru: { address: "Адрес", quick: "Навигация", services: "Услуги", home: "Главная", about: "О нас", reviews: "Отзывы", brands: "Бренды", furnace: "Котлы", pump: "Тепловые Насосы", boiler: "Чиллеры", radiant: "Теплый пол", rights: "Все права защищены." },
  uz: { address: "Manzil", quick: "Navigatsiya", services: "Xizmatlar", home: "Bosh sahifa", about: "Biz haqimizda", reviews: "Sharhlar", brands: "Brendlar", furnace: "Qozonlar", pump: "Issiqlik nasosilari", boiler: "Chillerlar", radiant: "Iliq pol", rights: "Barcha huquqlar himoyalangan." },
  en: { address: "Address", quick: "Quick Links", services: "Services", home: "Home", about: "About", reviews: "Reviews", brands: "Brands", furnace: "Furnace", pump: "Heat Pumps", boiler: "Chillers", radiant: "Radiant Floor", rights: "All rights reserved." },
};

export default function Footer() {
  const { lang } = useLang();
  const l = footerLinks[lang] || footerLinks.ru;

  return (
    <footer className="bg-white text-[#0A3B2C] border-t border-[#0A3B2C]/10">
      
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        
        {/* Logo + tagline */}
        <div className="md:col-span-4 flex flex-col gap-5">
          {/* wordmark: white padding invisible on white bg, positioned left */}
          <Image
            src="/wordmark.png"
            alt="AVC ClimaVent"
            width={380}
            height={120}
            className="w-[260px] h-auto object-contain object-left -ml-4"
          />
          <p className="text-base text-[#0A3B2C]/55 leading-relaxed max-w-xs">
            {lang === "ru" && "Профессиональные системы климат-контроля для жилых и коммерческих объектов Узбекистана."}
            {lang === "uz" && "O'zbekistonda turar-joy va tijorat ob'ektlari uchun professional iqlim nazorat tizimlari."}
            {lang === "en" && "Professional climate control systems for residential and commercial properties in Uzbekistan."}
          </p>
          <a href="tel:+998339000880" className="text-xl font-bold hover:text-[#165b45] transition-colors tracking-tight">
            +998 33 900-08-80
          </a>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h4 className="font-bold text-[#0A3B2C] text-sm uppercase tracking-wider mb-1 border-b border-[#0A3B2C]/10 pb-3">{l.quick}</h4>
          {[
            { href: "#", label: l.home },
            { href: "#", label: l.about },
            { href: "#reviews", label: l.reviews },
            { href: "#", label: l.brands },
          ].map(link => (
            <a key={link.label} href={link.href} className="text-base text-[#0A3B2C]/55 hover:text-[#0A3B2C] transition-colors leading-snug">{link.label}</a>
          ))}
        </div>

        {/* Services */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-bold text-[#0A3B2C] text-sm uppercase tracking-wider mb-1 border-b border-[#0A3B2C]/10 pb-3">{l.services}</h4>
          {[
            { href: "#furnace", label: l.furnace },
            { href: "#heatpump", label: l.pump },
            { href: "#boiler", label: l.boiler },
            { href: "#radient", label: l.radiant },
          ].map(link => (
            <a key={link.label} href={link.href} className="text-base text-[#0A3B2C]/55 hover:text-[#0A3B2C] transition-colors leading-snug">{link.label}</a>
          ))}
        </div>

        {/* Contact */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-bold text-[#0A3B2C] text-sm uppercase tracking-wider mb-1 border-b border-[#0A3B2C]/10 pb-3">{l.address}</h4>
          <p className="text-base text-[#0A3B2C]/55 leading-relaxed">
            Tashkent, Uzbekistan<br/>Ulitsa Amir Temur, 107
          </p>
          <p className="text-base text-[#0A3B2C]/55">
            {lang === "ru" && "Пн–Сб: 9:00 – 19:00"}
            {lang === "uz" && "Du–Sha: 9:00 – 19:00"}
            {lang === "en" && "Mon–Sat: 9AM – 7PM"}
          </p>
          <a href="mailto:avazovventclima@gmail.com" className="text-base text-[#0A3B2C]/55 hover:text-[#0A3B2C] transition-colors">
            avazovventclima@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0A3B2C]/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-[#0A3B2C]/40 font-medium">
          <p>© {new Date().getFullYear()} AVC ClimaVent. {l.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0A3B2C] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#0A3B2C] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#0A3B2C] transition-colors">Telegram</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
