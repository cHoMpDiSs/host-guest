import { CreateListingForm } from './CreateListingForm'

export default function NewListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Listing</h1>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the details below to create your listing
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <CreateListingForm />
        </div>
      </div>
    </div>
  )
} 