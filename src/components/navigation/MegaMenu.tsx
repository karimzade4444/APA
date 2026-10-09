import type { NavigationItem } from "@/types/navigation";
import MenuTree from "./MenuTree";
import StaggerItem from "../animations/StraggerItem";
import Stagger from "../animations/Stragger";


type MegaMenuProps = {
  items: NavigationItem[];
  title: string;
};

const MegaMenu = ({ items, title }: MegaMenuProps) => {
  return (
    <div className="w-70 rounded border-2 border-[#c9a45c]/50 bg-[#061d35] p-4 shadow-2xl">
      <Stagger stagger={0.08}>
        <StaggerItem>
          <div className="mb-3 border-b border-[#d4af62] pb-3">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#d4af62]">
              {title}
            </h2>
          </div>
        </StaggerItem>

        <StaggerItem>
          <MenuTree items={items} />
        </StaggerItem>
      </Stagger>
    </div>
  );
};

export default MegaMenu;
