"use client";

import QuickLinkCard from "./QuickLinkCard";
import Reveal from "@/components/animations/Reveal";
import { quickLinks } from "@/data/quickLinks";

const QuickLinksSection = () => {
  return (
    <section className="bg-[#f1ece2] py-16 lg:mt-auto lg:pb-0">
      <div>
        <Reveal>
          <div className="mb-8 flex items-end justify-between border-b border-[#061d35]/10 pb-5">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d4af62]" />

                <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a37b2f]">
                  Академия
                </span>
              </div>

              <h2 className="font-serif text-4xl font-semibold text-[#061d35] md:text-5xl">
                Полезные ресурсы
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#061d35]/55">
                Электронные ресурсы, научные издания и информационные платформы
                Академии.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((item, index) => (
            <QuickLinkCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
