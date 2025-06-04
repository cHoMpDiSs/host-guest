import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500))

  // In a real implementation, this would create a Stripe Customer Portal session
  const mockPortalUrl = `/account/mock-portal-${Date.now()}`

  return NextResponse.json({ url: mockPortalUrl })
} 