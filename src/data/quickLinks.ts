import {
  BookOpen,
  Globe,
  GraduationCap,
  Newspaper,
  Monitor,
  Building2,
} from "lucide-react";

export type QuickLink = {
  id: number;
  title: string;
  href: string;
  image: string;
  icon: React.ElementType;
};

export const quickLinks: QuickLink[] = [
  {
    id: 1,
    title: "Газета",
    href: "/services/newspaper",
    image: "/images/quick-links/newspaper.png",
    icon: Newspaper,
  },
  {
    id: 2,
    title: "Журнал",
    href: "/services/magazine",
    image: "/images/quick-links/magazine.png",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Электронная библиотека",
    href: "/services/e-resources",
    image: "/images/quick-links/e-resources.png",
    icon: Monitor,
  },
  {
    id: 4,
    title: "Сайт ALFA-XPress",
    href: "/services/alfa-xpress",
    image: "/images/quick-links/alfa-xpress.png",
    icon: Globe,
  },
  {
    id: 5,
    title: "Технологические парки",
    href: "/services/technology-parks",
    image: "/images/quick-links/technology-park.png",
    icon: Building2,
  },
  {
    id: 6,
    title: "Диссертационный совет",
    href: "/services/dissertation-council",
    image: "/images/quick-links/dissertation-council.png",
    icon: GraduationCap,
  },
];
