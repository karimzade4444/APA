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
        title: "История",
        href: "/about/history",
      },

      {
        title: "Руководство",
        href: "/leadership",

        children: [
          {
            title: "Ректор",
            href: "/leadership/rector",
          },
          {
            title: "Первый проректор",
            href: "/leadership/first-vice-rector",
          },
          {
            title: "Проректор по науке и инновациям",
            href: "/leadership/vice-rector-science",
          },
          {
            title: "Проректор по идеологии и воспитанию",
            href: "/leadership/vice-rector-ideology",
          },
          {
            title: "Проректор по международным связям",
            href: "/leadership/vice-rector-international",
          },
          {
            title: "Проректор по экономике и хозяйству",
            href: "/leadership/vice-rector-economy",
          },
        ],
      },

      {
        title: "Структура",
        href: "/about/structure",
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
        title: "Кафедры",
        href: "/about/departments",

        children: [
          {
            title: "Кафедра государственного управления",
            href: "/about/departments/public-administration",
          },
          {
            title: "Кафедра права",
            href: "/about/departments/law",
          },
        ],
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
    title: "Новости",
    href: "/news",
  },

  {
    title: "Контакты",
    href: "/contacts",
  },
];
