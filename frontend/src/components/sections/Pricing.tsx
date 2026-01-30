import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { AnimatedSection } from '@/components/AnimatedSection';
import { formatCurrency, convertCurrency, type Currency } from '@/lib/currency';
import { Link } from 'react-router-dom';

type Plan = {
  name: string;
  price: number | 'Custom';
  priceCurrency?: Currency;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
  variant: 'outline' | 'default';
};

const plans: Plan[] = [
  {
    name: 'Free',
    price: 0,
    priceCurrency: 'USD',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '3 mock interviews/month',
      'Basic feedback',
      'Common questions library',
      'Email support',
    ],
    cta: 'Get Started Free',
    href: '/signup',
    variant: 'outline',
  },
  {
    name: 'Pro',
    price: 499,
    priceCurrency: 'INR',
    period: '/month',
    description: 'For serious job seekers',
    features: [
      'Unlimited mock interviews',
      'Detailed AI feedback',
      'Resume analysis',
      'Progress tracking',
      'All question types',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    href: '/signup',
    popular: true,
    variant: 'default',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Custom question sets',
      'Team analytics',
      'API access',
      'Dedicated support',
      'SSO & advanced security',
    ],
    cta: 'Contact Sales',
    href: '#',
    variant: 'outline',
  },
];

export function Pricing({ currency = 'INR' }: { currency?: Currency } = {}) {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-[#635BFF] font-semibold text-sm uppercase tracking-wider">
              Simple Pricing
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Choose the plan that fits your needs
            </h2>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-white rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'border-2 border-[#635BFF] shadow-lg'
                    : 'border border-gray-200 shadow-card'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#635BFF] text-white hover:bg-[#635BFF]">
                    Most Popular
                  </Badge>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {typeof plan.price === 'number'
                        ? formatCurrency(
                            Math.round(
                              convertCurrency(plan.price, plan.priceCurrency ?? 'USD', currency) * 100
                            ) / 100,
                            currency
                          )
                        : plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={plan.href} className="w-full">
                  <Button
                    variant={plan.variant}
                    className={`w-full rounded-full py-3 h-auto ${
                      plan.popular
                        ? 'bg-[#635BFF] hover:bg-[#4F46E5] text-white'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
