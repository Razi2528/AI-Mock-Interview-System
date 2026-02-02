import { useState, useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { logout, isLoggedIn, getToken } from '@/lib/auth';
import {
    MessageSquare,
    LayoutDashboard,
    BookOpen,
    BarChart3,
    Settings,
    LogOut,
    Mic,
    FileText,
    User,
    Bell,
    Search,
    Menu,
    X,
} from 'lucide-react';

interface UserProfile {
    name: string;
    email: string;
}

interface DashboardLayoutProps {
    children: ReactNode;
    activeLink?: string;
}

const sidebarLinks = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Practice', icon: Mic, href: '/practice' },
    { label: 'My Sessions', icon: BookOpen, href: '/sessions' },
    { label: 'Analytics', icon: BarChart3, href: '/analytics' },
    { label: 'Resume', icon: FileText, href: '/resume' },
    { label: 'Settings', icon: Settings, href: '/settings' },
];

export function DashboardLayout({ children, activeLink }: DashboardLayoutProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState<UserProfile | null>(null);

    // Determine active link from current path if not provided
    const currentPath = location.pathname;
    const activeLinkName = activeLink || sidebarLinks.find(link => link.href === currentPath)?.label || 'Dashboard';

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/login');
            return;
        }

        // Fetch user profile
        const fetchUser = async () => {
            try {
                const res = await fetch('http://localhost:8000/auth/me', {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser({ name: data.name || 'User', email: data.email });
                }
            } catch {
                // Fallback to default
                setUser({ name: 'User', email: 'user@example.com' });
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="h-screen overflow-hidden bg-gray-50 flex">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 w-[280px] h-screen bg-white border-r border-gray-200 z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0`}
            >
                {/* Logo */}
                <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100 flex-shrink-0">
                    <Link to="/dashboard" className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-[#635BFF] flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">Hirely AI</span>
                    </Link>
                    <button
                        className="lg:hidden text-gray-500 hover:text-gray-700"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 min-h-0 px-4 py-6 space-y-1 overflow-y-auto">
                    {sidebarLinks.map((link) => {
                        const isActive = link.label === activeLinkName;
                        return (
                            <Link
                                key={link.label}
                                to={link.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:translate-x-1 ${isActive
                                    ? 'bg-[#635BFF]/10 text-[#635BFF]'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                <link.icon className="w-5 h-5" />
                                {link.label}
                                {isActive && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t border-gray-100 flex-shrink-0">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#635BFF] to-[#7B3FF2] flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">
                                {user?.name || 'Loading...'}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{user?.email || ''}</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className="w-full mt-3 text-gray-600 hover:text-red-600 hover:bg-red-50 justify-start gap-2"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 min-h-0 lg:ml-[280px]">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden text-gray-500 hover:text-gray-700"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="relative hidden sm:block">
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-64 h-10 pl-10 pr-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 focus:border-[#635BFF] transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-[#635BFF] rounded-full" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#635BFF] to-[#7B3FF2] flex items-center justify-center"
                        >
                            <User className="w-5 h-5 text-white" />
                        </motion.button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
