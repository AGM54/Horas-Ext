import {
	FaBook,
	FaChalkboardTeacher,
	FaFileAlt,
	FaUserGraduate,
	FaSignOutAlt,
} from "react-icons/fa";

import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "~/store";
import components from "~/components";
const { Text, CursosGrid, ModalNuevaSeccion, ModalNuevoCurso, Button } = components;

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
	const dispatch = useDispatch();

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	const handleLogout = () => {
		console.log("Logging out...");

		// First dispatch the logout action
		dispatch(logout());

		// Clear localStorage directly as a safety measure
		try {
			localStorage.removeItem('authState');
			localStorage.removeItem('userLoggedIn');
		} catch (e) {
			console.error('Error clearing localStorage:', e);
		}

		// Then navigate to login
		setTimeout(() => {
			console.log("Redirecting to login page...");
			navigate("/", { replace: true });
		}, 50);
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
					<Button
						variant="sidebar2"
						key={item.label}
						onClick={() => handleNavigate(item.path)}
					>
						<span>{item.icon}</span>
						<span className="text-sm font-medium">{item.label}</span>
					</Button>
				))}
			</nav>

			{/* Cerrar sesión */}
			<div className="mt-auto w-full">
				<Button
					variant="sidebar"
					onClick={handleLogout}
				>
					<FaSignOutAlt />
					Cerrar sesión
				</Button>
			</div>
		</aside>
	);
}
