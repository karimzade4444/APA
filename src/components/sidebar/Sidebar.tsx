import PresidentCard from "./PresidentCard";
import RectorCard from "./RectorCard";
import InfoLinks from "./InfoLinks";
import GovernmentLinks from "./GovernmentLinks";
import OfficialResources from "./OfficialResources";

const Sidebar = () => {
  return (
    <aside className="space-y-5 lg:border-l lg:border-[#c9a45c]/40 lg:pl-8">
      <PresidentCard />

      <RectorCard />

      <InfoLinks />

      <GovernmentLinks />
      <OfficialResources />
    </aside>
  );
};

export default Sidebar;
