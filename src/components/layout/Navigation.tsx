import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const menuItems = [
    "Главная",
    "Об Академии",
    "Поступление",
    "Образование",
    "Наука",
    "Студентам",
    "Новости",
    "Контакты",
  ];

  return (
    <nav className="border-y border-[#c9a45c]/40 bg-[#061d35]">
      <div className="mx-auto flex max-w-7xl items-center px-6">
        {menuItems.map((item, index) => (
          <button
            key={item}
            className={`relative flex h-12 items-center px-5 text-sm font-normal uppercase tracking-wide transition duration-300 cursor-pointer ${
              index === 0
                ? "bg-[#d4af62] text-[#061d35] duration-300"
                : "text-white hover:bg-white/5 hover:text-[#d4af62] duration-300"
            }`}
          >
            {item}
            

            {index > 0 && index < 6 && (
              <span className=" ml-1 text-[#d4af62]"><ChevronDown size={16} /></span>
            )}
          </button>
        ))}

        
        
      </div>
    </nav>
  );
};

export default Navigation;
