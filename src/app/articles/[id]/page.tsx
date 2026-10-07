import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

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
    <main className="bg-[#f1ece2] py-16 md:py-24">
      <article className="mx-auto max-w-4xl px-6">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8e6b2c] transition-colors hover:text-[#061d35]"
        >
          <span aria-hidden="true">←</span> Все публикации
        </Link>

        <header className="mt-8 border-b border-[#061d35]/15 pb-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#a37b2f]">
            Наука и аналитика
          </p>
          <h1 className="font-serif text-3xl font-semibold leading-tight text-[#061d35] md:text-5xl">
            {article.title}
          </h1>
          <time className="mt-5 block text-sm text-[#061d35]/55">
            {article.date}
          </time>
        </header>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-[#d8d1c5] bg-white">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </article>
    </main>
  );
}
