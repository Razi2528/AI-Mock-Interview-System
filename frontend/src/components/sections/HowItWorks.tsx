import { motion } from 'framer-motion';
import { Upload, Target, MessageSquare, BarChart3 } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { AnimatedSection } from '@/components/AnimatedSection';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Resume',
    description:
      'Our AI analyzes your experience, skills, and background to create personalized interview scenarios.',
    color: 'bg-blue-500',
  },
  {
    icon: Target,
    title: 'Choose Your Role',
    description:
      'Select from hundreds of job roles and difficulty levels that match your career goals.',
    color: 'bg-purple-500',
  },
  {
    icon: MessageSquare,
    title: 'Practice with AI',
    description:
      'Engage in realistic voice or text-based interviews with follow-up questions tailored to your answers.',
    color: 'bg-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Get Feedback',
    description:
      'Receive detailed analysis of your responses with actionable tips to improve your performance.',
    color: 'bg-green-500',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-[#635BFF] font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Your path to interview success
            </h2>
          </AnimatedSection>
        </div>

        {/* Steps Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow h-full border-t-4 border-t-[#635BFF]"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-gray-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
