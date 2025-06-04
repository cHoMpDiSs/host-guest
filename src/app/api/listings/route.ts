import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data for template
  const listings = [
    {
      id: '1',
      title: 'Cozy Room in City Center',
      description: 'Beautiful room in the heart of the city',
      price: 50,
      location: '123 Main St',
      city: 'San Francisco',
      country: 'USA',
      images: ['/images/hero-bg.jpg'],
      amenities: ['WiFi', 'Kitchen', 'Washer'],
      hostId: '1',
    },
    {
      id: '2',
      title: 'Modern Apartment with View',
      description: 'Stunning apartment with city views',
      price: 75,
      location: '456 Park Ave',
      city: 'New York',
      country: 'USA',
      images: ['/images/hero-bg.jpg'],
      amenities: ['WiFi', 'Gym', 'Pool'],
      hostId: '2',
    },
  ]

  return NextResponse.json(listings)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Mock successful response
    return NextResponse.json({
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    )
  }
} 