import { DashboardLayout } from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

export function AnalyticsPage() {
    return (
        <DashboardLayout activeLink="Analytics">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center min-h-[60vh] text-center"
            >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center mb-6">
                    <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Analytics Page</h1>
                <p className="text-gray-600 max-w-md">
                    This is the Analytics page. Track your progress and performance metrics here.
                </p>
            </motion.div>
        </DashboardLayout>
    );
}
