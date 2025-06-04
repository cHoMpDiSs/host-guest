import { NextResponse } from 'next/server'

// Mock subscription data
const mockSubscription = {
  status: 'active',
  plan: {
    id: 'host-pro-monthly',
    name: 'Professional Host',
    price: 79,
    billingPeriod: 'monthly'
  },
  currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
  cancelAtPeriodEnd: false
}

export async function GET() {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500))

  return NextResponse.json(mockSubscription)
} 