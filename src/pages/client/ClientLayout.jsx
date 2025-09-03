import { Outlet } from "react-router-dom";
import OrganizationFamilyHeader from "../../components/OrganizationFamilyHeader";

const ClientLayout = () => {
  return (
    <div className="min-h-screen">
      <OrganizationFamilyHeader />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
