import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const features = [
  {
    label: 'Smart Question Generation',
    title: 'Questions that adapt to your experience',
    description:
      'Our AI generates relevant technical and behavioral questions based on your resume and target role.',
    bullets: [
      'Technical questions tailored to your skills',
      'Behavioral scenarios from your experience',
      'Dynamic follow-ups based on your answers',
    ],
    image: '/images/mockup-chat.jpg',
    imageAlt: 'AI Interview Chat',
  },
  {
    label: 'Instant Analysis',
    title: 'Know exactly how you performed',
    description:
      'Get comprehensive feedback on your answers including structure, content, delivery, and areas for improvement.',
    bullets: [
      'Strength and weakness analysis',
      'Answer structure evaluation',
      'Communication tips',
    ],
    image: '/images/mockup-feedback.jpg',
    imageAlt: 'Feedback Dashboard',
    reverse: true,
  },
  {
    label: 'Track Improvement',
    title: 'Watch yourself improve over time',
    description:
      'Track your progress across multiple practice sessions and see your confidence grow.',
    bullets: [
      'Performance analytics dashboard',
      'Skill gap identification',
      'Personalized improvement plan',
    ],
    image: '/images/mockup-analytics.jpg',
    imageAlt: 'Analytics Dashboard',
  },
];

export function KeyFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                feature.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={feature.reverse ? 'lg:order-2' : ''}>
                <AnimatedSection>
                  <span className="text-[#635BFF] font-semibold text-sm uppercase tracking-wider">
                    {feature.label}
                  </span>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + bulletIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#635BFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#635BFF]" />
                        </div>
                        <span className="text-gray-700">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>

              {/* Image */}
              <AnimatedSection delay={0.2} className={feature.reverse ? 'lg:order-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="w-full rounded-2xl shadow-xl"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#635BFF]/20 to-purple-300/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-300/20 to-[#635BFF]/20 rounded-full blur-2xl" />
                </motion.div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
