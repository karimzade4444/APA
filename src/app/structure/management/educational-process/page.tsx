import type { Metadata } from "next";
import DepartmentPageTemplate from "@/components/structure/DepartmentPageTemplate";
import { departments } from "@/data/departments";

export const metadata: Metadata = {
  title: "Управление учебного процесса | Структура Академии",
  description:
    "Структура, руководство и основные направления деятельности управления учебного процесса Академии.",
};

export default function EducationalProcessPage() {
  const department = departments["educational-process"];

  return <DepartmentPageTemplate department={department} />;
}
