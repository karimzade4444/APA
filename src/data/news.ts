export type GalleryImages = [string, ...string[]];

export type NewsItem = {
  id: number;
  title: string;
  date: string;
  images: GalleryImages;
  href: string;
  category: "news" | "announcement";
  content: string[];
};

export type ArticleItem = {
  id: number;
  title: string;
  date: string;
  images: GalleryImages;
  href: string;
  category: string;
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
    images: ["/images/news/news-1.jpg"],
    href: "/news/1",
    category: "news",
    content: placeholderContent,
  },
  {
    id: 2,
    title:
      "Намояндагони Академия дар Анҷумани дуюми ҷаҳонии ҷамъиятӣ иштирок намуданд",
    date: "25.09.2026",
    images: ["/images/news/news-2.jpg"],
    href: "/news/2",
    category: "news",
    content: placeholderContent,
  },
  {
    id: 3,
    title: "Таҳкими ҳамкориҳои Академия бо Донишгоҳи технологии Ланчжоу",
    date: "25.09.2026",
    images: ["/images/news/news-3.jpg"],
    href: "/news/3",
    category: "news",
    content: placeholderContent,
  },
  {
    id: 4,
    title: "Даъват ба озмун №1 аз 27.08.2026",
    date: "28.08.2026",
    images: ["/images/news/news-4.jpg"],
    href: "/news/4",
    category: "announcement",
    content: placeholderContent,
  },
];

export const announcements = news.filter(
  (item) => item.category === "announcement",
);

const articlePlaceholderContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem non justo feugiat tincidunt. Sed vitae neque at erat suscipit consequat. Curabitur euismod, sapien at interdum facilisis, justo velit posuere massa, sed faucibus libero neque eget nisl.",
  "Praesent commodo, nisl vitae consequat malesuada, neque urna aliquam erat, sed tincidunt magna sapien non nibh. Donec posuere, arcu a malesuada consequat, erat felis suscipit augue, vitae vulputate metus ipsum nec lectus. Nulla facilisi. Suspendisse potenti.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
];

export const articles: ArticleItem[] = [
  {
    id: 1,
    title:
      "Современные подходы к развитию государственного управления и подготовке государственных служащих",
    date: "07.10.2026",
    images: ["/images/news/news-1.jpg"],
    href: "/articles/1",
    category: "Государственное управление",
    content: articlePlaceholderContent,
  },
  {
    id: 2,
    title:
      "Цифровизация государственного управления: новые возможности и вызовы",
    date: "01.10.2026",
    images: ["/images/news/news-2.jpg"],
    href: "/articles/2",
    category: "Цифровизация",
    content: articlePlaceholderContent,
  },
  {
    id: 3,
    title:
      "Роль образования и науки в формировании современной государственной службы",
    date: "24.09.2026",
    images: ["/images/news/news-3.jpg"],
    href: "/articles/3",
    category: "Образование и наука",
    content: articlePlaceholderContent,
  },
  {
    id: 4,
    title: "Международное сотрудничество в сфере государственного управления",
    date: "18.09.2026",
    images: ["/images/news/news-4.jpg"],
    href: "/articles/4",
    category: "Международное сотрудничество",
    content: articlePlaceholderContent,
  },
];
