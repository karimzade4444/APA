import type { Metadata } from "next";
import HumanResourcesPage from "@/components/structure/HumanResourcesPage";

export const metadata: Metadata = {
  title: "Управление кадров, делопроизводства и специальных работ | Структура Академии",
  description:
    "Руководство, задачи и штатная структура управления кадров, делопроизводства и специальных работ Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function HumanResourcesDepartmentRoute() {
  return <HumanResourcesPage />;
}
