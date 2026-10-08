"use client";

import Link from "next/link";
import { ArrowUp, Camera, Globe, Send } from "lucide-react";

const Footer = () => {
  const navigation = [
    { title: "Об Академии", href: "/about" },
    { title: "Поступление", href: "/admission" },
    { title: "Образование", href: "/education" },
    { title: "Наука", href: "/science" },
    { title: "Студентам", href: "/students" },
    { title: "Новости", href: "/news" },
    { title: "Контакты", href: "/contacts" },
  ];

  return (
    <footer className="bg-[#061d35] text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Верхняя часть */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-block">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4af62]">
                Академия
              </p>

              <h2 className="mt-1 font-serif text-2xl font-semibold leading-tight">
                Государственного
                <br />
                управления
              </h2>

              <p className="mt-2 text-xs text-white/40">
                при Президенте Республики Таджикистан
              </p>
            </Link>

            <p className="mt-7 max-w-md text-sm leading-6 text-white/45">
              Официальный сайт Академии государственного управления при
              Президенте Республики Таджикистан.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
                <Globe size={17} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
                <Camera size={17} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4af62]">
              Навигация
            </p>

            <div className="mt-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <span className="text-[#d4af62] opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>

                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4af62]">
              Контакты
            </p>

            <div className="mt-6 space-y-5 text-sm text-white/50">
              <p className="leading-6">
                734003, Республика Таджикистан,
                <br />
                г. Душанбе, ул. Саид Носир, 33
              </p>
             
              <a
                href="tel:+992372241786"
                className="block transition-colors hover:text-[#d4af62]"
              >
                +992 (37) 224-17-86
              </a>
              <a
                href="mailto:info@apa.tj"
                className="block transition-colors hover:text-[#d4af62]"
              >
                info@apa.tj
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} Академия государственного управления
            при Президенте Республики Таджикистан
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[11px] text-white/25 transition-colors hover:text-white/60"
            >
              Политика конфиденциальности
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex cursor-pointer items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-[#d4af62]"
            >
              Наверх
              <ArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
