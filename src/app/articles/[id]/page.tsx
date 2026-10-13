import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Reveal from "@/components/animations/Reveal";
import PhotoGallery from "@/components/articles/PhotoGallery";
import { articles } from "@/data/news";

export function generateStaticParams() {
  return articles.map((article) => ({ id: String(article.id) }));
}

export default async function ArticlePage({
  params,
}: PageProps<"/articles/[id]">) {
  const { id } = await params;
  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#f1ece2] py-12 md:py-16 lg:py-20">
      <article className="mx-auto max-w-4xl px-6">
        <Breadcrumbs
          variant="light"
          items={[
            { label: "Главная", href: "/" },
            { label: "Публикации", href: "/publications#articles" },
            { label: article.title },
          ]}
        />

        <Reveal>
          <header className="border-b border-[#061d35]/15 pb-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#a37b2f]">
              {article.category}
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-[#061d35] md:text-5xl">
              {article.title}
            </h1>
            <time className="mt-5 block text-sm text-[#061d35]/55">
              {article.date}
            </time>
          </header>
        </Reveal>

        <Reveal delay={0.12}>
          <PhotoGallery images={article.images} title={article.title} />
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 space-y-5 border-l-2 border-[#c9a45c] bg-white/70 px-6 py-7 sm:px-8">
            {article.content.map((paragraph, index) => (
              <p
                key={`${article.id}-paragraph-${index}`}
                className="text-base leading-8 text-[#061d35]/75"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </article>
    </main>
  );
}
