import type { Metadata } from "next";
import { StructureHero } from "@/components/structure/StructureHero";
import { StructureOverview } from "@/components/structure/StructureOverview";
import { StructureChart } from "@/components/structure/StructureChart";

export const metadata: Metadata = {
  title: "Структура Академии",
  description:
    "Организационная структура Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function StructurePage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3]">
      <StructureHero />
      <StructureOverview />
      <StructureChart/>
      
    </main>
  );
}
