'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface SubscriptionDetails {
  status: 'active' | 'canceled' | 'past_due' | 'incomplete'
  plan: {
    id: string
    name: string
    price: number
    billingPeriod: 'monthly' | 'yearly'
  }
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
}

export default function SubscriptionPage() {
  const [subscription, setSubscription] = useState<SubscriptionDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await fetch('/api/subscription')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch subscription details')
        }

        setSubscription(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchSubscription()
  }, [])

  const handleCancelSubscription = async () => {
    try {
      const response = await fetch('/api/subscription/cancel', {
        method: 'POST',
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to cancel subscription')
      }

      setSubscription(prev => prev ? {
        ...prev,
        cancelAtPeriodEnd: true
      } : null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to cancel subscription')
    }
  }

  const handleResumeSubscription = async () => {
    try {
      const response = await fetch('/api/subscription/resume', {
        method: 'POST',
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to resume subscription')
      }

      setSubscription(prev => prev ? {
        ...prev,
        cancelAtPeriodEnd: false
      } : null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resume subscription')
    }
  }

  const handleUpdatePaymentMethod = () => {
    // Redirect to Stripe Customer Portal
    window.location.href = '/api/create-portal-session'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading subscription details...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 p-4 rounded-md">
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <div className="mt-2 text-sm text-red-700">{error}</div>
          </div>
        </div>
      </div>
    )
  }

  if (!subscription) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">No Active Subscription</h1>
            <p className="mt-4 text-gray-500">
              You don&apos;t have an active subscription. Choose a plan to get started.
            </p>
            <Link href="/pricing">
              <Button className="mt-6">View Plans</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Subscription Header */}
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Subscription Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Manage your subscription and billing information.
            </p>
          </div>

          {/* Subscription Info */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Plan</dt>
                <dd className="mt-1 text-sm text-gray-900">{subscription.plan.name}</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    subscription.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : subscription.status === 'past_due'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                  </span>
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Billing Period</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {subscription.plan.billingPeriod.charAt(0).toUpperCase() +
                    subscription.plan.billingPeriod.slice(1)}
                </dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Price</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  ${subscription.plan.price}/{subscription.plan.billingPeriod}
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Current Period End</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
                </dd>
              </div>

              {subscription.cancelAtPeriodEnd && (
                <div className="sm:col-span-2">
                  <div className="rounded-md bg-yellow-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          Subscription Cancellation Scheduled
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>
                            Your subscription will be canceled at the end of the current
                            billing period. You can continue to use all features until then.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </dl>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-end">
              <Button
                variant="outline"
                onClick={handleUpdatePaymentMethod}
              >
                Update Payment Method
              </Button>
              {subscription.cancelAtPeriodEnd ? (
                <Button
                  variant="primary"
                  onClick={handleResumeSubscription}
                >
                  Resume Subscription
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  onClick={handleCancelSubscription}
                  className="text-red-600 hover:text-red-700"
                >
                  Cancel Subscription
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 