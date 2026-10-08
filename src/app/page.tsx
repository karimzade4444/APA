import ArticlesSection from "@/components/home/ArticlesSection";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import OfficialResourcesSection from "@/components/home/OfficialResourcesSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";
import StatsSection from "@/components/home/StatsSection";
import Sidebar from "@/components/sidebar/Sidebar";


export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-[#f1ece2] pb-12">
        <div className="mx-auto grid max-w-7xl items-stretch gap-x-8 px-6 lg:grid-cols-[minmax(0,1fr)_332px]">
          <div className="flex min-w-0 flex-col">
            <NewsSection />
            <ArticlesSection />
          </div>

          <div className="lg:mt-20 lg:border-l lg:border-[#c9a45c]/40 lg:pl-8">
            <Sidebar />
          </div>
        </div>
      </div>
      <StatsSection />
      <QuickLinksSection />
      <OfficialResourcesSection />
      <ContactSection />
    </main>
  );
}
