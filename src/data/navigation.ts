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
            title: "Управление кадров, делопроизводства и специальных работ",
            href: "/structure/management/hr-department",
            children: [
              {
                title: "Общий отдел",
                href: "/structure/management/hr-department/general",
              },
              {
                title: "Второй отдел",
                href: "/structure/management/hr-department/second",
              },
              {
                title: "Сектор архива",
                href: "/structure/management/hr-department/archive",
              },
            ],
          },
          {
            title: "Управление учебного процесса",
            href: "/structure/management/educational-process",
            children: [
              {
                title: "Отдел регистрации",
                href: "/structure/management/educational-process/registration",
              },
              {
                title: "Отдел качества образования и мониторинга",
                href: "/structure/management/educational-process/education-quality",
              },
              {
                title: "Отдел автоматизации обучения и тестирования",
                href: "/structure/management/educational-process/education-automation",
              },
              {
                title: "Отдел практики",
                href: "/structure/management/educational-process/practice",
              },
            ],
          },
          {
            title: "Управление науки и инноваций",
            href: "/structure/management/science-innovation",
            children: [
              {
                title: "Издательский отдел",
                href: "/structure/management/science-innovation/publishing",
              },
              {
                title: "Отдел подготовки научных кадров",
                href: "/structure/management/science-innovation/scientific-personnel",
              },
              {
                title: "Отдел магистратуры",
                href: "/structure/management/science-innovation/masters-department",
              },
              {
                title: "Научно-электронная библиотека",
                href: "/structure/management/science-innovation/electronic-library",
              },
              {
                title: "Диссертационные советы",
                href: "/structure/management/science-innovation/dissertation-councils",
              },
              {
                title: "Журнал «Государственное управление»",
                href: "/structure/management/science-innovation/journal-public-administration",
              },
              {
                title: "Газета «Руководитель и нация»",
                href: "/structure/management/science-innovation/newspaper",
              },
            ],
          },
          {
            title: "Управление международных связей",
            href: "/structure/management/international-relations",
            children: [
              {
                title: "Отдел реализации проектов",
                href: "/structure/management/international-relations/project-implementation",
              },
              {
                title: "Сектор международного сотрудничества",
                href: "/structure/management/international-relations/international-cooperation",
              },
            ],
          },
          {
            title: "Управление воспитательной работы",
            href: "/structure/management/educational-work",
            children: [
              {
                title: "Отдел культуры",
                href: "/structure/management/educational-work/culture",
              },
              {
                title: "Сектор общежития",
                href: "/structure/management/educational-work/dormitory",
              },
              {
                title: "Сектор работы с молодёжью",
                href: "/structure/management/educational-work/youth",
              },
              {
                title: "Сектор работы с женщинами",
                href: "/structure/management/educational-work/women",
              },
            ],
          },
          {
            title: "Управление финансов и учёта",
            href: "/structure/management/finance",
            children: [
              {
                title: "Отдел оплаты труда",
                href: "/structure/management/finance/payroll",
              },
              {
                title: "Отдел стипендий",
                href: "/structure/management/finance/scholarships",
              },
              {
                title: "Отдел экономики и планирования",
                href: "/structure/management/finance/economics-planning",
              },
              {
                title: "Отдел имущества",
                href: "/structure/management/finance/property",
              },
            ],
          },
          {
            title:
              "Институт повышения квалификации и переподготовки государственных служащих",
            href: "/structure/continuing-education",
            children: [
              {
                title: "Отдел образования госслужащих",
                href: "/structure/continuing-education/education",
              },
              {
                title: "Отдел профподготовки госслужащих",
                href: "/structure/continuing-education/training",
              },
            ],
          },
          {
            title: "Исследовательские институты",
            href: "/structure/institutes",
            children: [
              {
                title: "Институт государственного управления и госслужбы",
                href: "/structure/institutes/public-administration",
              },
              {
                title: "Институт политических процессов",
                href: "/structure/institutes/political-processes",
              },
            ],
          },
          {
            title: "Центры",
            href: "/structure/centers",
            children: [
              {
                title: "Центр «Школа Эмомали Рахмон»",
                href: "/structure/centers/statehood-school",
              },
              {
                title: "Центр иностранных языков",
                href: "/structure/centers/foreign-languages",
              },
              {
                title: "Технопарк",
                href: "/science/technology-park",
              },
              {
                title: "Центр защиты прав ребёнка",
                href: "/structure/centers/child-rights",
              },
              {
                title: "Центр водной дипломатии",
                href: "/structure/centers/water-diplomacy",
              },
              {
                title: "Центр противодействия коррупции",
                href: "/structure/centers/anti-corruption",
              },
              {
                title: "Центр ШОС в Таджикистане",
                href: "/structure/centers/sco",
              },
            ],
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
    title: "Абитуриентам",
    href: "/abiturients",
  },
  {
    title: "Студентам",
    href: "/students",
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
    title: "Контакты",
    href: "/contacts",
  },
];
