import { Eye, Search } from "lucide-react";

const TopBar = () => {
  return (
    <div className="border-b border-white/10 bg-[#071d35] text-sm text-white">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between px-6 2xl:max-w-336">
        <p className="text-white/80">
          Официальный сайт Академии государственного управления при Президенте
          Республики Таджикистан
        </p>

        <div className="flex items-center gap-6">
          <button className="text-white/80 transition hover:text-[#d4af62] flex items-center gap-2">
            <Eye/>
            Версия для слабовидящих
          </button>

          <div className="flex items-center gap-3">
            <button className="font-medium text-[#d4af62]">RU</button>

            <span className="text-white/20">|</span>

            <button className="text-white/70 transition hover:text-[#d4af62]">
              TJ
            </button>

            <span className="text-white/20">|</span>

            <button className="text-white/70 transition hover:text-[#d4af62]">
              EN
            </button>
          </div>

          <button
            aria-label="Поиск"
            className="text-white transition hover:text-[#d4af62]"
          >
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
