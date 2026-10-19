import type { Metadata } from "next";
import DepartmentPageTemplate from "@/components/structure/DepartmentPageTemplate";
import { departments } from "@/data/departments";

export const metadata: Metadata = {
  title: "Второй отдел | Управление кадров Академии",
  description:
    "Руководство, штат и задачи Второго отдела Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function SecondDepartmentRoute() {
  return <DepartmentPageTemplate department={departments.second} />;
}
