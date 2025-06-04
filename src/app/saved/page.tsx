'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface Listing {
  id: string
  title: string
  description: string
  price: number
  location: string
  city: string
  country: string
  images: string[]
  amenities: string[]
  hostId: string
}

export default function SavedPage() {
  const [savedListings, setSavedListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSavedListings = async () => {
      try {
        const response = await fetch('/api/saved')
        const data = await response.json()
        setSavedListings(data)
      } catch (error) {
        console.error('Error fetching saved listings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSavedListings()
  }, [])

  const handleRemove = async (id: string) => {
    try {
      await fetch(`/api/saved/${id}`, {
        method: 'DELETE',
      })
      setSavedListings(prev => prev.filter(listing => listing.id !== id))
    } catch (error) {
      console.error('Error removing saved listing:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved Properties</h1>

        {savedListings.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-500 mb-4">You haven't saved any properties yet.</p>
            <Link href="/">
              <Button>Browse Properties</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedListings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={listing.images[0]}
                    alt={listing.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{listing.title}</h3>
                  <p className="mt-1 text-gray-500">{listing.location}</p>
                  <p className="mt-1 text-gray-900">${listing.price} per night</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link href={`/listings/${listing.id}`}>
                      <Button variant="outline">View Details</Button>
                    </Link>
                    <Button
                      variant="secondary"
                      onClick={() => handleRemove(listing.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 