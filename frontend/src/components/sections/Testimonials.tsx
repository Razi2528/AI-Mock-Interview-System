import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { AnimatedSection } from '@/components/AnimatedSection';

const testimonials = [
  {
    quote:
      "I was nervous about technical interviews, but after 10 practice sessions on InterviewAI, I walked into my Google interview with confidence. Landed the job!",
    name: 'Sarah Chen',
    role: 'Software Engineer',
    company: 'Google',
    initials: 'SC',
    color: 'bg-blue-500',
  },
  {
    quote:
      "The personalized feedback was game-changing. It pointed out weaknesses I didn't know I had and helped me structure my answers better.",
    name: 'Michael Rodriguez',
    role: 'Product Manager',
    company: 'Microsoft',
    initials: 'MR',
    color: 'bg-purple-500',
  },
  {
    quote:
      "As a career changer, I needed help articulating my transferable skills. InterviewAI helped me craft compelling stories that got me hired.",
    name: 'Emily Watson',
    role: 'Data Analyst',
    company: 'Netflix',
    initials: 'EW',
    color: 'bg-pink-500',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-[#635BFF] font-semibold text-sm uppercase tracking-wider">
              Success Stories
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Hear from our users
            </h2>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col"
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-[#635BFF]/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-[#635BFF]" />
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className={`w-12 h-12 ${testimonial.color}`}>
                    <AvatarFallback className={`${testimonial.color} text-white font-semibold`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
