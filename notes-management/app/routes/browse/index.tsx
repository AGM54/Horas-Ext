// routes/browse/index.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../../../src/components/organisms/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 text-white">
        <Outlet />
      </main>
    </div>
  );
}
