
export type StructureCategory =
  | "leadership"
  | "science"
  | "education"
  | "administration"
  | "infrastructure";

export type StructureDepartment = {
  id: string;
  title: string;
  href?: string;
};

export type StructureItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  category: StructureCategory;
  href: string;
  count?: string;
  children?: StructureDepartment[];
};

export const structureIntro = {
  eyebrow: "Организационное устройство",
  title: "Структура Академии",
  description:
    "Академия объединяет руководство, образовательные и научно-исследовательские подразделения, административные службы и инфраструктуру, обеспечивающие подготовку и развитие кадров для государственной службы.",
};

export const structurePrinciples = [
  {
    number: "01",
    title: "Руководство",
    description:
      "Определяет стратегические направления деятельности Академии и координирует работу подразделений.",
  },
  {
    number: "02",
    title: "Образование",
    description:
      "Объединяет факультеты, кафедры, магистратуру и программы профессиональной подготовки.",
  },
  {
    number: "03",
    title: "Наука и инновации",
    description:
      "Охватывает исследовательскую деятельность, научные проекты и развитие инноваций.",
  },
  {
    number: "04",
    title: "Администрация и инфраструктура",
    description:
      "Обеспечивает организационную, финансовую и хозяйственную деятельность Академии.",
  },
];

export const structureItems: StructureItem[] = [
  {
    id: "leadership",
    number: "01",
    title: "Ректор и проректоры",
    description: "Руководство Академии.",
    category: "leadership",
    href: "/leadership",
  },
  {
    id: "research-institutes",
    number: "02",
    title: "Научно-исследовательские институты",
    description: "Два исследовательских института.",
    category: "science",
    href: "/science/institutes",
    count: "02",
    children: [
      {
        id: "institute-public-administration",
        title: "Институт государственного управления и госслужбы",
        href: "/science/institutes/public-administration",
      },
      {
        id: "institute-political-processes",
        title: "Институт политических процессов",
        href: "/science/institutes/political-processes",
      },
    ],
  },
  {
    id: "professional-development",
    number: "03",
    title:
      "Институт повышения квалификации и переподготовки государственных служащих",
    description: "Повышение квалификации и профессиональная подготовка.",
    category: "education",
    href: "/education/professional-development",
    children: [
      {
        id: "civil-servant-education",
        title: "Отдел образования госслужащих",
      },
      {
        id: "civil-servant-training",
        title: "Отдел профподготовки госслужащих",
      },
    ],
  },
  {
    id: "statehood-center",
    number: "04",
    title: "Центр изучения «Школы государственности Эмомали Рахмона»",
    description: "Изучение вопросов государственности.",
    category: "science",
    href: "/science/centers/statehood",
  },
  {
    id: "management",
    number: "05",
    title: "Управления",
    description: "Шесть управлений Академии и их отделы.",
    category: "administration",
    href: "/structure/management",
    count: "06",
    children: [
      {
        id: "human-resources",
        title: "Управление кадров и специальных работ",
        href: "/structure/management/human-resources",
      },
      {
        id: "educational-process",
        title: "Управление учебного процесса",
        href: "/structure/management/educational-process",
        
      },
      {
        id: "science-innovation",
        title: "Управление науки и инноваций",
        href: "/structure/management/science-innovation",
      },
      {
        id: "international-relations",
        title: "Управление международных связей",
        href: "/structure/management/international-relations",
      },
      {
        id: "educational-work",
        title: "Управление воспитательной работы",
        href: "/structure/management/educational-work",
      },
      {
        id: "finance",
        title: "Управление финансов и учёта",
        href: "/structure/management/finance",
      },
    ],
  },
  {
    id: "faculties",
    number: "06",
    title: "Факультеты",
    description: "Четыре факультета Академии.",
    category: "education",
    href: "/education/faculties",
    count: "04",
  },
  {
    id: "departments",
    number: "07",
    title: "Кафедры",
    description: "Шестнадцать кафедр Академии.",
    category: "education",
    href: "/education/departments",
    count: "16",
  },
  {
    id: "masters",
    number: "08",
    title: "Магистратура",
    description: "Образовательные программы магистратуры.",
    category: "education",
    href: "/education/masters",
  },
  {
    id: "secretariat",
    number: "09",
    title: "Секретариат и помощник ректора",
    description: "Организационное сопровождение руководства.",
    category: "administration",
    href: "/structure/secretariat",
  },
  {
    id: "library",
    number: "10",
    title: "Научная библиотека",
    description: "Научные и образовательные информационные ресурсы.",
    category: "infrastructure",
    href: "/library",
  },
  {
    id: "medical-point",
    number: "11",
    title: "Медицинский пункт",
    description: "Медицинский пункт Академии.",
    category: "infrastructure",
    href: "/structure/medical-center",
  },
  {
    id: "hotel",
    number: "12",
    title: "Гостиница",
    description: "Гостиничная инфраструктура Академии.",
    category: "infrastructure",
    href: "/structure/hotel",
  },
  {
    id: "technology-park",
    number: "13",
    title: "Технопарк",
    description: "Технологическое и инновационное развитие.",
    category: "science",
    href: "/science/technology-park",
  },
];

