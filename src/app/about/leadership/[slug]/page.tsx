import type { Metadata } from "next";
import LeaderPage, {
  generateMetadata as getLeaderMetadata,
  generateStaticParams as getLeaderStaticParams,
} from "@/components/leadership/[slug]/page";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLeaderStaticParams();
}

export function generateMetadata(props: PageProps): Promise<Metadata> {
  return getLeaderMetadata(props);
}

export default function Page({ params }: PageProps) {
  return <LeaderPage params={params} />;
}
