import type { Metadata } from "next";
import SecondDepartmentPage from "@/components/structure/SecondDepartmentPage";

export const metadata: Metadata = {
  title: "Второй отдел | Управление кадров Академии",
  description:
    "Руководство, штат и задачи Второго отдела Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function SecondDepartmentRoute() {
  return <SecondDepartmentPage />;
}
