'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const featuredPlans = [
  {
    type: 'Guest',
    name: 'Basic',
    price: 0,
    description: 'Perfect for occasional travelers',
    features: [
      'Basic search features',
      'Standard filters',
      'Email support'
    ]
  },
  {
    type: 'Host',
    name: 'Professional',
    price: 79,
    description: 'For hosts managing multiple properties',
    features: [
      'List up to 10 properties',
      'Advanced analytics',
      'Priority support'
    ],
    popular: true
  }
]

export default function PricingPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {featuredPlans.map((plan) => (
            <div
              key={plan.type}
              className={`relative bg-white rounded-lg shadow-sm overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm">
                  Popular
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.type}</h3>
                  <p className="text-sm font-medium text-gray-500">{plan.name}</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/pricing">
                    <Button
                      variant={plan.popular ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      {plan.price === 0 ? 'Get Started' : 'Choose Plan'}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/pricing">
            <Button variant="secondary">
              View all plans
            </Button>
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Need help choosing? <Link href="/contact" className="text-blue-600 hover:text-blue-500">Contact us</Link>
          </p>
        </div>
      </div>
    </section>
  )
} 