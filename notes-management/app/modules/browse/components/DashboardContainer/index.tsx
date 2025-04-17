// routes/browse/index.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/organisms/SideBar";
import { defaultColors } from "../../../app/theme/src/colors";

export default function DashboardContainer() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main
        className="flex-1 text-white"
        style={{ backgroundColor: defaultColors.primaryDark}}
      >
        <Outlet />
      </main>
    </div>
  );
}
