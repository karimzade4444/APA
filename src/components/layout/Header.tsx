import Brand from "./Brand";
import HeaderQuote from "./HeaderQuote";
import Navigation from "./Navigation";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className="relative z-50 bg-[#061d35]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/assets/flag.png')] bg-cover  bg-center opacity-100" />
        <div className="absolute inset-0 bg-linear-to-r from-[#061d35] via-[#061d35]/90 to-[#061d35]/60" />
      </div>

      <TopBar />

      <div className="relative z-10 border-b border-[#c9a45c]/40">
        <div className="mx-auto flex min-h-31.25 max-w-7xl items-center justify-between px-6">
          <Brand />

          <HeaderQuote />
        </div>
      </div>
      <Navigation />
      <div className="relative z-10 border-b border-[#c9a45c]/40"></div>
    </header>
  );
};

export default Header;
