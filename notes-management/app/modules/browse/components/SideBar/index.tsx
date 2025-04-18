import {
    FaBook,
    FaChalkboardTeacher,
    FaFileAlt,
    FaUserGraduate,
    FaSignOutAlt,
  } from "react-icons/fa";
  
  import type { JSX } from "react";
  import { useNavigate } from "react-router-dom"; 
  
  interface NavItem {
    label: string;
    icon: JSX.Element;
    path: string;
  }
  
  const navItems: NavItem[] = [
    { label: "Cursos", icon: <FaBook />, path: "/dashboard/cursos" },
    { label: "Notas", icon: <FaFileAlt />, path: "/dashboard/notas" },
    { label: "Boletas", icon: <FaFileAlt />, path: "/dashboard/boletas" },
    { label: "Maestros", icon: <FaChalkboardTeacher />, path: "/dashboard/maestros" },
    { label: "Estudiantes", icon: <FaUserGraduate />, path: "/dashboard/estudiantes" },
  ];
  
  export default function Sidebar() {
    const navigate = useNavigate(); 
  
    const handleNavigate = (path: string) => {
      navigate(path); //
    };
  
    return (
      <aside className="w-60 bg-[#275C91] text-white min-h-screen flex flex-col items-start px-4 py-6">
        {/* Logo */}
        <div className="mb-8 w-full flex justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow">
            <span className="text-[#275C91] font-bold">RTHI</span>
          </div>
        </div>
  
        {/* Navegación */}
        <nav className="w-full space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-[#1f3552] rounded transition"
            >
              <span>{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
  
        {/* Cerrar sesión */}
        <div className="mt-auto w-full">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#1f3552] rounded w-full transition"
          >
            <FaSignOutAlt />
            Cerrar sesión
          </button>
        </div>
      </aside>
    );
  }
  