import type { Metadata } from "next";
import LegalDepartmentPage from "@/components/structure/LegalDepartmentPage";

export const metadata: Metadata = {
  title: "Юридический отдел | Структура Академии",
  description:
    "Задачи, правовые основы и основные направления деятельности юридического отдела Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function LegalDepartmentRoute() {
  return <LegalDepartmentPage />;
}
