import type { Metadata } from "next";
import DepartmentPageTemplate from "@/components/structure/DepartmentPageTemplate";
import { departments } from "@/data/departments";

export const metadata: Metadata = {
  title: "Сектор архива | Управление кадров Академии",
  description:
    "Заведующая, документы на хранении и деятельность архивного сектора Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function ArchiveSectorRoute() {
  return <DepartmentPageTemplate department={departments.archive} />;
}
