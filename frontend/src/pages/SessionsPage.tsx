import { DashboardLayout } from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function SessionsPage() {
    return (
        <DashboardLayout activeLink="My Sessions">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center min-h-[60vh] text-center"
            >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#635BFF] flex items-center justify-center mb-6">
                    <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">My Sessions Page</h1>
                <p className="text-gray-600 max-w-md">
                    This is the My Sessions page. View your past interview sessions and recordings here.
                </p>
            </motion.div>
        </DashboardLayout>
    );
}
