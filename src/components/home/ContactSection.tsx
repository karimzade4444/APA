 "use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/animations/Reveal";

const ContactSection = () => {
  return (
    <section className="bg-[#f7f5f1] py-24">
      <div className="site-container">
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
                {/* Приём */}
                <div>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d4af62]/30 text-[#d4af62]">
                      <Clock size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Приём граждан
                      </p>

                      <Link
                        href="/contacts"
                        className="group mt-2 inline-flex items-center gap-1 text-sm leading-6 text-white/70 transition-colors hover:text-[#d4af62]"
                      >
                        Согласно установленному графику
                        <ArrowUpRight
                          size={14}
                          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
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

          {/* Настоящая интерактивная карта Google Maps */}
          <div className="relative min-h-[450px] overflow-hidden bg-[#e8e5df]">
            <iframe
              title="Академия государственного управления при Президенте Республики Таджикистан"
              src="https://yandex.tj/map-widget/v1/?ll=68.784998%2C38.595886&z=17&pt=68.784998%2C38.595886%2Cpm2rdm"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;