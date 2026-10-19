import type { Metadata } from "next";
import DepartmentPageTemplate from "@/components/structure/DepartmentPageTemplate";
import { departments } from "@/data/departments";

export const metadata: Metadata = {
  title: "Управление кадров, делопроизводства и специальных работ | Структура Академии",
  description:
    "Руководство, задачи и штатная структура управления кадров, делопроизводства и специальных работ Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function HumanResourcesRoute() {
  return <DepartmentPageTemplate department={departments["hr-department"]} />;
}
