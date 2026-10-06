import type { NavigationItem } from "@/types/navigation";
import MenuTree from "./MenuTree";

type MegaMenuProps = {
  items: NavigationItem[];
  title: string;
};

const MegaMenu = ({ items, title }: MegaMenuProps) => {
  return (
    <div className="w-70 rounded border-2 border-[#c9a45c]/50 bg-[#061d35] p-6 shadow-2xl">
      <div className="mb-5 border-b border-[#c9a45c]/20 pb-4">
        <h2 className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
          {title}
        </h2>
      </div>

      <MenuTree items={items} />
    </div>
  );
};

export default MegaMenu;
