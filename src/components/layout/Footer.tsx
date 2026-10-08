"use client";

import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

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
          <Reveal delay={0} className="min-w-0">
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
                href="https://www.facebook.com/groups/1469126009893987"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
                  <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/apa.tj_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[17px] w-[17px]">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://t.me/apatj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M21.7 4.4 18.5 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.5 1.1 12c-1.1-.3-1.1-1 .2-1.5L20.4 3c.9-.3 1.7.2 1.3 1.4Z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F%D0%B8%D0%B8%D0%B4%D0%BE%D1%80%D0%B0%D0%BA%D1%83%D0%BD%D0%B8%D0%B8%D0%B4%D0%B0%D0%B2%D0%BB%D0%B0%D1%82%D3%A3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition duration-300 hover:border-[#d4af62] hover:text-[#d4af62]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>
            </div>
          </Reveal>

          {/* Навигация */}
          <Reveal delay={0.12} className="min-w-0">
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
          </Reveal>

          {/* Контакты */}
          <Reveal delay={0.24} className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d4af62]">
              Контакты
            </p>

            <div className="mt-6 space-y-5 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <MapPin size={17} strokeWidth={1.5} className="mt-1 shrink-0 text-[#d4af62]" />
                <p className="leading-6">
                  734003, Республика Таджикистан,
                  <br />
                  г. Душанбе, ул. Саид Носир, 33
                </p>
              </div>

              <a
                href="tel:+992372241786"
                className="flex items-center gap-3 transition-colors hover:text-[#d4af62]"
              >
                <Phone size={17} strokeWidth={1.5} className="shrink-0 text-[#d4af62]" />
                +992 (37) 224-17-86
              </a>
              <a
                href="mailto:info@apa.tj"
                className="flex items-center gap-3 transition-colors hover:text-[#d4af62]"
              >
                <Mail size={17} strokeWidth={1.5} className="shrink-0 text-[#d4af62]" />
                info@apa.tj
              </a>
            </div>
          </Reveal>
        </div>

        {/* Нижняя часть */}
        <Reveal delay={0.12}>
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
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
