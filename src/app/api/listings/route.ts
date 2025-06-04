import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// Validation schema for creating a listing
const createListingSchema = z.object({
  title: z.string().min(5).max(100),
  description: z.string().min(20).max(1000),
  price: z.number().positive(),
  location: z.string().min(5).max(200),
  city: z.string().min(2).max(100),
  country: z.string().min(2).max(100),
  amenities: z.array(z.string()),
  images: z.array(z.string())
})

export async function POST(request: Request) {
  try {
    // Check authentication
    const session = await getServerSession()
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get the user from the database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! }
    })

    if (!user || user.userType !== 'HOST') {
      return NextResponse.json(
        { error: 'Only hosts can create listings' },
        { status: 403 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = createListingSchema.parse(body)

    // Create the listing
    const listing = await prisma.listing.create({
      data: {
        ...validatedData,
        hostId: user.id
      }
    })

    return NextResponse.json(listing, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating listing:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 