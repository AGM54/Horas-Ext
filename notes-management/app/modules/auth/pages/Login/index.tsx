import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "~/store";
import components from "~/components";
import type { RootState } from "~/store";
import { useEffect } from "react";

const { Text, Input, SafeInput, Button } = components;

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);
  
  // Use useEffect for redirection to avoid rendering issues
  useEffect(() => {
    if (authState.isAuthenticated) {
      console.log("Already authenticated, redirecting to dashboard");
      navigate("/dashboard/cursos", { replace: true });
    }
  }, [authState.isAuthenticated, navigate]);

  const handleLogin = () => {
    try {
      const mockUser = {
        id: "1",
        name: "Test User",
        email: "test@example.com",
      };
      
      // Dispatch login action
      dispatch(login({ user: mockUser, token: "mock-token" }));
      
      // Navigate after a short delay to ensure state updates
      setTimeout(() => {
        console.log("Redirecting to dashboard...");
        navigate("/dashboard/cursos", { replace: true });
      }, 100);
    } catch (error) {
      console.error("Login error:", error);
    }
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

        <Text variant="H3">
          Iniciar Sesión
        </Text>

        <Input type="text" placeholder="Código" className="mb-4" />
        <SafeInput className="mb-6" />
        <Button onClick={handleLogin}>Iniciar Sesión</Button>
      </div>
    </div>
  );
}
