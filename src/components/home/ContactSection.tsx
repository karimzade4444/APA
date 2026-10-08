 "use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";

const ContactSection = () => {
  return (
    <section className="bg-[#f7f5f1] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d4af62]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a37b2f]">
                Контакты
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold text-[#061d35] md:text-5xl">
              Свяжитесь с Академией
            </h2>
          </div>
        </Reveal>

        <div className="grid overflow-hidden border border-[#061d35]/10 bg-white lg:grid-cols-[0.8fr_1.2fr]">
          {/* Информация */}
          <div className="bg-[#061d35] p-8 md:p-10">
            <Reveal>
              <div className="space-y-8">
                {/* Адрес */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d4af62]/30 text-[#d4af62]">
                      <MapPin size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Адрес
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/80">
                        734003, Республика Таджикистан,
                        <br />
                        г. Душанбе, ул. Саид Носир, 33
                      </p>
                    </div>
                  </div>
                </div>

                {/* Телефон */}
                <div>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d4af62]/30 text-[#d4af62]">
                      <Phone size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Телефон
                      </p>

                      <a
                        href="tel:+992372241786"
                        className="mt-2 block text-sm text-white/80 transition-colors hover:text-[#d4af62]"
                      >
                        +992 (37) 224-17-86
                      </a>

                      <a
                        href="tel:+992372241718"
                        className="mt-1 block text-xs text-white/45 transition-colors hover:text-[#d4af62]"
                      >
                        Телефон доверия: +992 (37) 224-17-18
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d4af62]/30 text-[#d4af62]">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Электронная почта
                      </p>

                      <a
                        href="mailto:info@apa.tj"
                        className="mt-2 block text-sm text-white/80 transition-colors hover:text-[#d4af62]"
                      >
                        info@apa.tj
                      </a>
                    </div>
                  </div>
                </div>
[08.10.2026 23:13] 𝒦𝒶𝓇𝒾𝓂𝓏𝑜𝒹𝒶: {/* Приём */}
                <div>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d4af62]/30 text-[#d4af62]">
                      <Clock size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Приём граждан
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Согласно установленному графику
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contacts"
                  className="group inline-flex items-center gap-3 border-b border-[#d4af62]/50 pb-2 pt-3 text-xs font-medium uppercase tracking-[0.15em] text-[#d4af62]"
                >
                  Все контакты

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Карта */}
          <div className="relative min-h-[450px] bg-[#e8e5df]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  size={42}
                  strokeWidth={1}
                  className="mx-auto text-[#a37b2f]"
                />

                <p className="mt-4 font-serif text-xl text-[#061d35]">
                  Академия государственного управления
                </p>

                <p className="mt-2 text-sm text-[#061d35]/50">
                  ул. Саид Носир, 33
                </p>

                <Link
                  href="/contacts#map"
                  className="mt-6 inline-flex border border-[#061d35] px-5 py-3 text-xs font-medium uppercase tracking-wide text-[#061d35] transition duration-300 hover:bg-[#061d35] hover:text-white"
                >
                  Открыть карту
                </Link>
              </div>
            </div>

            {/* Декоративная сетка */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute left-1/4 top-0 h-full w-px bg-[#061d35]" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-[#061d35]" />
              <div className="absolute left-3/4 top-0 h-full w-px bg-[#061d35]" />
              <div className="absolute left-0 top-1/3 h-px w-full bg-[#061d35]" />
              <div className="absolute left-0 top-2/3 h-px w-full bg-[#061d35]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;