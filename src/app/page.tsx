import Hero from "@/components/home/Hero";
import Reveal from "@/components/animations/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />

      <Reveal>
        <div className="flex h-125 items-center justify-center bg-[#f7f4ed]">
          <h2 className="text-4xl font-semibold text-[#061d35]">
            Анимация работает
          </h2>
        </div>
      </Reveal>
    </main>
  );
}
