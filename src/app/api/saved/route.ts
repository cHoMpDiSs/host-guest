import { NextResponse } from 'next/server'

// Mock data for saved listings
const savedListings = [
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
    savedAt: '2024-02-20T10:30:00Z'
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
    savedAt: '2024-02-19T15:45:00Z'
  }
]

export async function GET() {
  return NextResponse.json(savedListings)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const newSavedListing = {
      ...data,
      savedAt: new Date().toISOString()
    }

    // In a real app, this would be saved to a database
    return NextResponse.json(newSavedListing)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save listing' },
      { status: 500 }
    )
  }
} 