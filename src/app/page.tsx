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
        <div className="site-container grid items-stretch gap-x-8 lg:grid-cols-[minmax(0,1fr)_332px] min-[1920px]:gap-x-12 min-[1920px]:grid-cols-[minmax(0,1fr)_400px] min-[2560px]:gap-x-16 min-[2560px]:grid-cols-[minmax(0,1fr)_480px]">
          <div className="flex min-w-0 flex-col">
            <NewsSection />
            <ArticlesSection />
          </div>

          <div className="lg:mt-20 lg:self-start">
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