export const managementDepartments: Record<string, StructureDepartment[]> = {
  "educational-process": [
    {
      id: "registration",
      title: "Отдел регистрации",
    },
    {
      id: "education-quality",
      title: "Отдел качества образования и мониторинга",
    },
    {
      id: "education-automation",
      title: "Отдел автоматизации обучения и тестирования",
    },
    {
      id: "practice",
      title: "Отдел практики",
    },
  ],

  "science-innovation": [
    {
      id: "publishing",
      title: "Издательский отдел",
    },
    {
      id: "scientific-personnel",
      title: "Отдел подготовки научных кадров",
    },
    {
      id: "masters-department",
      title: "Отдел магистратуры",
    },
    {
      id: "electronic-library",
      title: "Научно-электронная библиотека",
      href: "/library",
    },
    {
      id: "dissertation-councils",
      title: "Диссертационные советы",
    },
    {
      id: "journal-public-administration",
      title: "Журнал «Государственное управление»",
    },
    {
      id: "newspaper",
      title: "Газета «Руководитель и нация»",
    },
  ],

  "international-relations": [
    {
      id: "project-implementation",
      title: "Отдел реализации проектов",
    },
    {
      id: "international-cooperation",
      title: "Сектор международного сотрудничества",
    },
  ],

  "educational-work": [
    {
      id: "culture",
      title: "Отдел культуры",
    },
    {
      id: "dormitory",
      title: "Сектор общежития",
    },
    {
      id: "youth",
      title: "Сектор работы с молодёжью",
    },
    {
      id: "women",
      title: "Сектор работы с женщинами",
    },
  ],

  finance: [
    {
      id: "payroll",
      title: "Отдел оплаты труда",
    },
    {
      id: "scholarships",
      title: "Отдел стипендий",
    },
    {
      id: "economics-planning",
      title: "Отдел экономики и планирования",
    },
    {
      id: "property",
      title: "Отдел имущества",
    },
  ],
};

export const researchCenters: StructureDepartment[] = [
  {
    id: "statehood-school",
    title: "Центр «Школа Эмомали Рахмон»",
  },
  {
    id: "foreign-languages",
    title: "Центр иностранных языков",
  },
  {
    id: "technology-park-center",
    title: "Технопарк",
    href: "/science/technology-park",
  },
  {
    id: "child-rights",
    title: "Центр защиты прав ребёнка",
  },
  {
    id: "water-diplomacy",
    title: "Центр водной дипломатии",
  },
  {
    id: "anti-corruption",
    title: "Центр противодействия коррупции",
  },
  {
    id: "sco",
    title: "Центр ШОС в Таджикистане",
  },
];

export const otherStructureItems: StructureDepartment[] = [
  {
    id: "secretariat",
    title: "Секретариат и помощник ректора",
    href: "/structure/secretariat",
  },
  {
    id: "legal-department",
    title: "Юридический отдел",
  },
];

export const structureCategories = [
  { id: "all", label: "Все подразделения" },
  { id: "leadership", label: "Руководство" },
  { id: "education", label: "Образование" },
  { id: "science", label: "Наука и инновации" },
  { id: "administration", label: "Управления" },
  { id: "infrastructure", label: "Инфраструктура" },
] as const;

