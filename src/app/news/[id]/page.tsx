import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BellRing, Newspaper } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import PhotoGallery from "@/components/articles/PhotoGallery";
import { publications } from "@/data/news";

export function generateStaticParams() {
  return publications
    .filter((item) => item.category !== "article")
    .map((item) => ({ id: String(item.id) }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = publications.find(
    (entry) =>
      entry.category !== "article" && entry.id === Number(id),
  );

  if (!item) {
    notFound();
  }

  const isAnnouncement = item.category === "announcement";
  const sectionLabel = isAnnouncement ? "Объявления" : "Новости";
  const sectionHref = isAnnouncement
    ? "/publications#announcements"
    : "/publications#news";
  const CategoryIcon = isAnnouncement ? BellRing : Newspaper;

  return (
    <main className="bg-[#f1ece2] py-12 md:py-16 lg:py-20">
      <article className="site-container">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Главная", href: "/" },
            { label: "Публикации", href: sectionHref },
            { label: item.title },
          ]}
        />

        <Reveal>
          <header className="border-b border-[#061d35]/15 pb-8">
            <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#a37b2f]">
              <CategoryIcon size={15} />
              {sectionLabel}
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-[#061d35] md:text-5xl">
              {item.title}
            </h1>
            <time className="mt-5 block text-sm text-[#061d35]/55">
              {item.date}
            </time>
          </header>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flow-root border-l-2 border-[#c9a45c] bg-white/70 px-6 py-7 sm:px-8">
            <PhotoGallery
              images={item.images}
              title={item.title}
              className="mb-5 mr-0 mt-0 w-full md:float-left md:mb-4 md:mr-8 md:w-[52%] xl:w-[50%]"
            />
            {item.content.map((paragraph, index) => (
              <p
                key={`${item.id}-paragraph-${index}`}
                className="mb-5 indent-8 text-justify text-base leading-8 text-[#061d35]/75 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Link
          href={sectionHref}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#9b7939] transition-colors hover:text-[#061d35]"
        >
          <ArrowLeft size={16} />
          Назад к разделу «{sectionLabel}»
        </Link>
      </article>
    </main>
  );
}
