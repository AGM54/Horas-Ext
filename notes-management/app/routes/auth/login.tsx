import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../store/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const mockUser = {
      id: "1",
      name: "Test User",
      email: "test@example.com",
    };

    dispatch(login({ user: mockUser, token: "mock-token" }));
    navigate("dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f3552] relative">
      {/* Esquina superior izquierda (círculo decorativo) */}
      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
        <span className="text-sm font-semibold text-[#1f3552]">RTHI</span>
      </div>

      <div className="bg-[#e9eef8] p-8 rounded-lg shadow-lg w-96">
        {/* Caja cuadrada central decorativa */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-md relative flex items-center justify-center">
            <div className="absolute bottom-[-12px] w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-bold text-[#1f3552]">
              RTHI
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center text-[#263959] mb-6">
          Iniciar Sesión
        </h1>

        <input
          type="text"
          placeholder="Codigo"
          className="w-full mb-4 px-4 py-2 rounded bg-gray-300 placeholder-gray-700 outline-none"
        />

        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full px-4 py-2 rounded bg-gray-300 placeholder-gray-700 outline-none"
          />
          <span
            className="absolute right-3 top-2.5 text-gray-700 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#a5d2fd] text-[#1f3552] font-medium py-2 rounded hover:bg-[#92c3f4] transition"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
