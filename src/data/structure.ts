
export type StructureItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  category: "leadership" | "science" | "education" | "administration" | "infrastructure";
  href: string;
  count?: string;
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
    title: "Наука и исследования",
    description:
      "Обеспечивает исследовательскую деятельность, изучение вопросов государственного управления и развитие научных инициатив.",
  },
  {
    number: "04",
    title: "Обеспечение деятельности",
    description:
      "Административные службы и инфраструктурные подразделения создают условия для работы и обучения.",
  },
];

export const structureItems: StructureItem[] = [
  {
    id: "leadership",
    number: "01",
    title: "Ректор и проректоры",
    description: "Руководство и координация деятельности Академии.",
    category: "leadership",
    href: "/leadership",
  },
  {
    id: "research-institutes",
    number: "02",
    title: "Научно-исследовательские институты",
    description: "Два института, осуществляющие научно-исследовательскую деятельность.",
    category: "science",
    href: "/science/institutes",
    count: "02",
  },
  {
    id: "professional-development",
    number: "03",
    title: "Институт повышения квалификации и переподготовки государственных служащих",
    description: "Профессиональное развитие и переподготовка государственных служащих.",
    category: "education",
    href: "/education/professional-development",
  },
  {
    id: "statehood-center",
    number: "04",
    title: "Центр изучения «Школы государственности Эмомали Рахмона»",
    description: "Изучение и исследование вопросов государственности.",
    category: "science",
    href: "/science/centers",
  },
  {
    id: "management",
    number: "05",
    title: "Управления",
    description: "Шесть управленческих подразделений Академии.",
    category: "administration",
    href: "/structure/management",
    count: "06",
  },
  {
    id: "faculties",
    number: "06",
    title: "Факультеты",
    description: "Факультеты, реализующие образовательные направления Академии.",
    category: "education",
    href: "/education/faculties",
    count: "04",
  },
  {
    id: "departments",
    number: "07",
    title: "Кафедры",
    description: "Кафедры, обеспечивающие учебную и научно-методическую работу.",
    category: "education",
    href: "/education/departments",
    count: "16",
  },
  {
    id: "masters",
    number: "08",
    title: "Магистратура",
    description: "Подготовка специалистов по программам магистратуры.",
    category: "education",
    href: "/education/masters",
  },
  {
    id: "secretariat",
    number: "09",
    title: "Секретариат и помощник ректора",
    description: "Организационное и информационное сопровождение руководства.",
    category: "administration",
    href: "/structure/secretariat",
  },
  {
    id: "library",
    number: "10",
    title: "Научная библиотека",
    description: "Информационные ресурсы для образования и научной деятельности.",
    category: "infrastructure",
    href: "/library",
  },
  {
    id: "medical-point",
    number: "11",
    title: "Медицинский пункт",
    description: "Медицинское обслуживание в соответствии с возможностями подразделения.",
    category: "infrastructure",
    href: "/structure/medical-center",
  },
  {
    id: "hotel",
    number: "12",
    title: "Гостиница",
    description: "Инфраструктурное подразделение Академии.",
    category: "infrastructure",
    href: "/structure/hotel",
  },
  {
    id: "technology-park",
    number: "13",
    title: "Технологический парк",
    description: "Развитие технологических и инновационных инициатив.",
    category: "science",
    href: "/science/technology-park",
  },
];

export const structureCategories = [
  { id: "all", label: "Все подразделения" },
  { id: "leadership", label: "Руководство" },
  { id: "education", label: "Образование" },
  { id: "science", label: "Наука" },
  { id: "administration", label: "Управления" },
  { id: "infrastructure", label: "Инфраструктура" },
] as const;

