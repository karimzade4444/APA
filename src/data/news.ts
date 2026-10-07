export type NewsItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    id: 1,
    title:
      "Боздиди ҳайати Академия аз сохторҳои илмию таълимии Донишгоҳи технологии Ланчжоу",
    date: "25.09.2026",
    image: "/images/news/news-1.jpg",
    href: "/news/1",
  },
  {
    id: 2,
    title:
      "Намояндагони Академия дар Анҷумани дуюми ҷаҳонии ҷамъиятӣ иштирок намуданд",
    date: "25.09.2026",
    image: "/images/news/news-2.jpg",
    href: "/news/2",
  },
  {
    id: 3,
    title: "Таҳкими ҳамкориҳои Академия бо Донишгоҳи технологии Ланчжоу",
    date: "25.09.2026",
    image: "/images/news/news-3.jpg",
    href: "/news/3",
  },
  {
    id: 4,
    title: "Даъват ба озмун №1 аз 27.08.2026",
    date: "28.08.2026",
    image: "/images/news/news-4.jpg",
    href: "/news/4",
  },
];
