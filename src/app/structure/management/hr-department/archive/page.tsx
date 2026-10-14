import type { Metadata } from "next";
import ArchiveSectorPage from "@/components/structure/ArchiveSectorPage";

export const metadata: Metadata = {
  title: "Сектор архива | Управление кадров Академии",
  description:
    "Заведующая, документы на хранении и деятельность архивного сектора Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function ArchiveSectorRoute() {
  return <ArchiveSectorPage />;
}
