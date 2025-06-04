import { NextResponse } from 'next/server'

// Mock price IDs for different tiers
const MOCK_PRICES = {
  'host-basic-monthly': 29,
  'host-basic-yearly': 278,
  'host-pro-monthly': 79,
  'host-pro-yearly': 758,
  'host-enterprise-monthly': 199,
  'host-enterprise-yearly': 1910,
  'guest-plus-monthly': 9.99,
  'guest-plus-yearly': 95.90
}

export async function POST(request: Request) {
  try {
    const { tierId, billingPeriod } = await request.json()
    
    // Mock checkout session creation
    // In a real implementation, this would create a Stripe checkout session
    const mockCheckoutUrl = `/checkout/mock-session-${Date.now()}?tier=${tierId}&billing=${billingPeriod}`

    // Simulate a brief delay to mimic API latency
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({ 
      url: mockCheckoutUrl,
      price: MOCK_PRICES[`${tierId}-${billingPeriod}` as keyof typeof MOCK_PRICES]
    })
  } catch (error) {
    console.error('Error creating subscription:', error)
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    )
  }
} 