import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { logout, isLoggedIn } from '@/lib/auth';
import { useEffect } from 'react';

export function LoggedInPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow rounded-lg p-10 text-center">
        <h1 className="text-2xl font-bold mb-4">You're logged in ✅</h1>
        <p className="text-gray-600 mb-6">Welcome back — you are successfully authenticated.</p>
        <Button onClick={handleLogout} className="bg-[#635BFF] hover:bg-[#4F46E5] text-white">
          Log out
        </Button>
      </div>
    </div>
  );
}
