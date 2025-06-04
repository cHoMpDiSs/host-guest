'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
}

const hostTiers: PricingTier[] = [
  {
    id: 'host-basic',
    name: 'Basic Host',
    price: 29,
    description: 'Perfect for getting started with hosting',
    features: [
      'List up to 2 properties',
      'Basic analytics',
      'Standard support',
      'Basic booking management',
      'Standard calendar features'
    ]
  },
  {
    id: 'host-pro',
    name: 'Professional Host',
    price: 79,
    description: 'For hosts managing multiple properties',
    features: [
      'List up to 10 properties',
      'Advanced analytics',
      'Priority support',
      'Advanced booking management',
      'Smart pricing suggestions',
      'Professional calendar features'
    ],
    popular: true
  },
  {
    id: 'host-enterprise',
    name: 'Enterprise Host',
    price: 199,
    description: 'For large-scale property management',
    features: [
      'Unlimited property listings',
      'Enterprise analytics',
      'Dedicated support',
      'API access',
      'Custom integrations',
      'Team management',
      'Bulk operations'
    ]
  }
]

const guestTiers: PricingTier[] = [
  {
    id: 'guest-basic',
    name: 'Basic Guest',
    price: 0,
    description: 'Free tier for occasional travelers',
    features: [
      'Basic search features',
      'Standard filters',
      'Regular booking fees',
      'Email support'
    ]
  },
  {
    id: 'guest-plus',
    name: 'Guest Plus',
    price: 9.99,
    description: 'Enhanced features for frequent travelers',
    features: [
      'Advanced search features',
      'Premium filters',
      'Reduced booking fees',
      'Priority support',
      'Price alerts',
      'Early access to new listings'
    ],
    popular: true
  }
]

export default function PricingPage() {
  const [userType, setUserType] = useState<'host' | 'guest'>('guest')
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const handleSubscribe = async (tierId: string) => {
    try {
      const response = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tierId,
          billingPeriod,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error creating subscription:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Simple, transparent pricing</h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative bg-gray-100 p-0.5 rounded-lg inline-flex">
            <button
              onClick={() => setUserType('guest')}
              className={`relative px-6 py-2 rounded-md text-sm font-medium ${
                userType === 'guest'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Guest Plans
            </button>
            <button
              onClick={() => setUserType('host')}
              className={`relative px-6 py-2 rounded-md text-sm font-medium ${
                userType === 'host'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Host Plans
            </button>
          </div>
        </div>

        {/* Billing Period Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="relative bg-gray-100 p-0.5 rounded-lg inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`relative px-6 py-2 rounded-md text-sm font-medium ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`relative px-6 py-2 rounded-md text-sm font-medium ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 text-green-600">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {(userType === 'host' ? hostTiers : guestTiers).map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white rounded-lg shadow-sm overflow-hidden ${
                tier.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingPeriod === 'yearly' ? (tier.price * 0.8).toFixed(2) : tier.price}
                  </span>
                  <span className="text-gray-500">/{billingPeriod}</span>
                </p>
                <Button
                  onClick={() => handleSubscribe(tier.id)}
                  className="mt-8 w-full"
                  variant={tier.popular ? 'primary' : 'secondary'}
                >
                  {tier.price === 0 ? 'Get Started' : 'Subscribe'}
                </Button>
              </div>
              <div className="px-8 pb-8">
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 flex-shrink-0"
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
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Can I change plans later?
              </h3>
              <p className="mt-2 text-gray-500">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be
                reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                What payment methods do you accept?
              </h3>
              <p className="mt-2 text-gray-500">
                We accept all major credit cards, including Visa, Mastercard, and American
                Express. We also support PayPal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Is there a contract or commitment?
              </h3>
              <p className="mt-2 text-gray-500">
                No, all plans are month-to-month or year-to-year. You can cancel at any time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Do you offer refunds?
              </h3>
              <p className="mt-2 text-gray-500">
                Yes, we offer a 30-day money-back guarantee for all paid plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 