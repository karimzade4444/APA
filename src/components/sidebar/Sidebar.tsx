import PresidentCard from "./PresidentCard";
import RectorCard from "./RectorCard";
import InfoLinks from "./InfoLinks";
import GovernmentLinks from "./GovernmentLinks";

const Sidebar = () => {
  return (
    <aside className="space-y-5">
      <PresidentCard />

      <RectorCard />

      <InfoLinks />

      <GovernmentLinks />
    </aside>
  );
};

export default Sidebar;
