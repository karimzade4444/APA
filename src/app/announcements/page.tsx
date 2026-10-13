import { BellRing } from "lucide-react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import NewsCard from "@/components/home/NewsCard";
import Reveal from "@/components/animations/Reveal";
import { announcements } from "@/data/news";

export default function AnnouncementsPage() {
  return (
    <main className="bg-[#f1ece2] py-12 md:py-16 lg:py-20">
      <div className="site-container">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Главная", href: "/" },
            { label: "Объявления" },
          ]}
        />

        <Reveal>
          <header className="mb-10 border-b border-[#061d35]/15 pb-7">
            <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#a37b2f]">
              <BellRing size={16} />
              Информация Академии
            </p>
            <h1 className="font-serif text-4xl font-semibold text-[#061d35] md:text-5xl">
              Объявления
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#061d35]/60 sm:text-base">
              Актуальные приглашения и объявления Академии.
            </p>
          </header>
        </Reveal>

        {announcements.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {announcements.map((item, index) => (
              <NewsCard
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.images[0]}
                href={item.href}
                delay={index * 0.1}
                eyebrow="Объявление"
              />
            ))}
          </div>
        ) : (
          <p className="border border-[#d8d1c5] bg-white p-6 text-sm text-[#061d35]/65">
            Сейчас нет опубликованных объявлений.
          </p>
        )}
      </div>
    </main>
  );
}
