import { Eye, Phone, Search } from "lucide-react";

const TopBar = () => {
  return (
    <div className="relative z-10 border-b border-white/10 text-sm text-white">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between px-6 2xl:max-w-336">
        <p className=" text-xs text-white/60">
          Официальный сайт Академии государственного управления при Президенте
          Республики Таджикистан
        </p>

        <div className="flex items-center gap-6">
          <div className="text-white/80   justify-center flex items-center gap-2">
            <Phone />
            +992 (37) 224-17-86 info@apa.tj
          </div>

          <div className="flex items-center gap-3">
            <button className="font-medium text-[#d4af62] cursor-pointer">RU</button>

            <span className="text-white/20 cursor-default">|</span>

            <button className="text-white/70 transition hover:text-[#d4af62] cursor-pointer">
              TJ
            </button>

            <span className="text-white/20 cursor-default">|</span>

            <button className="text-white/70 transition hover:text-[#d4af62] cursor-pointer">
              EN
            </button>
          </div>

          <button
            aria-label="Поиск"
            className="text-white transition hover:text-[#d4af62] cursor-pointer"
          >
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
