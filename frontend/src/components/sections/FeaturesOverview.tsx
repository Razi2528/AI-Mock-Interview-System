import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, MessageCircle, BarChart3 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function FeaturesOverview() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="text-[#635BFF] font-semibold text-sm uppercase tracking-wider">
                Complete Interview Solution
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                Everything you need to ace your next interview
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From resume analysis to personalized questions, our AI creates a realistic 
                interview experience that helps you identify strengths and improve weaknesses.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Button className="bg-[#635BFF] hover:bg-[#4F46E5] text-white rounded-full px-6 py-3 h-auto group">
                Explore Features
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedSection>

            {/* See Also Links */}
            <AnimatedSection delay={0.4}>
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">See also</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#635BFF] hover:text-[#4F46E5] font-medium transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Resume Analysis
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#635BFF] hover:text-[#4F46E5] font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Technical Questions
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#635BFF] hover:text-[#4F46E5] font-medium transition-colors"
                  >
                    <BarChart3 className="w-4 h-4" />
                    Behavioral Prep
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Visualization */}
          <AnimatedSection delay={0.2} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img
                src="/images/feature-visualization.jpg"
                alt="Interview Process"
                className="w-full rounded-2xl shadow-xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#635BFF]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
