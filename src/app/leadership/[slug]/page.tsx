import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LeaderPageRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/about/leadership/${encodeURIComponent(slug)}`);
}
