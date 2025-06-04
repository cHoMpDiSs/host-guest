import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Search Filters */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Search Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="mt-1 block w-full rounded-md border-gray-400 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter city or address"
              />
            </div>

            {/* Distance */}
            <div>
              <label htmlFor="distance" className="block text-sm font-medium text-gray-700">
                Distance
              </label>
              <select
                id="distance"
                className="mt-1 block w-full rounded-md border-gray-400 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option>01 - 05 Km</option>
                <option>06 - 10 Km</option>
                <option>11 - 15 Km</option>
                <option>16 - 20 Km</option>
                <option>21 - 30 Km</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price Range
              </label>
              <div className="mt-1 flex space-x-2">
                <input
                  type="number"
                  id="price-from"
                  className="block w-full rounded-md border-gray-400 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="From"
                />
                <input
                  type="number"
                  id="price-to"
                  className="block w-full rounded-md border-gray-400 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="To"
                />
              </div>
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amenities
              </label>
              <div className="space-y-2">
                <label className="inline-flex items-center mb-4">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2 mr-4 text-sm text-gray-800">Internet</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-800">Pets Allowed</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button>
              Search
            </Button>
          </div>
        </div>

        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Listing Card */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Cozy Room in City Center"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">Cozy Room in City Center</h3>
              <p className="mt-1 text-sm text-gray-700">London, UK</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">$50/night</span>
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Add more listing cards here */}
        </div>
      </div>
    </div>
  )
} 