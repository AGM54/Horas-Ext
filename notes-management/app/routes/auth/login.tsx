import { Form, useNavigate, useLocation } from "react-router";
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Here you would typically make an API call to your backend
    // For now, we'll simulate a successful login
    const mockUser = {
      id: '1',
      name: 'Test User',
      email: formData.get('email') as string,
    };
    const mockToken = 'mock-jwt-token';

    dispatch(login({ user: mockUser, token: mockToken }));
    
    // Navigate to the page the user was trying to access, or to browse
    const from = (location.state as any)?.from?.pathname || '/browse';
    navigate(from, { replace: true });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
} 