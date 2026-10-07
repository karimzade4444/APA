export type ArticleItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
};

export const articles: ArticleItem[] = [
  {
    id: 1,
    title:
      "Современные подходы к развитию государственного управления и подготовке государственных служащих",
    date: "07.10.2026",
    image: "/images/news/news-1.jpg",
    href: "/articles/1",
  },
  {
    id: 2,
    title:
      "Цифровизация государственного управления: новые возможности и вызовы",
    date: "01.10.2026",
    image: "/images/news/news-2.jpg",
    href: "/articles/2",
  },
  {
    id: 3,
    title:
      "Роль образования и науки в формировании современной государственной службы",
    date: "24.09.2026",
    image: "/images/news/news-3.jpg",
    href: "/articles/3",
  },
  {
    id: 4,
    title: "Международное сотрудничество в сфере государственного управления",
    date: "18.09.2026",
    image: "/images/news/news-4.jpg",
    href: "/articles/4",
  },
];
