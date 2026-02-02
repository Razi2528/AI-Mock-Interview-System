import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { DashboardLayout } from '@/components/DashboardLayout';
import {
  BookOpen,
  Clock,
  Target,
  TrendingUp,
  ChevronRight,
  Plus,
  Award,
  Play,
  FileText,
  BarChart3,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

const statsCards = [
  {
    label: 'Total Sessions',
    value: '24',
    change: '+12%',
    positive: true,
    icon: BookOpen,
    gradient: 'from-[#635BFF] to-[#7B3FF2]',
  },
  {
    label: 'Practice Hours',
    value: '18.5',
    change: '+8.2%',
    positive: true,
    icon: Clock,
    gradient: 'from-[#00D4FF] to-[#635BFF]',
  },
  {
    label: 'Avg. Score',
    value: '85%',
    change: '+5%',
    positive: true,
    icon: Target,
    gradient: 'from-[#f093fb] to-[#f5576c]',
  },
  {
    label: 'Improvement',
    value: '32%',
    change: '+15%',
    positive: true,
    icon: TrendingUp,
    gradient: 'from-[#4facfe] to-[#00f2fe]',
  },
];

const recentSessions = [
  {
    id: 1,
    title: 'Software Engineer Interview',
    company: 'Google',
    date: '2 hours ago',
    score: 88,
    status: 'completed',
  },
  {
    id: 2,
    title: 'Frontend Developer Interview',
    company: 'Meta',
    date: 'Yesterday',
    score: 82,
    status: 'completed',
  },
  {
    id: 3,
    title: 'Full Stack Developer Interview',
    company: 'Amazon',
    date: '3 days ago',
    score: 79,
    status: 'completed',
  },
  {
    id: 4,
    title: 'System Design Interview',
    company: 'Netflix',
    date: '1 week ago',
    score: 91,
    status: 'completed',
  },
];

const quickActions = [
  {
    label: 'Start New Interview',
    description: 'Practice with AI-generated questions',
    icon: Play,
    color: 'bg-[#635BFF]',
  },
  {
    label: 'Upload Resume',
    description: 'Get personalized questions',
    icon: FileText,
    color: 'bg-[#00D4FF]',
  },
  {
    label: 'View Analytics',
    description: 'Track your progress',
    icon: BarChart3,
    color: 'bg-[#f093fb]',
  },
];

const skillProgress = [
  { name: 'Technical Skills', progress: 85, color: '#635BFF' },
  { name: 'Communication', progress: 78, color: '#00D4FF' },
  { name: 'Problem Solving', progress: 92, color: '#4facfe' },
  { name: 'Behavioral', progress: 70, color: '#f093fb' },
];

export function DashboardPage() {
  return (
    <DashboardLayout activeLink="Dashboard">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Welcome back! 👋
        </h1>
        <p className="text-gray-600">
          Ready to ace your next interview? Let's practice!
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'
                  }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
              <Sparkles className="w-5 h-5 text-[#635BFF]" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.label}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="group p-5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-[#635BFF]/5 hover:to-[#635BFF]/10 border border-gray-100 hover:border-[#635BFF]/20 transition-all duration-300 text-left"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#635BFF] transition-colors">
                    {action.label}
                  </h3>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Skill Progress</h2>
              <Award className="w-5 h-5 text-[#635BFF]" />
            </div>
            <div className="space-y-5">
              {skillProgress.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {skill.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Sessions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Sessions</h2>
            <Button
              variant="ghost"
              className="text-[#635BFF] hover:text-[#4F46E5] hover:bg-[#635BFF]/5 gap-1"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {recentSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#635BFF]/10 to-[#7B3FF2]/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#635BFF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate group-hover:text-[#635BFF] transition-colors">
                    {session.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {session.company} • {session.date}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${session.score >= 85
                      ? 'bg-green-100 text-green-700'
                      : session.score >= 70
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {session.score}%
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#635BFF] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Start New Interview CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-[#635BFF] via-[#7B3FF2] to-[#00D4FF] rounded-2xl p-8 lg:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to Practice?
              </h2>
              <p className="text-white/80 max-w-md">
                Start a new mock interview session and improve your skills with
                AI-powered feedback.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="h-14 px-8 bg-white text-[#635BFF] hover:bg-gray-100 rounded-xl font-semibold text-lg group">
                <Plus className="w-5 h-5 mr-2" />
                Start New Interview
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
