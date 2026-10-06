import Brand from "./Brand";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />

      <div className="bg-[#071d35]">
        <div className="mx-auto flex min-h-28 max-w-380 items-center px-6">
          <Brand />
        </div>
      </div>
    </header>
  );
};

export default Header;
