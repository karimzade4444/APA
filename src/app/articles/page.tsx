import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main className="bg-[#f1ece2] py-12 md:py-16 lg:py-20">
      <div className="site-container">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Главная", href: "/" },
            { label: "Публикации" },
          ]}
        />
        <div className="mb-12 border-b border-[#061d35]/15 pb-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#a37b2f]">
            Наука и аналитика
          </p>
          <h1 className="font-serif text-4xl font-semibold text-[#061d35] md:text-5xl">
            Все публикации
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={article.href}
              className="group overflow-hidden border border-[#d8d1c5] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 font-serif text-2xl text-white drop-shadow">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-[#061d35]/50">{article.date}</p>
                <h2 className="mt-2 font-serif text-lg font-semibold leading-snug text-[#061d35] transition-colors group-hover:text-[#a37b2f]">
                  {article.title}
                </h2>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#a37b2f]">
                  Читать <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
