// routes/browse/index.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import { MainWrapper } from "./styles";
import ProtectedRoute from "../ProtectedRoute";

export default function DashboardContainer() {
  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </ProtectedRoute>
    
  );
}
