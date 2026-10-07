import ArticlesSection from "@/components/home/ArticlesSection";
import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import StatsSection from "@/components/home/StatsSection";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-[#f1ece2]">
        <div className="mx-auto grid max-w-7xl items-start gap-x-8 px-6 lg:grid-cols-[minmax(0,1fr)_332px]">
          <div className="min-w-0">
            <NewsSection />
            <ArticlesSection />
          </div>

          <div className="mb-12 lg:mt-20 lg:mb-16 lg:border-l lg:border-[#c9a45c]/40 lg:pl-8">
            <Sidebar />
          </div>
        </div>
      </div>
      <StatsSection/>
    </main>
  );
}
