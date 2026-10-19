import type { Metadata } from "next";
import { notFound } from "next/navigation";

import DepartmentPageTemplate from "@/components/structure/DepartmentPageTemplate";
import { departments } from "@/data/departments";

type DepartmentRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.values(departments)
    .filter((department) => department.slug !== "hr-department")
    .map((department) => ({ slug: department.slug }));
}

export async function generateMetadata({
  params,
}: DepartmentRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const department = departments[slug];

  if (!department) {
    return { title: "Подразделение не найдено | Академия" };
  }

  return {
    title: `${department.title} | Структура Академии`,
    description: department.intro,
  };
}

export default async function DepartmentRoute({
  params,
}: DepartmentRouteProps) {
  const { slug } = await params;
  const department = departments[slug];

  if (!department || slug === "hr-department") {
    notFound();
  }

  return <DepartmentPageTemplate department={department} />;
}
