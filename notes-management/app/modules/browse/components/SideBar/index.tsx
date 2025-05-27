// app/modules/browse/components/SideBar/index.tsx
import React, { type JSX } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaBook, FaFileAlt, FaChalkboardTeacher, FaUserGraduate, FaSignOutAlt } from "react-icons/fa";
import Text from "~/components/atoms/Text";
import Button from "~/components/atoms/Button";
import { logout } from "~/store";

// Define tus items de navegación
interface NavItem {
  label: string;
  icon: JSX.Element;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Cursos",      icon: <FaBook />,              path: "/dashboard/cursos" },
  { label: "Notas",       icon: <FaFileAlt />,           path: "/dashboard/notas" },
  { label: "Boletas",     icon: <FaFileAlt />,           path: "/dashboard/boletas" },
  { label: "Maestros",    icon: <FaChalkboardTeacher />, path: "/dashboard/maestros" },
  { label: "Estudiantes", icon: <FaUserGraduate />,      path: "/dashboard/estudiantes" },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("authState");
    localStorage.removeItem("userLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <aside className="w-60 bg-[#275C91] text-white min-h-screen flex flex-col px-4 py-6">
      {/* Logo */}
      <div className="mb-8 w-full flex justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow">
          <Text variant="H2" color="primaryDark">RTHI</Text>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex-1 space-y-2">
        {navItems.map(({ label, icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded transition ${
                isActive
                  ? "bg-[#1f3552] text-white"
                  : "hover:bg-[#1f3552]/80 text-white"
              }`
            }
          >
            {icon}
            <Text variant="body">{label}</Text>
          </NavLink>
        ))}
      </nav>

      {/* Cerrar sesión */}
      <div className="mt-auto">
        <Button variant="sidebar" fullWidth onClick={handleLogout}>
          <FaSignOutAlt />
          <span className="ml-2">Cerrar sesión</span>
        </Button>
      </div>
    </aside>
  );
}
