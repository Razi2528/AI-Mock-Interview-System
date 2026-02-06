import { DashboardLayout } from '@/components/DashboardLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    Code2,
    Cpu,
    Heart,
    Briefcase,
    DollarSign,
    Palette,
    Scale,
    Users,
    ChevronRight,
    Sparkles
} from 'lucide-react';

const interviewCategories = [
    {
        id: 1,
        title: 'CSE Technical Interview',
        description: 'Master coding challenges and technical problem-solving for computer science roles.',
        keyTopics: ['Data Structures', 'Algorithms', 'System Design', 'Coding'],
        icon: Code2,
        gradient: 'from-[#635BFF] to-[#7B3FF2]',
        iconBg: 'bg-[#635BFF]/10',
        iconColor: 'text-[#635BFF]',
        image: '/src/assets/cse_technical_interview.png',
    },
    {
        id: 2,
        title: 'B.Tech Core Engineering Interview',
        description: 'Prepare for core engineering concepts across mechanical, electrical, and civil disciplines.',
        keyTopics: ['Thermodynamics', 'Circuits', 'Mechanics', 'Materials'],
        icon: Cpu,
        gradient: 'from-[#00D4FF] to-[#635BFF]',
        iconBg: 'bg-[#00D4FF]/10',
        iconColor: 'text-[#00D4FF]',
        image: '/src/assets/btech_engineering_interview.png',
    },
    {
        id: 3,
        title: 'Medical & Healthcare Interview',
        description: 'Practice clinical scenarios, medical ethics, and patient care communication.',
        keyTopics: ['Clinical Knowledge', 'Patient Care', 'Ethics', 'Diagnosis'],
        icon: Heart,
        gradient: 'from-[#f093fb] to-[#f5576c]',
        iconBg: 'bg-[#f093fb]/10',
        iconColor: 'text-[#f093fb]',
        image: '/src/assets/medical_healthcare_interview.png',
    },
    {
        id: 4,
        title: 'MBA & Business Interview',
        description: 'Develop strategic thinking and business acumen for management consulting and MBA programs.',
        keyTopics: ['Case Studies', 'Strategy', 'Leadership', 'Analytics'],
        icon: Briefcase,
        gradient: 'from-[#fa709a] to-[#fee140]',
        iconBg: 'bg-[#fa709a]/10',
        iconColor: 'text-[#fa709a]',
        image: '/src/assets/mba_business_interview.png',
    },
    {
        id: 5,
        title: 'Finance & Accounting Interview',
        description: 'Excel in financial analysis, accounting principles, and investment banking scenarios.',
        keyTopics: ['Financial Modeling', 'Accounting', 'Valuation', 'Markets'],
        icon: DollarSign,
        gradient: 'from-[#30cfd0] to-[#0ea57a]',
        iconBg: 'bg-[#30cfd0]/10',
        iconColor: 'text-[#30cfd0]',
        image: '/src/assets/finance_accounting_interview.png',
    },
    {
        id: 6,
        title: 'Design & Portfolio Interview',
        description: 'Showcase your creative process and design thinking for UX/UI and graphic design roles.',
        keyTopics: ['UX/UI Design', 'Portfolio', 'Design Thinking', 'Creativity'],
        icon: Palette,
        gradient: 'from-[#a18cd1] to-[#fbc2eb]',
        iconBg: 'bg-[#a18cd1]/10',
        iconColor: 'text-[#a18cd1]',
        image: '/src/assets/design_portfolio_interview.png',
    },
    {
        id: 7,
        title: 'Law & Public Service Interview',
        description: 'Prepare for legal reasoning, constitutional knowledge, and civil service examinations.',
        keyTopics: ['Legal Reasoning', 'Constitution', 'Current Affairs', 'Ethics'],
        icon: Scale,
        gradient: 'from-[#667eea] to-[#764ba2]',
        iconBg: 'bg-[#667eea]/10',
        iconColor: 'text-[#667eea]',
        image: '/src/assets/law_public_service.png',
    },
    {
        id: 8,
        title: 'General HR Interview (All Fields)',
        description: 'Build confidence in behavioral questions and professional communication for any industry.',
        keyTopics: ['Behavioral Questions', 'Communication', 'Strengths', 'Motivation'],
        icon: Users,
        gradient: 'from-[#4facfe] to-[#00f2fe]',
        iconBg: 'bg-[#4facfe]/10',
        iconColor: 'text-[#4facfe]',
        image: '/src/assets/general_hr_interview.png',
    },
];

export function PracticePage() {
    return (
        <DashboardLayout activeLink="Practice">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Choose Your Interview Type
                    </h1>
                    <Sparkles className="w-6 h-6 text-[#635BFF]" />
                </div>
                <p className="text-gray-600">
                    Select the interview category that matches your goals and start practicing with AI-powered mock interviews.
                </p>
            </motion.div>

            {/* Interview Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {interviewCategories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        {/* Card Image/Icon Header */}
                        <div className={`relative h-40 bg-gradient-to-br ${category.gradient} flex items-center justify-center overflow-hidden p-6`}>
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

                            {/* White container for image */}
                            <div className="relative z-10 w-28 h-28 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#635BFF] transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                {category.description}
                            </p>

                            {/* Key Topics */}
                            <div className="mb-4">
                                <p className="text-xs font-semibold text-gray-500 mb-2">KEY TOPICS</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {category.keyTopics.map((topic, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Start Interview Button */}
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    className={`w-full bg-gradient-to-br ${category.gradient} text-white hover:opacity-90 rounded-xl font-semibold group/btn`}
                                >
                                    Start Interview
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-12"
            >
                <div className="relative overflow-hidden bg-gradient-to-br from-[#635BFF] via-[#7B3FF2] to-[#00D4FF] rounded-2xl p-8 lg:p-10">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                    <div className="relative z-10 text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-white/90 max-w-2xl mx-auto mb-6">
                            Our AI-powered system can recommend the best interview type based on your profile and career goals.
                            Let's find the perfect practice path for you!
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="h-12 px-8 bg-white text-[#635BFF] hover:bg-gray-100 rounded-xl font-semibold text-base group">
                                Get Personalized Recommendations
                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </DashboardLayout>
    );
}
