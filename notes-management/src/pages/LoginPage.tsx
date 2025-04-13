import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../app/store/authSlice";
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
    navigate("dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f3552] relative">
      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
        <span className="text-sm font-semibold text-[#1f3552]">RTHI</span>
      </div>
      <LoginCard onLogin={handleLogin} />
    </div>
  );
}
