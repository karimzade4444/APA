import type { NavigationItem } from "@/types/navigation";

export const navigation: NavigationItem[] = [
  {
    title: "Главная",
    href: "/",
  },

  {
    title: "Об Академии",
    href: "/about",

    children: [
      {
        title: "Об Академии",
        href: "/about",
      },
      {
        title: "Руководство",
        href: "/about/leadership",

        children: [
          {
            title: "Ректор",
            href: "/about/leadership/rector",
          },
          {
            title: "Первый проректор",
            href: "/about/leadership/first-vice-rector",
          },
          {
            title: "Проректор по науке и инновациям",
            href: "/about/leadership/vice-rector-science",
          },
          {
            title: "Проректор по идеологии и воспитанию",
            href: "/about/leadership/vice-rector-ideology",
          },
          {
            title: "Проректор по международным связям",
            href: "/about/leadership/vice-rector-international",
          },
          {
            title: "Проректор по экономике и хозяйству",
            href: "/about/leadership/vice-rector-economy",
          },
        ],
      },

      {
        title: "Структура",
        href: "/about/structure",
        children: [
          {
            title: "Структура Академии",
            href: "/about/structure",
          },
        ],
      },
      {
        title: "Новости",
        href: "/news",
        children: [
          {
            title: "Новости",
            href: "/news",
          },
          {
            title: "Объявления",
            href: "/announcements",
          },
          {
            title: "Публикации и статьи",
            href: "/publications",
          },
        ],
      },
      {
        title: "Управление кадров, делопроизводства и специальных работ",
        href: "/hr-department",
        children: [
          {
            title: "Общий отдел",
            href: "/hr-department/general",
          },
          {
            title: "Второй отдел",
            href: "/hr-department/second",
          },
          {
            title: "Сектор архива",
            href: "/hr-department/archive",
          },
        ],
      },

      {
        title: "Секретариат и помощник ректора",
        href: "/vacancies",
      },
      {
        title: "Совет ученых",
        href: "/council-of-scientists",
      },

      {
        title: "Юридический отдел",
        href: "/legal-department",
      },
    ],
  },
  {
    title: "Факультеты",
    href: "/about/faculties",

    children: [
      {
        title: "Факультет государственного управления",
        href: "/about/faculties/public-administration",
      },
      {
        title: "Факультет экономики",
        href: "/about/faculties/economics",
      },
    ],
  },

  {
    title: "Поступление",
    href: "/admission",
  },

  {
    title: "Образование",
    href: "/education",
  },

  {
    title: "Наука",
    href: "/science",
  },

  {
    title: "Студентам",
    href: "/students",
  },

  {
    title: "Контакты",
    href: "/contacts",
  },
];
