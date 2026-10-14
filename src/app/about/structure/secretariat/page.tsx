import type { Metadata } from "next";
import SecretariatPage from "@/components/structure/SecretariatPage";

export const metadata: Metadata = {
  title: "Секретариат и помощник ректора | Структура Академии",
  description:
    "Секретариат и помощник ректора Академии государственного управления при Президенте Республики Таджикистан.",
};

export default function SecretaryPage() {
  return <SecretariatPage />;
}
