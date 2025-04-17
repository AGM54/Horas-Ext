import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../../../store";
import LoginCard from "../components/organisms/LoginCard";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const mockUser = {
      id: "1",
      name: "Test User",
      email: "test@example.com",
    };
    dispatch(login({ user: mockUser, token: "mock-token" }));
    navigate("/dashboard/cursos", { replace: true });




  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f3552] relative">
      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
        <span className="text-sm font-semibold text-[#1f3552]">RTHI</span>
      </div>
      <div className="bg-[#e9eef8] p-8 rounded-lg shadow-lg w-96">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-md relative flex items-center justify-center">
          <div className="absolute bottom-[-12px] w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-bold text-[#1f3552]">
            RTHI
          </div>
        </div>
      </div>

      <Text variant="H3" className="block text-center text-[#263959] mb-6">
        Iniciar Sesión
      </Text>

      <Input type="text" placeholder="Código" className="mb-4" />
      <PasswordInput className="mb-6" />
      <Button onClick={handleLogin}>Iniciar Sesión</Button>
    </div>
    </div>
  );
}
