export type GalleryImages = [string, ...string[]];

export type PublicationCategory = "news" | "announcement" | "article";

export type PublicationItem = {
  id: number;
  title: string;
  date: string;
  images: GalleryImages;
  href: string;
  category: PublicationCategory;
  content: string[];
  topic?: string;
};

const newsContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem non justo feugiat tincidunt. Sed vitae neque at erat suscipit consequat. Curabitur euismod, sapien at interdum facilisis, justo velit posuere massa, sed faucibus libero neque eget nisl.",
  "Praesent commodo, nisl vitae consequat malesuada, neque urna aliquam erat, sed tincidunt magna sapien non nibh. Donec posuere, arcu a malesuada consequat, erat felis suscipit augue, vitae vulputate metus ipsum nec lectus. Nulla facilisi. Suspendisse potenti.",
  "In hac habitasse platea dictumst. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
];

const articleContent = [
  ...newsContent,
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
];

export const publications: PublicationItem[] = [
  {
    id: 1,
    title:
      "Боздиди ҳайати Академия аз сохторҳои илмию таълимии Донишгоҳи технологии Ланчжоу",
    date: "25.09.2026",
    images: ["/images/news/news-1.jpg"],
    href: "/news/1",
    category: "news",
    topic: "news",
    content: newsContent,
  },
  {
    id: 2,
    title:
      "Намояндагони Академия дар Анҷумани дуюми ҷаҳонии ҷамъиятӣ иштирок намуданд",
    date: "25.09.2026",
    images: ["/images/news/news-2.jpg", "/images/news/news-3.jpg"],
    href: "/news/2",
    category: "news",
    content: newsContent,
  },
  {
    id: 3,
    title: "Таҳкими ҳамкориҳои Академия бо Донишгоҳи технологии Ланчжоу",
    date: "25.09.2026",
    images: ["/images/news/news-3.jpg"],
    href: "/news/3",
    category: "news",
    content: newsContent,
  },
  {
    id: 4,
    title: "Даъват ба озмун №1 аз 27.08.2026",
    date: "28.08.2026",
    images: ["/images/news/news-4.jpg"],
    href: "/news/4",
    category: "announcement",
    content: newsContent,
  },
  {
    id: 1,
    title:
      "Современные подходы к развитию государственного управления и подготовке государственных служащих",
    date: "07.10.2026",
    images: ["/images/news/news-1.jpg"],
    href: "/articles/1",
    category: "article",
    topic: "Государственное управление",
    content: articleContent,
  },
  {
    id: 2,
    title:
      "Цифровизация государственного управления: новые возможности и вызовы",
    date: "01.10.2026",
    images: ["/images/news/news-2.jpg"],
    href: "/articles/2",
    category: "article",
    topic: "Цифровизация",
    content: articleContent,
  },
  {
    id: 3,
    title:
      "Роль образования и науки в формировании современной государственной службы",
    date: "24.09.2026",
    images: ["/images/news/news-3.jpg"],
    href: "/articles/3",
    category: "article",
    topic: "Образование и наука",
    content: articleContent,
  },
  {
    id: 4,
    title: "Международное сотрудничество в сфере государственного управления",
    date: "18.09.2026",
    images: ["/images/news/news-4.jpg"],
    href: "/articles/4",
    category: "article",
    topic: "Международное сотрудничество",
    content: articleContent,
  },
];
