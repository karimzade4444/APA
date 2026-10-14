import type { Metadata } from "next";
import GeneralDepartmentPage from "@/components/structure/GeneralDepartmentPage";

export const metadata: Metadata = {
  title: "Общий отдел | Управление кадров Академии",
  description:
    "Руководство, штат и основные направления деятельности Общего отдела Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function GeneralDepartmentRoute() {
  return <GeneralDepartmentPage />;
}
