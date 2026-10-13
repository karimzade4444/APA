export type NewsItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
  category: "news" | "announcement";
  content: string[];
};

const placeholderContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem non justo feugiat tincidunt. Sed vitae neque at erat suscipit consequat. Curabitur euismod, sapien at interdum facilisis, justo velit posuere massa, sed faucibus libero neque eget nisl.",
  "Praesent commodo, nisl vitae consequat malesuada, neque urna aliquam erat, sed tincidunt magna sapien non nibh. Donec posuere, arcu a malesuada consequat, erat felis suscipit augue, vitae vulputate metus ipsum nec lectus. Nulla facilisi. Suspendisse potenti.",
];

export const news: NewsItem[] = [
  {
    id: 1,
    title:
      "Боздиди ҳайати Академия аз сохторҳои илмию таълимии Донишгоҳи технологии Ланчжоу",
    date: "25.09.2026",
    image: "/images/news/news-1.jpg",
    href: "/news/1",
    category: "news",
    content: placeholderContent,
  },
  {
    id: 2,
    title:
      "Намояндагони Академия дар Анҷумани дуюми ҷаҳонии ҷамъиятӣ иштирок намуданд",
    date: "25.09.2026",
    image: "/images/news/news-2.jpg",
    href: "/news/2",
    category: "news",
    content: placeholderContent,
  },
  {
    id: 3,
    title: "Таҳкими ҳамкориҳои Академия бо Донишгоҳи технологии Ланчжоу",
    date: "25.09.2026",
    image: "/images/news/news-3.jpg",
    href: "/news/3",
    category: "news",
    content: placeholderContent,
  },
  {
    id: 4,
    title: "Даъват ба озмун №1 аз 27.08.2026",
    date: "28.08.2026",
    image: "/images/news/news-4.jpg",
    href: "/news/4",
    category: "announcement",
    content: placeholderContent,
  },
];

export const announcements = news.filter(
  (item) => item.category === "announcement",
);
