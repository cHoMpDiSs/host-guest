import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function HostDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Host Dashboard</h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage your listings and bookings
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Active Listings</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">0</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Pending Bookings</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">0</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Total Earnings</h3>
            <p className="mt-2 text-3xl font-bold text-blue-600">$0</p>
          </div>
        </div>

        {/* Listings Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-900">Your Listings</h2>
            <Link href="/host/listings/new">
              <Button>
                Add New Listing
              </Button>
            </Link>
          </div>

          {/* Empty State */}
          <div className="text-center py-12">
            <h3 className="mt-2 text-sm font-medium text-gray-900">No listings</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating your first listing.
            </p>
            <div className="mt-6">
              <Link href="/host/listings/new">
                <Button>
                  Create New Listing
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-medium text-gray-900 mb-6">Recent Bookings</h2>
          
          {/* Empty State */}
          <div className="text-center py-12">
            <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              Bookings will appear here once guests start booking your listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 