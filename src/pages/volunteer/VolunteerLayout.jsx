import { Outlet } from "react-router-dom";
import VolunteerHeader from "../../components/VolunteerHeader";

const VolunteerLayout = () => {
  return (
    <div className="min-h-screen">
      <VolunteerHeader />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default VolunteerLayout;
