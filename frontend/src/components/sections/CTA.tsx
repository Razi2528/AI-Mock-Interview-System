import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#635BFF] via-[#7B3FF2] to-[#00D4FF]" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-2xl rotate-12"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-45"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to ace your next interview?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of job seekers who've improved their interview skills with 
            AI-powered practice.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-white text-[#635BFF] hover:bg-gray-100 rounded-full px-8 py-4 h-auto text-lg font-semibold group shadow-xl"
            >
              Start Practicing Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="text-white/70 text-sm mt-6">No credit card required</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
