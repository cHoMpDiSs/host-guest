import { NextResponse } from 'next/server'

export async function POST() {
  // Simulate API latency
  await new Promise(resolve => setTimeout(resolve, 500))

  return NextResponse.json({
    success: true,
    message: 'Subscription has been resumed'
  })
} 