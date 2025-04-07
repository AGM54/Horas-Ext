import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const mockUser = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
    };
    
    dispatch(login({ user: mockUser, token: 'mock-token' }));
    navigate('dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login (Test)
      </button>
    </div>
  </div>
  );
} 